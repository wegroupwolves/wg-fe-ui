import React, { useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';

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

/* COMPONENTS
-------------------------------------------------- */
import {
  ImageSelectBox,
  MaskedInput,
  TextInput,
  PhoneInput,
  TextArea,
  SearchInput,
  SearchSelectInput,
  DateInput,
  TimeInput,
  CommentBox,
  ToggleInput,
  AmountInput,
  RangeSlider,
  FeatureInput,
  ThemePicker,
  RoomInput,
  CardPicker,
  DropDown,
} from '../src';

/* OTHER ELEMENTS
-------------------------------------------------- */
import {
  Section,
  IconSportsCarFilled,
  IconFurnitureFilled,
  H4,
  Body,
} from '../src';

import * as Icons from '../src/components/Icons';
import MultiTabTextArea from '../src/components/Inputs/MultiTabTextArea';
import DateinputNew from '../src/components/Inputs/DateInput_New';
const IconsKeys = Object.keys(Icons);
const IconsList = {};
IconsKeys.map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey].name;
});

const themeList = {
  orange: '#FF8000',
  turquoise: '#1abc9c',
  green: '#2ecc71',
  blue: '#3498db',
  purple: '#9b59b6',
  yellow: '#f1c40f',
  red: '#e74c3c',
};

