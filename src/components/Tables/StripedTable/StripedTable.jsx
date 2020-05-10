import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { string, object, node } from 'prop-types';

import {
  Head,
  HeaderCell,
  Body,
  BodyCell,
  Row,
  Footer,
  FooterCell,
} from './index';

const StripedTable = forwardRef(
  ({ className, children, ...otherProps }, ref) => (
    <Table className={className} ref={ref} {...otherProps}>
      {children}
    </Table>
  ),
);

const Table = styled.table`
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  text-align: left;
  vertical-align: middle;
`;

StripedTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

StripedTable.displayName = 'StripedTable';

StripedTable.Head = Head;
StripedTable.Head.displayName = 'StripedTable.Head';
StripedTable.HeaderCell = HeaderCell;
StripedTable.HeaderCell.displayName = 'StripedTable.HeaderCell';

StripedTable.Body = Body;
StripedTable.Body.displayName = 'StripedTable.Body';
StripedTable.Row = Row;
StripedTable.Row.displayName = 'StripedTable.Row';
StripedTable.BodyCell = BodyCell;
StripedTable.BodyCell.displayName = 'StripedTable.BodyCell';

StripedTable.Footer = Footer;
StripedTable.Footer.displayName = 'StripedTable.Footer';
StripedTable.FooterCell = FooterCell;
StripedTable.FooterCell.displayName = 'StripedTable.FooterCell';

export default StripedTable;
