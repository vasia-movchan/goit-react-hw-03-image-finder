import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
          <Button type="submit">
            <FaSearch size={20} />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            onChange={this.handleChange}
            value={inputValue}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
