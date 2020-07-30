import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import * as Icons from '../src/components/Icons';
import { StatusIcon } from '../src/components/Icons';

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
