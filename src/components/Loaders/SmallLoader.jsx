import React from 'react';
import styled from 'styled-components';
import { string, object } from 'prop-types';

const SmallLoader = ({ color, ...otherProps }) => {
  return (
    <LoaderWrapper {...otherProps}>
      <Ball color={color} />
      <Ball color={color} />
      <Ball color={color} />
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
  background: ${({ theme, color }) => (color ? color : theme.brand.light)};
  border-radius: 9999px;
  animation: 0.6s bounce infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -0.5rem, 0);
    }
  }
`;

SmallLoader.propTypes = {
  /** Color of the balls */
  color: string,
  /** Other props */
  otherProps: object,
};

export default SmallLoader;
