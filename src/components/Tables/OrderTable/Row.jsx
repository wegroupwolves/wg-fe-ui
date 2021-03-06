import React from 'react';
import { string, object, node, func } from 'prop-types';
import styled from 'styled-components';

const Row = ({ className, children, onClick, ...otherProps }) => {
  return (
    <Tr className={className} onClick={onClick} {...otherProps}>
      {children}
    </Tr>
  );
};

const Tr = styled.tr`
  background-color: white;
  font-size: 1.6rem;
  vertical-align: middle;

  :hover {
    background-color: ${({ theme }) => theme.brand.lightest};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : '')};
  }
`;

Row.defaultProps = {
  otherProps: {},
};

Row.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  onClick: func,
  children: node,
};

export default Row;
