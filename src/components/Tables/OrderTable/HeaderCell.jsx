import React from 'react';
import { string, object, node, bool, func } from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icons/IconActionDropDown';

const HeaderCell = ({
  width,
  className,
  children,
  isTitle,
  onClick,
  active,
  order,
  ...otherProps
}) => {
  return (
    <Th
      width={width}
      isTitle={isTitle}
      className={className}
      onClick={onClick}
      active={active}
      order={order}
      {...otherProps}
    >
      <ThWrapper>
        {children}
        <IconWrapper active={active} order={order}>
          <Icon color="#505050" />
        </IconWrapper>
      </ThWrapper>
    </Th>
  );
};

const Th = styled.th`
  padding-bottom: 1.3rem;
  width: ${props => props.width};
  font-weight: ${({ isTitle, active }) => (isTitle || active ? '700' : '400')};
  font-size: ${props => (props.isTitle ? `1.6rem` : `1.3rem`)};
  color: ${({ isTitle, active }) =>
    isTitle || active ? '#5B5550' : '#A29C95'};
  vertical-align: middle;
`;

const ThWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  transform: rotate(
    ${({ active, order }) => (active && order === 'ascending' ? '180deg' : '')}
  );
  height: 1.6rem;
  width: 1.6rem;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

  /* svg {
    transform: scale();
  } */
`;

HeaderCell.defaultProps = {
  otherProps: {},
  isTitle: false,
  width: 'unset',
  onClick: () => {},
};

HeaderCell.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
  /** The width of the tableCell element */
  width: string,
  /** Applies isTitle styling to the cell */
  isTitle: bool,
  onClick: func,
  order: string,
  active: bool,
};

export default HeaderCell;
