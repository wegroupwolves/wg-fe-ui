import React from 'react';
import styled, { withTheme } from 'styled-components';

import LanguageSelector from './LanguageSelector';

import { array, node, string, func, object } from 'prop-types';
import { key } from 'styled-theme';

const HeaderNav = ({ navTabs, theme, className, currentLocation, onClick, ...otherProps }) => {
  return (
    <Container className={className} {...otherProps}>
      <Wrapper>
        <LogoContainer>
          <Logo src={theme.data.logo} alt="WeGroup" />
        </LogoContainer>
        <Navigation>
          {navTabs.map(tab => {
            const { to } = tab;
            return (
              <NavItem
                onClick={() => onClick(to)}
                key={tab.title}
                active={to === currentLocation}
                data-test-id={tab.title}
              >
                {tab.title}
              </NavItem>
            );
          })}
        </Navigation>
        <LanguageSelector />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  height: 8rem;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fbfbfb;
  border-bottom: 0.2px solid #e2e2e2;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  z-index: 11;
  padding: 0 7rem 0 3.4rem;
`;

const NavItem = styled.li`
  cursor: pointer;
  margin: 0 3rem;
  font-size: 1.6rem;
  padding: 2.5rem 2rem 2rem;
  font-family: ${key('fonts.primary')};
  border-bottom: ${props => (props.active === true ? `3px solid` : 'none')};
  border-color: ${props =>
    props.active === true ? key('colors.action') : 'none'};
  font-weight: ${props => (props.active === true ? `bold` : 'none')};
  color: ${key([`colors`, `dark-grey-font`])};
`;

const Navigation = styled.ul`
  display: flex;
  padding-top: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoContainer = styled.div`
  height: 60%;
`;

const Logo = styled.img`
  height: 100%;
`;

HeaderNav.defaultProps = {
  navTabs: [],
  onClick: () => {},
  otherProps: {}
};

HeaderNav.propTypes = {
  navTabs: array,
  theme: node,
  className: string,
  onClick: func,
  /** testje */
  currentLocation: string,
  otherProps: object
};

const exportComponent = withTheme(HeaderNav);
exportComponent.displayName = 'HeaderNav';
export default exportComponent;
