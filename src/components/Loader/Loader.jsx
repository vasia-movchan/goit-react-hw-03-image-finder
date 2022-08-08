import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin color="#00BFFF" height={80} width={80} wrapperStyle />
    </LoaderWrapper>
  );
};
