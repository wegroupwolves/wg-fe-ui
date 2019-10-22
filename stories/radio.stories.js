import { RadioOption } from '../src';
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Property from '../src/components/Icons/Property';

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
          icon={<Property />}
          handleChange={() => handleChangeRadio(1)}
          checked={checkedRadio === 1}
          disabled={boolean('disabled', false)}
        >
          I encountered issues with my lugage
        </RadioOption>
      </>
    );
  });
