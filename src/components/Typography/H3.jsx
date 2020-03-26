import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const H3 = ({ children }) => {
  return <StyledH3>{children}</StyledH3>;
};

const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 2.7rem;
  color: ${({ theme }) => theme.typo.text};
`;

H3.propTypes = {
  children: node.isRequired,
};

export default H3;
