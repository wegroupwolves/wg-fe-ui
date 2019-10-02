import React from 'react';
import styled from 'styled-components';
import { arrayOf, node, string, func, object } from 'prop-types';
import { key } from 'styled-theme/dist';

const Value = ({ className, children, highlight, toggled, ...otherProps }) => {
  return (
    <StyledValue {...otherProps} className={className}>
      {children}
      {highlight ? <span onClick={() => toggled()}>{highlight}</span> : null}
    </StyledValue>
  );
};

const StyledValue = styled.td`
  color: ${key('colors.highlight')};
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 900;
  justify-content: space-between;

  & span {
    background-color: ${key('colors.toggle')};
    color: white;
    text-transform: uppercase;
    height: 3rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    font-size: ${key('fonts.small-size')};
  }
`;

Value.defaultProps = {
  otherProps: []
}

Value.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: arrayOf(object).isRequired,
  /** triggers when highlight is clicked */
  toggled: func,
  /** clickable highlight */
  highlight: string,
  /** Value text */
  children: node.isRequired,
};

export default Value;
