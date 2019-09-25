import React from 'react';
import styled, { withTheme } from 'styled-components';

import LanguageSelector from './LanguageSelector';

import { array, node, shape, string } from 'prop-types';
import { key } from 'styled-theme';

const HeaderNav = ({ navTabs, theme, history, className, currentLocation }) => {
  return (
    <Container className={className}>
      <LogoContainer>
        <Logo src={theme.data.logo} alt="WeGroup" />
      </LogoContainer>
      <Navigation>
        {history
          ? navTabs.map(tab => (
              <NavItem
                onClick={() => history.push(tab.to)}
                key={tab.title}
                active={tab.to === currentLocation}
                data-test-id={tab.title}
              >
                {tab.title}
              </NavItem>
            ))
          : null}
      </Navigation>
      <LanguageSelector />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const LogoContainer = styled.div`
  height: 100%;
  padding-bottom: 1.8rem;
  padding-top: 2rem;
`;

const Logo = styled.img`
  height: 100%;
`;

HeaderNav.defaultProps = {
  navTabs: [],
};

HeaderNav.propTypes = {
  navTabs: array,
  theme: node,
  history: shape(),
  className: string,
  //** testje */
  currentLocation: string,
};

export default withTheme(HeaderNav);
