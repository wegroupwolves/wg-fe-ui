import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { CheckBox, ImageSelectBar, ImageCheckBar } from '../src';

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
  .add('ImageSelectBar', () => {
    const [checkedRadio, setCheckedRadio] = useState(0);
    const [checkedBox, setCheckedBox] = useState({ 1: false, 2: false });

    const handleChangeRadio = id => {
      setCheckedRadio(id);
    };

    const handleChangeCheckbox = id => {
      setCheckedBox({ ...checkedBox, [id]: !checkedBox[id] });
    };
    return (
      <>
        <ImageSelectBar
          icon={<HouseIcon />}
          handleChange={() => handleChangeRadio(1)}
          checked={checkedRadio === 1}
          disabled={true}
          type={'radio'}
        >
          I encountered issues with my lugage
        </ImageSelectBar>
        <ImageSelectBar
          icon={<HouseIcon />}
          handleChange={() => handleChangeRadio(2)}
          checked={checkedRadio === 2}
          type={'radio'}
        >
          I encountered issues with my lugage
        </ImageSelectBar>
        <ImageCheckBar
          icon={<HouseIcon />}
          handleClick={() => handleChangeCheckbox(1)}
          checked={checkedBox[1]}
          disabled={true}
          type={'checkbox'}
        >
          I encountered issues with my lugage
        </ImageCheckBar>
        <ImageCheckBar
          icon={<HouseIcon />}
          handleClick={() => handleChangeCheckbox(2)}
          checked={checkedBox[2]}
          type={'checkbox'}
        >
          I encountered issues with my lugage
        </ImageCheckBar>
      </>
    );
  });
