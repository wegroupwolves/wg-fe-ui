import React from 'react';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import {
  ImageSelectGroup,
  TextInput,
  SearchInput,
  SearchSelectInput,
} from '../src';

storiesOf('Low level blocks/Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('ImageSelectGroup', () => {
    const boxes = [
      { id: 1, val: 'plane', image: null },
      { id: 2, val: 'property', image: null },
      { id: 3, val: 'liability', image: null },
      { id: 4, val: 'car', image: null },
    ];

    return <ImageSelectGroup label="means" boxes={boxes} />;
  })
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

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
