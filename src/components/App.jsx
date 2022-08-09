import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { GetDataFromAPI } from 'services/Api';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    totalHits: 0,
    page: 1,
    showModal: false,
    largeImage: '',
    isLoading: false,
    error: null,
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({ inputValue: e.target.elements.search.value });
  };

  handleButtonLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  openModal = largeImageItem => {
    this.setState({ showModal: true, largeImage: largeImageItem });
    window.addEventListener('keydown', this.handleKeyPress);
  };

  closeModal = event => {
    if (event.target === event.currentTarget) {
      this.setState({ showModal: false });
    }
  };

  handleKeyPress = e => {
    console.log(e);
    if (e.code === 'Escape') {
      this.setState({ showModal: false });
      window.removeEventListener('keydown', this.handleKeyPress);
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    const searchQuery = this.state.inputValue;
    const page = this.state.page;

    if (prevState.inputValue !== searchQuery) {
      this.setState({ isLoading: true });
      try {
        const response = await GetDataFromAPI(searchQuery, page);
        this.setState({
          images: [...response.hits],
          totalHits: response.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }

    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const response = await GetDataFromAPI(searchQuery, page);
        this.setState({
          images: [...this.state.images, ...response.hits],
          totalHits: response.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    const { images, totalHits, showModal, largeImage, isLoading, error } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitForm} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {isLoading && <Loader />}

        {images.length > 0 && totalHits > 12 && (
          <Button loadMore={this.handleButtonLoadMore} />
        )}

        {showModal && (
          <Modal largeImg={largeImage} closeModal={this.closeModal} />
        )}
      </Container>
    );
  }
}
