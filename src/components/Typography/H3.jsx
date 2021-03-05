import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const H3 = ({ children, className, ...otherProps }) => {
  return (
    <StyledH3 className={className} {...otherProps}>
      {children}
    </StyledH3>
  );
};

const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 120%;
  color: ${({ theme }) => theme.typo.text};

  > a {
    color: ${({ theme }) => theme.brand.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

H3.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default H3;
