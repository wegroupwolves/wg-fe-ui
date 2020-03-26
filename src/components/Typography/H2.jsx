import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const H2 = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

const StyledH2 = styled.h2`
  font-family: ${({ theme }) => theme.font};
  font-size: 2.1rem;
  line-height: 130%;
  color: #8990a3;
`;

H2.propTypes = {
  children: node.isRequired,
};

export default H2;
