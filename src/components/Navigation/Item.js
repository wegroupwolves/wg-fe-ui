import React from 'react';
import { string, object, node, func, element, bool } from 'prop-types';
import { key } from 'styled-theme/dist';
import styled from 'styled-components';

const Item = ({ className, otherProps, icon, onClick, children, isActive }) => {
  return (
    <Container
      {...otherProps}
      className={className}
      isActive={isActive}
      onClick={onClick}
    >
      <SvgIcon>
        <icon isActive={isActive} />
      </SvgIcon>
      <span>{children}</span>
    </Container>
  );
};

const SvgIcon = styled.div`
  width: 9rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525252;
  font-size: 1.4rem;
  height: 4.5rem;
  font-weight: 400;
  width: 100%;
  margin: 0.35rem 0;
  border-left: 0.4rem #fbfbfb solid;
  padding-right: 2rem;
  text-align: center;

  & span {
    text-align: left;
    width: 100%;
  }

  &:hover {
    background-color: #f7f7f7;
    border-left: 0.4rem #f7f7f7 solid;
  }

  &.active {
    font-weight: 700;
    background-color: #f7f7f7;
    border-left: 0.4rem ${key('colors.primary-regular')} solid;
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
