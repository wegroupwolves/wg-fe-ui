import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import * as Icons from '../src/components/Icons';
import { StatusIcon } from '../src/components/Icons';
import * as LargeIcons from '../src/components/LargeIcons';
import * as Illustrations from '../src/components/Illustrations';

const primaryTheme = {
  50: '#FFF2E5',
  100: '#FFF6EE',
  200: '#FFCC99',
  500: '#FF8000',
  600: '#CC6600',
  700: '#994D00',
};

const grayScale = {
  50: '#F1F1F3',
  100: '#E2E3E6',
  200: '#C5C7CD',
  300: '#A8ABB4',
  400: '#8B8F9B',
  500: '#6E7382',
  600: '#585C68',
  700: '#42454E',
  800: '#2C2E34',
  900: '#050505',
};

storiesOf('Foundation/Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true, source: false, propTables: false }))
  .add('Filled', () => {
    let color = select('color', { black: 'black', orange: '#FF8000' }, 'black');
    return (
      <Container>
        {/* Display all Icons from Icon folder */}
        {Object.keys(Icons).map((IconKey, key) => {
          const Element = Icons[IconKey];
          return (
            <Item key={key}>
              <Element color={color} size={30} />
              <p>{IconKey}</p>
            </Item>
          );
        })}
      </Container>
    );
  })

  .add('StatusIcon', () => {
    return (
      <StatusIcon
        type={select('Type?', {
          Default: 'default',
          Success: 'success',
          Warning: 'warning',
          Error: 'error',
        })}
      ></StatusIcon>
    );
  })

  .add('Illustrations', () => {
    return (
      <Container>
        {/* Display all Icons from Icon folder */}
        {Object.keys(Illustrations).map((IconKey, key) => {
          const Element = Illustrations[IconKey];
          return (
            <Item key={'Ilustration_' + key}>
              <Element theme={{ primary: primaryTheme }} />
              <LargeText>{IconKey}</LargeText>
            </Item>
          );
        })}
      </Container>
    );
  })

  .add('Large icons', () => {
    return (
      <Container>
        {/* Display all Icons from Icon folder */}
        {Object.keys(LargeIcons).map((IconKey, key) => {
          const Element = LargeIcons[IconKey];
          return (
            <>
              <Item key={'LargeIcon_' + key}>
                <Element
                  activeTheme={primaryTheme}
                  inactiveTheme={grayScale}
                  active
                />
                <LargeText>{IconKey}</LargeText>
              </Item>

              <Item key={'LargeIcon_' + key}>
                <Element activeTheme={primaryTheme} inactiveTheme={grayScale} />
                <LargeText>{IconKey} (Inactive)</LargeText>
              </Item>
            </>
          );
        })}
      </Container>
    );
  });

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  min-width: 30rem;

  & > p {
    font-family: lato, sans-serif;
    font-size: 1.4rem;
    margin-left: 1rem;
  }
`;

const LargeText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
