import React from 'react';
import styled from 'styled-components';
import { node, string, object } from 'prop-types';
import { key } from 'styled-theme/dist';

const Row = ({ className, children, ...otherProps }) => {
  return (
    <StyledRow {...otherProps} className={className}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.tr`
  min-height: 5rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  border-top: 0.1rem solid ${key('colors.outline')};

  &:first-child {
    border: none;
  }

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

Row.defaultProps = {
  otherProps: {}
}

Row.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default Row;
