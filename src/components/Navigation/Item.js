import React from 'react';
import { string, object, node, func, element, bool } from 'prop-types';
import { key } from 'styled-theme';
import styled from 'styled-components';

const Item = ({ className, otherProps, icon, onClick, children, isActive }) => {
  return (
    <Container
      {...otherProps}
      className={className}
      isActive={isActive}
      onClick={onClick}
    >
      <SvgIcon>{icon}</SvgIcon>
      <span>{children}</span>
    </Container>
  );
};

const SvgIcon = styled.div`
  max-height: 4.5rem;
  width: 6rem;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525252;
  font-size: 1.4rem;
  height: 5.5rem;
  padding-left: 3.5rem;
  font-weight: ${props => (props.isActive ? '700' : '400')};
  width: 100%;
  padding-right: 1rem;
  text-align: center;
  background-color: ${props => (props.isActive ? '#f7f7f7' : 'none')};
  border-right: ${props => (props.isActive ? '0.1rem solid' : 'none')};
  border-color: ${props => (props.isActive ? key('colors.action') : 'none')};
  cursor: pointer;

  & span {
    text-align: left;
    width: 100%;
  }

  &:hover {
    background-color: #f7f7f7;
  }

  &.active {
    font-weight: 700;
    background-color: #f7f7f7;
  }
`;

Item.defaultProps = {
  className: null,
  isActive: false,
  onClick: () => {},
};

Item.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,

  isActive: bool,
  icon: element,
  onClick: func,
  children: node.isRequired,
};

export default Item;
