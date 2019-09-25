import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HouseIcon from './assets/HouseIcon.jsx';
import { HeaderNav, MainNavigation } from '../src/index.js';

storiesOf('Mid level blocks/Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('MainNavigation', () => {
    return (
      <Container>
        <StyledMainNav>
          <MainNavigation.Title>Title</MainNavigation.Title>
          <MainNavigation.Item icon={<HouseIcon isActive={false} />}>
            Example
          </MainNavigation.Item>
          <MainNavigation.Item
            isActive={true}
            icon={<HouseIcon isActive={true} />}
          >
            Active
          </MainNavigation.Item>
          <MainNavigation.Title>Other</MainNavigation.Title>
          <MainNavigation.Item icon={<HouseIcon isActive={false} />}>
            House
          </MainNavigation.Item>
          <MainNavigation.Line />
        </StyledMainNav>
      </Container>
    );
  })
  .add('HeaderNavigation', () => {
    // Mock history from react router
    const getHistory = () => {
      const push = string => {
        return console.log(string);
      };
      const history = () => {
        return console.log('history');
      };

      history.push = push;

      return history;
    };

    // Mock navTabs
    const navTabs = [
      { title: 'tab1', to: '/tab1' },
      { title: 'tab2', to: '/tab2' },
    ];
    return (
      <Container>
        <HeaderNav
          currentLocation="/tab1"
          navTabs={navTabs}
          history={getHistory()}
        />
      </Container>
    );
  });

const Container = styled.div`
  width: 100%;
  height: 35rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  > div {
    position: absolute;
  }
`;

const StyledMainNav = styled(MainNavigation)`
  height: 35rem;
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
`;

Container.displayName = '.';
HeaderNav.displayname = 'HeaderNav';

StyledMainNav.displayName = 'MainNavigation';
