// import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <Btn onClick={loadMore}>Load more</Btn>;
};
