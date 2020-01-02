import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  boolean,
  number,
  text,
  select,
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
  MaskedInput,
  TextArea,
  TextInput,
  SearchInput,
  SearchSelectInput,
  DateInput,
  TimeInput,
} from '../src';

storiesOf('Low level blocks/Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('ImageSelectBox', () => {
    const [selected, setSelected] = useState('');

    const handleChange = ({ value }) => setSelected(value);

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
  .add('MaskedInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);
    const [val, setVal] = useState('');
    return (
      <MaskedInput
        disabled={boolean('Disabled', false)}
        name="police"
        type="text"
        error={error}
        onChange={({ value }) => setVal(value)}
        touched={touched}
        // mask="+(  )   -   -  "
        value={val}
      >
        Police zone
      </MaskedInput>
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
    let isCalendarEnabled = boolean('Enable datepicker', false);
    const ref = useRef();
    return (
      <StyledDateInput
        ref={ref}
        touched={touched}
        error={error}
        name="date"
        isCalendarEnabled={isCalendarEnabled}
        disabled={disabled}
        onChange={action('change')}
      >
        Date
      </StyledDateInput>
    );
  })
  .add('TimeInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);
    let disabled = boolean('Disable', false);
    const ref = useRef();
    return (
      <StyledTimeInput
        ref={ref}
        touched={touched}
        error={error}
        is12HourFormat={boolean('is12HourFormat', true)}
        name="date"
        disabled={disabled}
        onChange={action('change')}
      >
        Time
      </StyledTimeInput>
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
    const [value, setValue] = useState();
    const loadOptions = () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(
            select(
              'options',
              {
                None: [],
                multiple: [
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ].filter(o => o.label),
              },
              [],
            ),
          );
        }, 500);
      });
    return (
      <StyledSearchSelectInput
        async={boolean('Async', false)}
        disabled={boolean('Disabled', false)}
        error={errors}
        value={select('value', {
          None: null,
          custom: { label: 'Dom', value: 'dom' }
        })}
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
        loadOptions={loadOptions}
        name="selection"
        onSelected={({ name, value }) => console.log(name, value)}
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

const StyledTimeInput = styled(TimeInput)`
  width: 27rem;
`;

const StyledTextArea = styled(TextArea)`
  width: 27rem;
`;

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
StyledDateInput.displayName = 'DateInput';
StyledTimeInput.displayName = 'TimeInput';
StyledTextArea.displayName = 'TextArea';
