import React from 'react';
import styled from 'styled-components';
import { node, string, object } from 'prop-types';

const CardContent = ({ children, className, ...otherProps }) => {
  return (
    <StyledCardContent className={className} {...otherProps}>
      {children}
    </StyledCardContent>
  );
};

const StyledCardContent = styled.div`
  padding: 1.6rem;
`;

CardContent.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default CardContent;
