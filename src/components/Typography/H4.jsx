import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const H4 = ({ children }) => {
  return <StyledH4>{children}</StyledH4>;
};

const StyledH4 = styled.h4`
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme.typo.title};
`;

H4.propTypes = {
  children: node.isRequired,
};

export default H4;
