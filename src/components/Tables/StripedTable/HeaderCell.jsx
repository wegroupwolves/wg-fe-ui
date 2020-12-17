import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const HeaderCell = ({ width, className, children, ...rest }) => {
  return (
    <Th width={width} className={className} {...rest}>
      {children}
    </Th>
  );
};

const Th = styled.th`
  padding-bottom: 1.2rem;
  vertical-align: middle;
  font-family: ${({ theme }) => theme.font};
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.typo.text};
`;

HeaderCell.defaultProps = {
  rest: {},
  width: 'unset',
};

HeaderCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  children: node,
  /** The width of the tableCell element */
  width: string,
};

export default HeaderCell;
