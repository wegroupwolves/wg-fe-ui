import React from 'react';
import { string, object, node, bool } from 'prop-types';
import styled from 'styled-components';

const HeaderCell = ({ width, className, children, title, ...otherProps }) => {
  return (
    <Th width={width} title={title} className={className} {...otherProps}>
      {children}
    </Th>
  );
};

const Th = styled.th`
  padding-bottom: 1.3rem;
  width: ${props => props.width};
  font-weight: ${props => (props.title ? `700` : `400`)};
  font-size: ${props => (props.title ? `1.6rem` : `1.4rem`)};
  color: ${props => (props.title ? `#5b5550` : `#a29c95`)};
`;

HeaderCell.defaultProps = {
  otherProps: {},
  title: false,
  width: 'unset',
};


HeaderCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
  /** The width of the tableCell element */
  width: string,
  /** Applies title styling to the cell */
  title: bool,
};

export default HeaderCell;
