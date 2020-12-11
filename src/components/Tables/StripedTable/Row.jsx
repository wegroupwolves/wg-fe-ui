import React from 'react';
import { string, object, node, func } from 'prop-types';
import styled from 'styled-components';

const Row = ({ className, children, onClick, ...rest }) => {
  return (
    <Tr className={className} onClick={onClick} {...rest}>
      {children}
    </Tr>
  );
};

const Tr = styled.tr`
  font-size: 1.6rem;
  vertical-align: middle;
  border-radius: 8px;

  td {
    background-color: white;
  }

  &:nth-child(odd) {
    td {
      background-color: #f9f9fa;
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.brand.lightest};
  }
`;

Row.defaultProps = {
  rest: {},
};

Row.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  onClick: func,
  children: node,
};

export default Row;
