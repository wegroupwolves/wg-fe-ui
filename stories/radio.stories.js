import { RadioOption } from '../src';
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HouseIcon from './assets/HouseIcon.jsx';

storiesOf('Low level blocks/Radios', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('RadioOption', () => {
    const [checkedRadio, setCheckedRadio] = useState(0);

    const handleChangeRadio = id => {
      setCheckedRadio(id);
    };
    return (
      <>
        <RadioOption
          icon={<HouseIcon />}
          handleChange={() => handleChangeRadio(1)}
          checked={checkedRadio === 1}
          disabled={true}
          type={'radio'}
        >
          I encountered issues with my lugage
        </RadioOption>
        <RadioOption
          icon={<HouseIcon />}
          handleChange={() => handleChangeRadio(2)}
          checked={checkedRadio === 2}
          type={'radio'}
        >
          I encountered issues with my lugage
        </RadioOption>
      </>
    );
  });
