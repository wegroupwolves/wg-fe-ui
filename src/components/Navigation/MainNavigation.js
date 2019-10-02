import React from 'react';
import styled from 'styled-components';
import { string, object, node } from 'prop-types';
import { key } from 'styled-theme';
import Item from './Item';

const MainNavigation = ({ className, otherProps, children }) => {
  return (
    <NavigationBar {...otherProps} className={className}>
      {children}
    </NavigationBar>
  );
};

const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${key('colors.bg-disabled')};
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-left: 3.5rem;
  color: ${key('colors.disabled')};
  margin-bottom: 1.5rem;

  &:not(:first-child) {
    margin-top: 2.5rem;
  }
`;

const NavigationBar = styled.nav`
  font-family: ${key('fonts.primary')};
  height: 100vh;
  width: 25rem;
  z-index: 100;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid ${key('colors.bg-disabled')};
`;

MainNavigation.Title = Title;
MainNavigation.Title.displayName = 'MainNavigation.Title';
MainNavigation.Line = Line;
MainNavigation.Line.displayName = 'MainNavigation.Line';
MainNavigation.Item = Item;
MainNavigation.Item.displayName = 'MainNavigation.Item';

MainNavigation.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default MainNavigation;
