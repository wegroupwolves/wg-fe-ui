import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const CardFooter = ({ children, className, otherProps }) => {
  return (
    <StyledCardFooter className={className} {...otherProps}>
      {children}
    </StyledCardFooter>
  );
};

const StyledCardFooter = styled.div`
  padding: 1.6rem;
  border-top: 2px solid #f0f1f3;
  border-radius: 0 0 0.5rem 0.5rem;
`;

CardFooter.propTypes = {
  children: node.isRequired,
  className: string,
  otherProps: object,
};

export default CardFooter;
