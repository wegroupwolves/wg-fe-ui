import React from 'react';
import styled from 'styled-components';
import { string, object, node } from 'prop-types';
import Item from './Item';

const MainNavigation = ({ className, children, ...otherProps }) => {
  return (
    <NavigationBar {...otherProps} className={className}>
      {children}
    </NavigationBar>
  );
};

const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.ui.backgroundLight};
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-left: 2.5rem;
  color: ${({ theme }) => theme.ui.disabled};
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  &:not(:first-child) {
    margin-top: 2.5rem;
  }
`;

const NavigationBar = styled.nav`
  font-family: ${({ theme }) => theme.fonts};
  height: 100vh;
  width: 25rem;
  z-index: 100;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.ui.outline};
`;

MainNavigation.Title = Title;
MainNavigation.Title.displayName = 'MainNavigation.Title';
MainNavigation.Line = Line;
MainNavigation.Line.displayName = 'MainNavigation.Line';
MainNavigation.Item = Item;
MainNavigation.Item.displayName = 'MainNavigation.Item';

MainNavigation.defaultProps = {
  otherProps: {},
};

MainNavigation.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default MainNavigation;
