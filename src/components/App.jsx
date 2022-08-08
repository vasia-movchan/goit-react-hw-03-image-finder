import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { GetDataFromAPI } from 'services/Api';

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    totalHits: 0,
    page: 1,
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

  async componentDidUpdate(prevProps, prevState) {
    const searchQuery = this.state.inputValue;
    const page = this.state.page;

    if (prevState.inputValue !== searchQuery) {
      const response = await GetDataFromAPI(searchQuery, page);
      this.setState({
        images: [...response.hits],
        totalHits: response.totalHits,
      });
    }

    if (prevState.page !== page) {
      const response = await GetDataFromAPI(searchQuery, page);
      this.setState({
        images: [...this.state.images, ...response.hits],
        totalHits: response.totalHits,
      });
    }
  }

  render() {
    const { images, totalHits } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images} />
        {images.length > 0 && totalHits > 12 && (
          <Button loadMore={this.handleButtonLoadMore} />
        )}
      </Container>
    );
  }
}
