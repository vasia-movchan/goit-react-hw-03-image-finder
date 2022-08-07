import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit" className="button">
          <FaSearch size={24} />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </Form>
    </Header>
  );
};
