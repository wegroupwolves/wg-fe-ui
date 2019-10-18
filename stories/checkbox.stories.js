import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { CheckBox, CheckOption } from '../src';

import HouseIcon from './assets/HouseIcon.jsx';

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
          icon={<HouseIcon />}
          handleClick={() => handleChangeCheckbox(1)}
          checked={checkedBox[1]}
          disabled={true}
        >
          I encountered issues with my lugage
        </CheckOption>
        <CheckOption
          icon={<HouseIcon />}
          handleClick={() => handleChangeCheckbox(2)}
          checked={checkedBox[2]}
        >
          I encountered issues with my lugage
        </CheckOption>
      </>
    );
  });