const DropDownOptions = [
  {
    title: 'Dropdown option 1',
    text:
      'Curabitur ullamcorper ultricies nisi. Maecenas egestas arcu quis ligula mattis placerat.',
    value: 1,
  },
  {
    title: 'Dropdown option 2',
    text:
      'In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.',
    value: 2,
  },
  {
    title: 'Dropdown option 3',
    text: 'In auctor lobortis lacus. Vestibulum ullamcorper mauris at ligula.',
    value: 3,
  },
  {
    title: 'Dropdown option 4',
    text: 'Nullam quis ante. Curabitur suscipit suscipit tellus.',
    value: 4,
  },
  {
    title: 'Dropdown option 5',
    text:
      'Nulla consequat massa quis enim. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.',
    value: 5,
  },
  {
    title: 'Dropdown option 6',
    text: 'Suspendisse potenti. Cras dapibus.',
    value: 6,
  },
  {
    title: 'Dropdown option 7',
    text: 'Etiam feugiat lorem non metus. Curabitur suscipit suscipit tellus.',
    value: 7,
  },
];

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
      <StyledMaskedInput
        disabled={boolean('Disabled', false)}
        name="police"
        type="text"
        error={error}
        onChange={({ value }) => setVal(value)}
        value={val}
        touched={touched}
        mask="999-99999-99"
      >
        Police zone
      </StyledMaskedInput>
    );
  })

  .add('TextInput', () => {
    let error = text('Error', '', 'Input options');
    let touched = boolean('Touched', false, 'Input options');
    return (
      <StyledTextInput
        disabled={boolean('Disabled', false, 'Input options')}
        name="emailadres"
        type="email"
        placeholder={text('Placeholder', 'example@wegroup.be', 'Input options')}
        error={error}
        touched={touched}
        value={text('DefaultValue', '', 'Input options')}
        symbol={
          boolean('Show symbol', true, 'Symbol options')
            ? select('Icon', IconsList, IconsKeys[0], 'Symbol options')
            : ''
        }
        symbolSide={select(
          'Symbol side',
          { Right: 'right', Left: 'left' },
          'right',
          'Symbol options',
        )}
        symbolText={boolean('Show symbol as text', false, 'Symbol options')}
      >
        {text('Label', 'Email', 'Input options')}
      </StyledTextInput>
    );
  })

  .add('PhoneInput', () => {
    let error = text('Error', '', 'Input options');
    let touched = boolean('Touched', false, 'Input options');
    const ChosenIcon = Icons['IconActionPhone'];
    return (
      <StyledPhoneInput
        disabled={boolean('Disabled', false, 'Input options')}
        name="phone"
        icon={<ChosenIcon />}
        placeholder={text('Placeholder', '', 'Input options')}
        error={error}
        touched={touched}
        value={text('DefaultValue', '', 'Input options')}
      >
        {text('Label', 'Phone', 'Input options')}
      </StyledPhoneInput>
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

  .add('MultiTabTextArea', () => {
    let error = text('Error', '');
    return (
      <MultiTabTextArea
        disabled={boolean('Disabled', false)}
        onChange={() => null}
        onReset={() => null}
        values={{}}
        maxLength={100}
        errors={error ? { input_nl: error } : {}}
        areas={[
          {
            tab: 'EN',
            name: 'input_en',
          },
          {
            tab: 'NL',
            name: 'input_nl',
          },
          {
            tab: 'FR',
            name: 'input_fr',
          },
        ]}
      >
        Text area
      </MultiTabTextArea>
    );
  })

  .add('DateInput', () => {
    let error = text('Error', '');
    let touched = boolean('Touched', false);
    let disabled = boolean('Disable', false);
    let isCalendarEnabled = boolean('Enable datepicker', false);
    const ref = useRef();
    const validate = date => {
      const now = new Date(Date.now()).toLocaleDateString('en-GB');
      return now > date;
    };
    return (
      <StyledDateInput
        ref={ref}
        touched={touched}
        error={error}
        name="date"
        validate={validate}
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
        is12HourFormat={boolean('is12HourFormat', false)}
        name="time"
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
      <SearchInput
        showButton={boolean('Show search button?', true)}
        text={val}
        placeholder="Search for..."
        onChange={setVal}
        loading={boolean('Is loading?', false)}
        onClear={() => {
          console.log('Clear input');
        }}
      />
    );
  })

  .add('SearchSelectInput', () => {
    let errors = text('Error', '');
    const [option, setOption] = useState();
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
          custom: { label: 'Dom', value: 'dom' },
          normal: option,
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
        onSelected={({ name, value }) => {
          const option = value.length ? value : { name, value };
          setOption(...option);
          action('change')(...option);
        }}
        loading={boolean('Loading', false)}
        initial={select('initial', {
          None: null,
          Option1: { value: 'option1', label: 'Option 1' },
          Option2: { value: 'option2', label: 'Option 2' },
          Option3: { value: 'option3', label: 'Option 3' },
        })}
        isMulti={boolean('Multiple', false)}
        placeholder={text('Placeholder', 'Choose an option')}
        data-test-id="random_data_id_example"
      >
        Selection
      </StyledSearchSelectInput>
    );
  })

  .add('CommentBox', () => {
    return (
      <Section>
        <Section.Content background={true}>
          <CommentBox
            title={text('Comment title', '27/02/2020 - Added by Schauwers P.')}
            icon={select('Icon', IconsList, IconsKeys[0])}
            id={1}
          >
            <p>
              Cras dapibus. Fusce egestas elit eget lorem. Phasellus dolor.
              Maecenas nec odio et ante tincidunt tempus. Vivamus quis mi.
              Pellentesque auctor neque nec urna. Pellentesque libero tortor,
              tincidunt et, tincidunt eget, semper nec, quam. Duis lobortis
              massa imperdiet quam. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Sed consequat, leo eget bibendum sodales, augue
              velit cursus nunc, quis gravida magna mi a libero.
            </p>
          </CommentBox>
        </Section.Content>
      </Section>
    );
  })

  .add('ToggleInput', () => {
    return (
      <ToggleInput
        disabled={boolean('Disabled?', false)}
        checked={boolean('Checked?', false)}
        trueLabel={text('Label for "on" state', 'Ja')}
        falseLabel={text('Label for "off" state', 'Neen')}
      ></ToggleInput>
    );
  })

  .add('AmountInput', () => {
    return (
      <AmountInput
        value={number('Input value', 1)}
        min={number('Minimum value', 1)}
        max={number('Maximum value', 100)}
        inputAppend={text('Input append', '%')}
        disabled={boolean('Disabled?', false)}
        roundNumber={boolean('Round numbers?', true)}
      ></AmountInput>
    );
  })

  .add('RangeSlider', () => {
    return (
      <RangeSlider
        initialValues={[
          number('Initial low value', 100),
          number('Initial high value', 200),
        ]}
        min={number('Minimum value', 24)}
        max={number('Maximum value', 304)}
        step={number('Steps', 1, { min: 1, max: 20, range: true, step: 1 })}
        mode={select(
          'Mode',
          {
            'Handles can cross': 1,
            'Handles can not cross each other': 2,
            'Handles can push each other': 3,
          },
          2,
        )}
        handlePrefix={text('Handle prefix', '€')}
        onChanged={values => console.log(values)}
      ></RangeSlider>
    );
  })

  .add('FeatureInput', () => {
    return (
      <FeatureInput
        icon={<IconSportsCarFilled />}
        checked={boolean('Checked?', true)}
        onChange={e => console.log('Checkbox checked:', e)}
        name="Sports car"
        editable={boolean('Editable?', true)}
        disabled={boolean('Disabled?', false)}
      >
        Sports car
      </FeatureInput>
    );
  })

  .add('ThemePicker', () => {
    return (
      <ThemePickerContainer>
        <ThemePicker
          themes={themeList}
          activeTheme={'orange'}
          error={text('Error', 'Choose an option')}
          disabled={boolean('Disabled?', false)}
          opensUp={boolean('Open up?', false)}
          onChange={() => {}}
        >
          ThemePicker
        </ThemePicker>
      </ThemePickerContainer>
    );
  })

  .add('RoomInput', () => {
    return (
      <RoomInputContainer>
        <RoomInput
          icon={<IconFurnitureFilled size={50} />}
          label={text('Label', 'Living room')}
          info={text('Info button', 'Praesent porttitor nulla vitae posuere')}
          onInputChange={e => {
            console.log(e);
          }}
          minValue={number('Min value?', 0, {
            range: true,
            step: 1,
            min: 0,
            max: 100,
          })}
          maxValue={number('Max value?', 10, {
            range: true,
            step: 1,
            min: 1,
            max: 100,
          })}
          value={number('Value?', 0, {
            range: true,
            step: 1,
            min: 0,
            max: 100,
          })}
        ></RoomInput>
      </RoomInputContainer>
    );
  })

  .add('CardPicker', () => {
    return (
      <CardPickerContainer>
        <CardPicker
          active={boolean('Active?', false)}
          disabled={boolean('Disabled?', false)}
        >
          <CardPicker.Header>
            <H4>Header</H4>
          </CardPicker.Header>
          <CardPicker.Content>
            <Body light smaller>
              Pellentesque libero tortor, tincidunt et, tincidunt eget, semper
              nec, quam. Ut varius tincidunt libero. Phasellus ullamcorper ipsum
              rutrum nunc. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Vivamus euismod
              mauris.
            </Body>
          </CardPicker.Content>
        </CardPicker>
      </CardPickerContainer>
    );
  })

  .add('DateInputNew', () => {
    const [returnedOnChangeDate, setReturnedOnChangeDate] = useState('');
    const [returnedOnBlurDate, setReturnedOnBlurDate] = useState('');
    const [returnedOnFieldChangeDate, setReturnedOnFieldChangeDate] = useState(
      '',
    );
    const [returnedOnFieldBlurDate, setReturnedOnFieldBlurDate] = useState('');

    return (
      <Flex>
        <StyledDateInputNew
          name="dateInput"
          error={text('Error', '')}
          disabled={boolean('Disabled', false)}
          onChange={setReturnedOnChangeDate}
          onBlur={setReturnedOnBlurDate}
          onFieldChange={setReturnedOnFieldChangeDate}
          onFieldBlur={setReturnedOnFieldBlurDate}
          value={select(
            'Date input',
            {
              'ISO: 2013-03-10T00:00:00+01:00': String(
                '2013-03-10T00:00:00+01:00',
              ),
              'ISO: 1997-07-16': '1997-07-16',
              'Javascript Date object: 2013-03-10T02:00:00.000Z':
                '2013-03-10T02:00:00.000Z',
              'Date object: { day: 3, month: 10, year: 2013 }': {
                day: 10,
                month: 3,
                year: 2013,
              },
              'Date string: 10/03/2013': '10/03/2013',
              'Date string: 10-03-2013': '10-03-2013',
              'Incomplete date string: 10-03': '10-03',
              'Incomplete date string: 2020-10': '2020-10',
              Empty: '',
            },
            '2013-03-10T00:00:00+01:00',
          )}
        >
          {text('Label', 'Date')}
        </StyledDateInputNew>
        <div>
          <H1>Supported input date types</H1>
          <P>
            <UL>
              <LI>- Javascript date object</LI>
              <LI>
                - Date object:{' '}
                {JSON.stringify({ day: 3, month: 10, year: 2013 })}
              </LI>
              <LI>- ISO formats</LI>
              <LI>- DD/MM/YYYY</LI>
              <LI>- DD-MM-YYYY</LI>
            </UL>
          </P>
          <H1>Returned dates</H1>
          <P>
            The following dates are what is returned from the date component. On
            initial render these should be empty. The same type of date will
            always be returned. Inputting ISO =&gt; onXXX outputs ISO.
          </P>
          <P>
            The difference between onFieldXXX and onXXX are that for the field
            the single value gets returned. Changing year for date 17/07/1996 to
            for example 1997 will give the following:
            <UL>
              <LI>- onChange: 17/07/1997</LI>
              <LI>- onFieldChange: 1997</LI>
            </UL>
          </P>
          <H2>Returned on change date:</H2>
          <P>{JSON.stringify(returnedOnChangeDate)}</P>
          <H2>Returned on blur date:</H2>
          <P>{JSON.stringify(returnedOnBlurDate)}</P>
          <H2>Returned on field change date:</H2>
          <P>{JSON.stringify(returnedOnFieldChangeDate)}</P>
          <H2>Returned on field blur date:</H2>
          <P>{JSON.stringify(returnedOnFieldBlurDate)}</P>
        </div>
      </Flex>
    );
  })

  .add('Dropdown', () => {
    return (
      <DropDownContainer>
        <DropDown
          name="test-dropdown"
          options={DropDownOptions}
          opensUp={boolean('Open up?', false)}
          onValueChange={picked => {
            console.log(picked);
          }}
          disabled={boolean('Disabled?', false)}
          value={3}
          placeholder={text('Placeholder', 'Choose an option')}
          error={text('Error', 'Choose an option')}
        >
          Label
        </DropDown>
      </DropDownContainer>
    );
  });

const H1 = styled.h1`
  font-size: 3rem;
  margin-top: 1rem;
`;

const H2 = styled.h2`
  margin-top: 0.5rem;
  font-size: 2rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const UL = styled.ul`
  margin: 0.5rem 0;
`;

const LI = styled.li`
  display: list-item;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledMaskedInput = styled(MaskedInput)`
  width: 27rem;
`;

const StyledTextInput = styled(TextInput)`
  width: 27rem;
`;

const StyledPhoneInput = styled(PhoneInput)`
  width: 27rem;
`;

const StyledSearchSelectInput = styled(SearchSelectInput)`
  width: 27rem;
`;

const StyledDateInput = styled(DateInput)`
  width: 27rem;
`;

const StyledDateInputNew = styled(DateinputNew)`
  width: 27rem;
`;

const StyledTimeInput = styled(TimeInput)`
  width: 27rem;
`;

const StyledTextArea = styled(TextArea)`
  width: 27rem;
`;

const ThemePickerContainer = styled.div`
  width: 45rem;
`;

const RoomInputContainer = styled.div`
  width: 30rem;
`;

const CardPickerContainer = styled.div`
  width: 45rem;
`;

const DropDownContainer = styled.div`
  width: 45rem;
`;

StyledTextInput.displayName = 'TextInput';
StyledSearchSelectInput.displayName = 'SearchSelectInput';
StyledDateInput.displayName = 'DateInput';
StyledTimeInput.displayName = 'TimeInput';
StyledTextArea.displayName = 'TextArea';
