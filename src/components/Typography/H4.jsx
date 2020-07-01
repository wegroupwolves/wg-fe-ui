import React from 'react';
import { node, string, object, bool } from 'prop-types';
import styled from 'styled-components';

const H4 = ({ children, larger, className, ...otherProps }) => {
  return (
    <StyledH4 larger={larger} className={className} {...otherProps}>
      {children}
    </StyledH4>
  );
};

const StyledH4 = styled.h4`
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;
  font-size: ${({ larger }) => (larger ? '1.8rem' : '1.6rem')};
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
  larger: bool,
};

export default H4;
