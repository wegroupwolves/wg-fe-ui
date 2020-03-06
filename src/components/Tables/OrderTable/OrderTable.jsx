import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { string, object, node } from 'prop-types';
import Head from './Head';
import HeaderCell from './HeaderCell';
import Body from './Body';
import Row from './Row';
import BodyCell from './BodyCell';

const OrderTable = forwardRef(({ className, children, ...otherProps }, ref) => (
  <Table className={className} ref={ref} {...otherProps}>
    {children}
  </Table>
));

const Table = styled.table`
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  text-align: left;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;

OrderTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

OrderTable.displayName = 'OrderTable';
OrderTable.Head = Head;
OrderTable.Head.displayName = 'OrderTable.Head';
OrderTable.HeaderCell = HeaderCell;
OrderTable.HeaderCell.displayName = 'OrderTable.HeaderCell';
OrderTable.Body = Body;
OrderTable.Body.displayName = 'OrderTable.Body';
OrderTable.Row = Row;
OrderTable.Row.displayName = 'OrderTable.Row';
OrderTable.BodyCell = BodyCell;
OrderTable.BodyCell.displayName = 'OrderTable.BodyCell';

export default OrderTable;
