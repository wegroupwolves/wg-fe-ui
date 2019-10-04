import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { string, object, node } from 'prop-types';
import Head from './Head';
import HeaderCell from './HeaderCell';
import Body from './Body';
import Row from './Row';
import BodyCell from './BodyCell';

const OverviewTable = forwardRef(
  ({ className, children, ...otherProps }, ref) => (
    <Table className={className} ref={ref} {...otherProps}>
      {children}
    </Table>
  ),
);

const Table = styled.table`
  font-family: ${key('fonts.primary')};
  width: 100%;
  text-align: left;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;

OverviewTable.defaultProps = {
  otherProps: {}
};

OverviewTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

OverviewTable.displayName = 'OverviewTable';
OverviewTable.Head = Head;
OverviewTable.Head.displayName = 'OverviewTable.Head';
OverviewTable.HeaderCell = HeaderCell;
OverviewTable.HeaderCell.displayName = 'OverviewTable.HeaderCell';
OverviewTable.Body = Body;
OverviewTable.Body.displayName = 'OverviewTable.Body';
OverviewTable.Row = Row;
OverviewTable.Row.displayName = 'OverviewTable.Row';
OverviewTable.BodyCell = BodyCell;
OverviewTable.BodyCell.displayName = 'OverviewTable.BodyCell';

export default OverviewTable;
