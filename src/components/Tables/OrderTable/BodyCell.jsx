import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const BodyCell = ({ className, children, ...otherProps }) => {
  return (
    <Td className={className} {...otherProps}>
      {children}
    </Td>
  );
};

const Td = styled.td`
  padding-top: 1.9rem;
  padding-bottom: 1.9rem;
  border-bottom: 1px solid #f0f1f3;
  font-size: 1.4rem;
  line-height: 130%;
  color: '#505050';
  vertical-align: middle;

  :first-of-type {
    padding-left: 2.5rem;
  }

  :last-of-type {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    width: 5rem;
  }
`;

BodyCell.defaultProps = {
  otherProps: {},
};

BodyCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default BodyCell;
