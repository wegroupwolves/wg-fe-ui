import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const Badge = ({ children, className, ...otherProps }) => {
  return (
    <StyledBadge className={className} {...otherProps}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
`;

Badge.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default Badge;
