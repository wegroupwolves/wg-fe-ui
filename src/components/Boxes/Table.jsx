import React from 'react';
import styled from 'styled-components';
import { node, string, func, bool, object } from 'prop-types';
import Value from './Value.jsx';
import Row from './Row.jsx';
import Key from './Key.jsx';
import { key } from 'styled-theme/dist';

const Table = ({ className, otherProps, children }) => {
  return (
    <StyledTable {...otherProps} className={className}>
      <StyledBody>{children}</StyledBody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
`;

const StyledBody = styled.tbody`
  background-color: white;
`;

Table.defaultProps = {
  className: null,
};

Table.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
};

Table.Value = Value;
Table.Value.displayName = 'Table.Value';
Table.Row = Row;
Table.Row.displayName = 'Table.Row';
Table.Key = Key;
Table.Key.displayName = 'Table.Key';

export default Table;
