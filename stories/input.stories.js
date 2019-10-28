import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  boolean,
  number,
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
  TextArea,
  TextInput,
  SearchInput,
  SearchSelectInput,
  DateInput,
} from '../src';

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
  .add('TextArea', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);
    let counter = boolean('Counter', false);
    let maxLength = number('maxLength', -1);
    return (
      <StyledTextArea
        disabled={boolean('Disabled', false)}
        name="textarea"
        placeholder="This is a textarea."
        error={error}
        touched={touched}
        counter={counter}
        maxLength={maxLength}
        value={text('DefaultValue', '')}
      >
        Text area
      </StyledTextArea>
    );
  })
  .add('DateInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);
    let disabled = boolean('Disable', false);
    const ref = useRef();
    return (
      <StyledDateInput
        ref={ref}
        touched={touched}
        error={error}
        name="date"
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
        onSelected={(name, value) => console.log(name, value)}
        loading={boolean('Loading', false)}
        initial={select('initial', {
          None: null,
          Option1: { value: 'option1', label: 'Option 1' },
          Option2: { value: 'option2', label: 'Option 2' },
          Option3: { value: 'option3', label: 'Option 3' },
        })}
        isMulti={boolean('Multiple', false)}
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

const StyledTextArea = styled(TextArea)`
  width: 27rem;
`;

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
StyledDateInput.displayName = 'DateInput';
StyledTextArea.displayName = 'TextArea';
