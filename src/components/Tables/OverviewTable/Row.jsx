import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const Row = ({ className, children, ...otherProps }) => {
  return (
    <Tr className={className} {...otherProps}>
      {children}
    </Tr>
  );
};

const Tr = styled.tr`
  background-color: white;
  font-size: 1.6rem;

  :hover {
    background-color: #ffefdc;
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
