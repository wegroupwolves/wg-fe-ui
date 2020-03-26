import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const H1 = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme.typo.title};
`;

H1.propTypes = {
  children: node.isRequired,
};

export default H1;
