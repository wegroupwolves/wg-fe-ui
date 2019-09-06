import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Checkbox } from '../src';


storiesOf('Low level blocks/Checkboxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('Checkbox', () => (
  <Checkbox name='checktest' disabled={boolean('disabled', false)} checked={boolean('checked', false)} onChange={(e) => console.log("Checkbox checked:" , e.currentTarget.checked)}>Item</Checkbox>
    ))
;
