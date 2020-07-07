import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const CardHeader = ({ children, className, ...otherProps }) => {
  return (
    <StyledCardHeader className={className} {...otherProps}>
      {children}
    </StyledCardHeader>
  );
};

const StyledCardHeader = styled.div`
  padding: 1.6rem;
  border-bottom: 2px solid #f0f1f3;
  border-radius: 0.5rem 0.5rem 0 0;
`;

CardHeader.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default CardHeader;
