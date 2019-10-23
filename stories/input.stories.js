import React, { useState } from 'react';
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
import Plane from './../src/components/Icons/Plane';
import Property from './../src/components/Icons/Property';
import Liability from './../src/components/Icons/Liability';
import Car from './../src/components/Icons/Car';

import {
  ImageSelectBox,
  TextInput,
  SearchInput,
  SearchSelectInput,
  DateInput,
} from '../src';
import TextAreaInput from '../src/components/Inputs/TextAreaInput';

storiesOf('Low level blocks/Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('ImageSelectBox', () => {
    const [selected, setSelected] = useState('');

    const handleChange = ({ target: { value } }) => setSelected(value);

    return (
      <>
        <ImageSelectBox
          label="Plane"
          selected={selected}
          value="plane"
          icon={<Plane width={96} height={34} />}
          onChange={handleChange}
          name="inputs"
        />
        <ImageSelectBox
          label="Property"
          selected={selected}
          value="property"
          icon={<Property />}
          onChange={handleChange}
          name="inputs"
        />
        <ImageSelectBox
          label="Liability"
          selected={selected}
          value="liability"
          icon={<Liability />}
          onChange={handleChange}
          name="inputs"
        />
        <ImageSelectBox
          label="Car"
          selected={selected}
          value="car"
          icon={<Car />}
          onChange={handleChange}
          name="inputs"
        />
      </>
    );
  })
  .add('TextInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);

    return (
      <StyledTextInput
        disabled={boolean('Disabled', false)}
        name="emailadres"
        type="email"
        placeholder="example@wegroup.be"
        error={error}
        touched={touched}
        value={text('DefaultValue', '')}
      >
        Email
      </StyledTextInput>
    );
  })
  .add('TextAreaInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);

    return (
      <StyledTextAreaInput
        disabled={boolean('Disabled', false)}
        name="textarea"
        placeholder="This is a textarea."
        error={error}
        touched={touched}
        value={text('DefaultValue', '')}
      >
        Text area
      </StyledTextAreaInput>
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
  .add('SearchInput', () => {
    const [val, setVal] = useState('');
    return (
      <SearchInput text={val} placeholder="Search for..." onChange={setVal} />
    );
  })
  .add('SearchSelectInput', () => {
    let errors = text('Error', '');
    return (
      <StyledSearchSelectInput
        disabled={boolean('Disabled', false)}
        error={errors}
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
        selected={(name, value) => action(name, value)}
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

const StyledTextAreaInput = styled(TextAreaInput)`
  width: 27rem;
`;

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
StyledDateInput.displayName = 'DateInput';
StyledTextAreaInput.displayName = 'TextAreaInput';
