import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const H1 = ({ children, className, ...otherProps }) => {
  return (
    <StyledH1 className={className} {...otherProps}>
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme.typo.title};

  > a {
    color: ${({ theme }) => theme.brand.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

H1.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default H1;
