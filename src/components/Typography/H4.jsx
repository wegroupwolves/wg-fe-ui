import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const H4 = ({ children, className, ...otherProps }) => {
  return (
    <StyledH4 className={className} {...otherProps}>
      {children}
    </StyledH4>
  );
};

const StyledH4 = styled.h4`
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: 1.6rem;
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

H4.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default H4;
