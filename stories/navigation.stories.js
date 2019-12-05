import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HouseIcon from './assets/HouseIcon.jsx';
import { HeaderNav, MainNavigation, SubNavigation } from '../src/index.js';

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
  });

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
