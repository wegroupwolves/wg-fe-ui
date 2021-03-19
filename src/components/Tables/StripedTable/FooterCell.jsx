import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const FooterCell = ({ width, className, children, ...rest }) => {
  return (
    <Td width={width} className={className} {...rest}>
      {children}
    </Td>
  );
};

const Td = styled.th`
  padding-top: 1rem;
  vertical-align: middle;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.typo.text};
`;

FooterCell.defaultProps = {
  rest: {},
  width: 'unset',
};

FooterCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  children: node,
  /** The width of the tableCell element */
  width: string,
};

export default FooterCell;
