import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { QuestionBox } from '../src';

storiesOf('Mid level blocks/Boxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('QuestionBox', () => (
    <StyledQuestionBox
      option1="Ja"
      option2="Nee"
      response={answer => console.log(answer)}
      disabled={boolean('disabled', false)}
    >
      Is this a Question?
    </StyledQuestionBox>
  ));
// .add('Table', () => (
//   <StyledTable>
//     <Table.Row>
//       <Table.Key>Merk</Table.Key>
//       <Table.Value>BMW</Table.Value>
//     </Table.Row>
//     <Table.Row>
//       <Table.Key>Brandstof</Table.Key>
//       <Table.Value>Diesel</Table.Value>
//     </Table.Row>
//     <Table.Row>
//       <Table.Key>Catalogus waarde</Table.Key>
//       <Table.Value highlight={text('highlight', 'Excl btw')}>
//         28 797,54 €
//       </Table.Value>
//     </Table.Row>
//   </StyledTable>
// ));

const StyledQuestionBox = styled(QuestionBox)`
  width: 85%;
`;

// const StyledTable = styled(Table)`
//   width: 46rem;
// `;

// StyledTable.displayName = 'Table';
StyledQuestionBox.displayName = 'QuestionBox';
