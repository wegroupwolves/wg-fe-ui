import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import Plane from './../src/components/Icons/Plane';
import Property from './../src/components/Icons/Property';
import Liability from './../src/components/Icons/Liability';
import Car from './../src/components/Icons/Car';

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
    const [selected, setSelected] = useState('');
    const boxes = [
      { id: 1, val: 'plane', icon: <Plane width={96} height={34} /> },
      { id: 2, val: 'property', icon: <Property /> },
      { id: 3, val: 'liability', icon: <Liability /> },
      { id: 4, val: 'car', icon: <Car /> },
    ];

    return (
      <ImageSelectGroup
        label="means"
        boxes={boxes}
        selected={selected}
        setSelected={setSelected}
      />
    );
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
