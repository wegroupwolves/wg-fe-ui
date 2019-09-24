import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { DisplayTable } from '../src';

storiesOf('Mid level blocks/Tables', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('DisplayTable', () => (
    <StyledDisplayTable>
      <DisplayTable.Row>
        <DisplayTable.Key>Merk</DisplayTable.Key>
        <DisplayTable.Value>BMW</DisplayTable.Value>
      </DisplayTable.Row>
      <DisplayTable.Row>
        <DisplayTable.Key>Brandstof</DisplayTable.Key>
        <DisplayTable.Value>Diesel</DisplayTable.Value>
      </DisplayTable.Row>
      <DisplayTable.Row>
        <DisplayTable.Key>Catalogus waarde</DisplayTable.Key>
        <DisplayTable.Value highlight={text('highlight', 'Excl btw')}>
          28 797,54 €
        </DisplayTable.Value>
      </DisplayTable.Row>
    </StyledDisplayTable>
  ));

const StyledDisplayTable = styled(DisplayTable)`
  width: 46rem;
`;

StyledDisplayTable.displayName = 'DisplayTable';
