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
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  vertical-align: middle;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  line-height: 130%;
  color: #8990a3;

  :first-of-type {
    padding-left: 1.2rem;
    border-radius: 8px 0 0 8px;
  }

  :last-of-type {
    padding-right: 1.2rem;
    border-radius: 0 8px 8px 0;
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
