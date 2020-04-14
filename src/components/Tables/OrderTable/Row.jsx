import React from 'react';
import { string, object, node, func } from 'prop-types';
import styled from 'styled-components';

const Row = ({ className, children, onClick, key, ...otherProps }) => {
  return (
    <Tr className={className} onClick={onClick} {...otherProps} key={key}>
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
  key: string,
};

export default Row;
