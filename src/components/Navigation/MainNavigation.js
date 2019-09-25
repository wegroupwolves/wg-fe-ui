import React from 'react';
import styled from 'styled-components';
import { string, object, node } from 'prop-types';
import Item from './Item';

const MainNavigation = ({ className, otherProps, children }) => {
  return (
    <NavigationBar {...otherProps} className={className}>
      {children}
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  height: 100vh;
  width: 25rem;
  background-color: white;
  padding-top: 8.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid #ccc;
`;

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
