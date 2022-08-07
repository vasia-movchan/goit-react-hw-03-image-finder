import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputValue: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({ inputValue: e.currentTarget.elements.search.value });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitForm} />
      </Container>
    );
  }
}
