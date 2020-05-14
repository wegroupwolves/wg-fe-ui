import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const SmallLoader = () => {
  return (
    <LoaderWrapper>
      <Ball />
      <Ball />
      <Ball />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Ball = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin: 1rem 0.15rem;
  background: ${({ theme }) => theme.brand.light};
  border-radius: 9999px;
  animation: 0.9s bounce infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -0.5rem, 0);
    }
  }
`;

SmallLoader.propTypes = {};

export default SmallLoader;
