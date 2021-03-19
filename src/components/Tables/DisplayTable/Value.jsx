import React from 'react';
import styled from 'styled-components';
import { node, string, func, object } from 'prop-types';

const Value = ({ className, children, highlight, toggled, ...otherProps }) => {
  return (
    <StyledValue {...otherProps} className={className}>
      {children}
      {highlight ? <span onClick={() => toggled()}>{highlight}</span> : null}
    </StyledValue>
  );
};

const StyledValue = styled.td`
  color: ${({ theme }) => theme.typo.highlight};
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  justify-content: space-between;

  & span {
    background-color: ${({ theme }) => theme.brand.secondary};
    color: white;
    text-transform: uppercase;
    height: 3rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    font-size: 1.2rem;
  }
`;

Value.defaultProps = {
  otherProps: {},
};

Value.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  /** triggers when highlight is clicked */
  toggled: func,
  /** clickable highlight */
  highlight: string,
  /** Value text */
  children: node.isRequired,
};

export default Value;
