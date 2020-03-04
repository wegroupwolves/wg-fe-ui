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
  background-color: #f0f1f3;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-left: 2.5rem;
  color: ${({ theme }) => theme.ui.disabled};
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const NavigationBar = styled.nav`
  font-family: ${({ theme }) => theme.font};
  height: 100vh;
  width: 25rem;
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid #f0f1f3;
`;

const Terms = styled.a`
  font-size: 1.4rem;
  margin: 2rem 0 1rem 2.5rem;
  text-decoration: none;
  font-weight: 700;
  color: #525252;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.brand.dark};
  }
`;

const Copy = styled.p`
  font-size: 1.4rem;
  margin-left: 2.5rem;
  color: ${({ theme }) => theme.ui.disabled};
  line-height: 125%;
`;

const SignOutContainer = styled.div`
  margin-top: auto;
`;

MainNavigation.Title = Title;
MainNavigation.Title.displayName = 'MainNavigation.Title';
MainNavigation.Line = Line;
MainNavigation.Line.displayName = 'MainNavigation.Line';
MainNavigation.Item = Item;
MainNavigation.Item.displayName = 'MainNavigation.Item';
MainNavigation.Terms = Terms;
MainNavigation.Terms.displayName = 'MainNavigation.Terms';
MainNavigation.Copy = Copy;
MainNavigation.Copy.displayName = 'MainNavigation.Copy';
MainNavigation.SignOutContainer = SignOutContainer;
MainNavigation.Copy.SignOutContainer = 'MainNavigation.SignOutContainer';

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
