import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { CheckBox, CheckOption, CheckBoxContainer } from '../src';

import Property from '../src/components/Icons/Property';

storiesOf('Low level blocks/Checkboxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Checkbox', () => (
    <CheckBox
      name="checktest"
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
      onChange={e => console.log('Checkbox checked:', e.currentTarget.checked)}
    >
      Item
    </CheckBox>
  ))
  .add('Checkbox', () => (
    <CheckBox
      name="checktest"
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
      onChange={e => console.log('Checkbox checked:', e.currentTarget.checked)}
    >
      Item
    </CheckBox>
  ))
  .add('CheckOption', () => {
    const [checkedBox, setCheckedBox] = useState({ 1: false, 2: false });

    const handleChangeCheckbox = id => {
      setCheckedBox({ ...checkedBox, [id]: !checkedBox[id] });
    };
    return (
      <>
        <CheckOption
          icon={<Property />}
          handleClick={() => handleChangeCheckbox(1)}
          checked={checkedBox[1]}
          disabled={boolean('disabled', false)}
        >
          I encountered issues with my lugage
        </CheckOption>
      </>
    );
  })
  .add('CheckBoxContainer', () => {
    return (
      <CheckBoxContainer>
        <CheckBox name="lead">Lead</CheckBox>
        <CheckBox name="offer">Offer</CheckBox>
        <CheckBox name="contract">Contract</CheckBox>
      </CheckBoxContainer>
    );
  });
