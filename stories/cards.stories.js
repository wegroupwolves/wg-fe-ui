import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { Card } from '../src/';

addParameters({
  options: {
    panelPosition: 'right',
  },
});

storiesOf('Low level blocks/Cards', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))

  .add('Card', () => {
    return (
      <CardContainer>
        <Card
          onClick={e => {
            console.log(e);
          }}
        >
          <Card.CardHeader>Header test</Card.CardHeader>
          <Card.CardContent>Content test</Card.CardContent>
          <Card.CardFooter>Footer test</Card.CardFooter>
        </Card>
      </CardContainer>
    );
  });

const CardContainer = styled.div`
  width: 450px;
`;
