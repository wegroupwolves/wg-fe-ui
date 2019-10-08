import React from 'react';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  boolean,
  text,
  select,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { TextInput, SearchInput, SearchSelectInput, DateInput } from '../src';

storiesOf('Low level blocks/Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('TextInput', () => {
    let errors = { emailadres: text('Error', '') };
    let touched = { emailadres: boolean('Touched', false) };

    return (
      <StyledTextInput
        disabled={boolean('Disabled', false)}
        name="emailadres"
        type="email"
        placeholder="example@wegroup.be"
        errors={errors}
        touched={touched}
      >
        Email
      </StyledTextInput>
    );
  })
  .add('DateInput', () => {
    let errors = { date: text('Error', '') };
    let touched = { date: boolean('Touched', false) };
    let disabled = boolean('Disable', false);

    return (
      <StyledDateInput
        touched={touched}
        errors={errors}
        name="date"
        value={object('Value', { day: '' })}
        disabled={disabled}
        onChange={action('change')}
      >
        Date
      </StyledDateInput>
    );
  })
  .add('SearchInput', () => (
    <SearchInput
      text="test"
      placeholder="Search for..."
      onChange={action('change')}
    />
  ))
  .add('SearchSelectInput', () => {
    return (
      <StyledSearchSelectInput
        disabled={boolean('Disabled', false)}
        options={select(
          'options',
          {
            None: [],
            multiple: [
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ],
          },
          [],
        )}
        name="selection"
        selected={(name, value) => console.log(name, value)}
        loading={boolean('Loading', false)}
        initial={select('initial', {
          None: null,
          Option1: { value: 'option1', label: 'Option 1' },
          Option2: { value: 'option2', label: 'Option 2' },
          Option3: { value: 'option3', label: 'Option 3' },
        })}
      >
        Selection
      </StyledSearchSelectInput>
    );
  });

const StyledTextInput = styled(TextInput)`
  width: 27rem;
`;

const StyledSearchSelectInput = styled(SearchSelectInput)`
  width: 27rem;
`;

const StyledDateInput = styled(DateInput)`
  width: 27rem;
`;

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
StyledDateInput.displayName = 'DateInput';
