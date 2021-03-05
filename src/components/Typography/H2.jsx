import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const H2 = ({ children, className, ...otherProps }) => {
  return (
    <StyledH2 className={className} {...otherProps}>
      {children}
    </StyledH2>
  );
};

const StyledH2 = styled.h2`
  font-family: ${({ theme }) => theme.font};
  font-size: 2.1rem;
  line-height: 120%;
  color: #8990a3;

  > a {
    color: ${({ theme }) => theme.brand.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

H2.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default H2;
