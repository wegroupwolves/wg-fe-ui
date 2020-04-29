import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';

import HouseIcon from './assets/HouseIcon.jsx';
import IconActionPower from './assets/Icons/IconActionPower.jsx';

import {
  HeaderNav,
  MainNavigation,
  SubNavigation,
  QuickActionSubMenu,
  CollapsibleSidebar,
  Pagination,
  BreadCrumbs,
  MobileMenu,
  Tabs,
} from '../src/index.js';

import CheckBox from '../src/components/Checkboxes/CheckBox';

const SubMenuItemTypes = {
  Default: null,
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
};

const mockUrls = [
  { label: 'Home', url: '/' },
  { label: 'Next page', url: '/next-page' },
];

const moreMockUrls = [
  { label: 'Home', url: '/' },
  { label: 'Next page', url: '/next-page' },
  { label: 'Another page', url: '/another-page' },
];

const collapseMockUrls = [
  { label: 'Home', url: '/' },
  { label: 'Next page', url: '/next-page' },
  { label: 'Another page', url: '/another-page' },
  { label: 'The last page', url: '/last-page' },
];

const selectMockUrls = {
  'Two urls': mockUrls,
  'Three urls': moreMockUrls,
  'Collapsed urls (more than 3)': collapseMockUrls,
};

storiesOf('Mid level blocks/Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
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
          <MainNavigation.Line />
          <MainNavigation.Terms href="">Terms</MainNavigation.Terms>
          <MainNavigation.Copy>
            &copy; {new Date().getFullYear()} WeGroup NV. All rights reserved
          </MainNavigation.Copy>
          <MainNavigation.SignOutContainer>
            <MainNavigation.Line />
            <MainNavigation.Item icon={<IconActionPower color="#C4C4C4" />}>
              Sign Out
            </MainNavigation.Item>
          </MainNavigation.SignOutContainer>
        </StyledMainNav>
      </Container>
    );
  })
  .add('HeaderNavigation', () => {
    // Mock navTabs
    const navTabs = [
      { title: 'tab1', to: '/tab1' },
      { title: 'tab2', to: '/tab2' },
    ];
    const [tab, setTab] = useState('/tab1');

    return (
      <Container>
        <HeaderNav
          currentLocation={tab}
          navTabs={navTabs}
          onClick={val => setTab(val)}
          logo={'https://files.wegroup.be/logos/wegroup/wegroup-logo.svg'}
        />
      </Container>
    );
  })
  .add('SubNavigation', () => {
    // mocked sections
    const sections = [
      {
        id: 1,
        label: '2019',
        subsections: [
          {
            id: 1,
            label: 'September',
          },
          {
            id: 2,
            label: 'August',
          },
        ],
      },
      {
        id: 2,
        label: '2018',
        subsections: [
          {
            id: 1,
            label: 'November',
          },
        ],
      },
    ];
    const [currentSection, setCurrentSection] = useState({
      section: 1,
      subsection: 1,
    });
    return (
      <Container autoWidth={true}>
        <SubNavigation>
          {sections.map(section => (
            <React.Fragment key={section.id}>
              <SubNavigation.Section
                onClick={() =>
                  setCurrentSection({ section: section.id, subsection: 1 })
                }
              >
                {section.label}
              </SubNavigation.Section>
              <SubNavigation.Item>
                <SubNavigation.SectionContainer
                  active={section.id === currentSection.section}
                >
                  {section.subsections.map(subsection => (
                    <SubNavigation.SubSection
                      key={subsection.id}
                      onClick={() =>
                        setCurrentSection({
                          section: section.id,
                          subsection: subsection.id,
                        })
                      }
                      active={
                        currentSection.section === section.id &&
                        currentSection.subsection === subsection.id
                      }
                    >
                      {subsection.label}
                    </SubNavigation.SubSection>
                  ))}
                </SubNavigation.SectionContainer>
              </SubNavigation.Item>
            </React.Fragment>
          ))}
        </SubNavigation>
      </Container>
    );
  })
  .add('QuickActionSubMenu', () => {
    return (
      <QuickActionSubMenu>
        <QuickActionSubMenu.SubMenuItem label="View customer" />
        <QuickActionSubMenu.SubMenuItem label="Edit customer" />
        <QuickActionSubMenu.SubMenuItem
          type={select('Type menu item', SubMenuItemTypes)}
          label="Delete customer"
        />
      </QuickActionSubMenu>
    );
  })
  .add('CollapsibleSidebar', () => {
    return (
      <CollapsibleSidebarContainer>
        <CollapsibleSidebar label={text('Title', 'Filters')} open>
          <CheckBox
            checked={false}
            disabled={false}
            name="Checkbox1"
            onChange={function noRefCheck() {}}
            otherProps={{}}
          >
            Item
          </CheckBox>

          <CheckBox
            checked={false}
            disabled={false}
            name="Checkbox2"
            onChange={function noRefCheck() {}}
            otherProps={{}}
          >
            Item
          </CheckBox>

          <CheckBox
            checked={false}
            disabled={false}
            name="Checkbox3"
            onChange={function noRefCheck() {}}
            otherProps={{}}
          >
            Item
          </CheckBox>
        </CollapsibleSidebar>
      </CollapsibleSidebarContainer>
    );
  })
  .add('Pagination', () => {
    return (
      <Pagination
        currentPage={number('Current page', 8)}
        totalPages={number('Total possible pages', 20, {
          range: true,
          min: 20,
          max: 100,
        })}
        pageLength={20}
        base={`/api-url/url/`}
        otherFilters={'&id=test'}
      ></Pagination>
    );
  })
  .add('BreadCrumbs', () => {
    return (
      <BreadCrumbs
        urls={select('Dataset', selectMockUrls, mockUrls)}
      ></BreadCrumbs>
    );
  })
  .add('MobileMenu', () => {
    return (
      <MobileSimulator
        size={select(
          'Mobile device size',
          { Mobile: 'mobile', Tablet: 'tablet' },
          'mobile',
        )}
      >
        <MobileMenu>
          <MobileMenu.Header>Menu header</MobileMenu.Header>

          <MobileMenu.Content>Menu content</MobileMenu.Content>

          <MobileMenu.Footer>Menu footer</MobileMenu.Footer>
        </MobileMenu>
      </MobileSimulator>
    );
  })
  .add('Tabs', () => {
    return (
      <TabsContainer>
        <Tabs onSelect={selected => console.log(selected)}>
          <Tabs.Item name="home">Home</Tabs.Item>
          <Tabs.Item name="car">Car</Tabs.Item>
          <Tabs.Item name="family">Family</Tabs.Item>
          <Tabs.Item name="legal">Legal</Tabs.Item>
          <Tabs.Item name="selectedOffers" rightAlign>
            Selected offers
          </Tabs.Item>
        </Tabs>
      </TabsContainer>
    );
  });

const TabsContainer = styled.div`
  width: 90%;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  width: ${({ autoWidth }) => (autoWidth ? 'auto' : '100%')};
  height: 35rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  > div {
    position: absolute;
  }
`;

const CollapsibleSidebarContainer = styled.div`
  max-width: 300px;
  width: 100%;
`;

const StyledMainNav = styled(MainNavigation)`
  height: 40rem;
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
`;

const MobileSimulator = styled.div`
  position: relative;
  width: ${({ size }) => (size == 'mobile' ? '375px' : '768px')};
  height: ${({ size }) => (size == 'mobile' ? '667px' : '1024px')};
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
`;

Container.displayName = '.';
TabsContainer.displayName = '.';
HeaderNav.displayname = 'HeaderNav';

StyledMainNav.displayName = 'MainNavigation';
