import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import buttonIcon from './assets/buttonIcon.svg';
import { ActionButton, ToggleActionButton } from '../src/';

addParameters({
  options: {
    panelPosition: 'right',
  },
});

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const buttonLevels = ['primary', 'secondary'];
const ToggleActionButtonLevels = ['active', 'non-active'];
const iconObject = { none: null, House: buttonIcon };
const propsObject = { none: null, id: { id: 'add' } };

storiesOf('Low level blocks/Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('ActionButton', () => (
    <ActionButton
      onClick={action('button clicked')}
      fullwidth={boolean('Fullwidth', false)}
      disabled={boolean('Disabled', false)}
      icon={select('Icon', iconObject)}
      level={select('Level', buttonLevels, 'primary')}
      otherProps={select('otherProps', propsObject)}
    >
      {text('Label', 'Pay')}
    </ActionButton>
  ))
  .add('ToggleButton', () => (
    <ToggleActionButton
      onClick={action('button clicked')}
      fullwidth={boolean('Fullwidth', false)}
      disabled={boolean('Disabled', false)}
      icon={select('Icon', iconObject)}
      level={select('Level', ToggleActionButtonLevels, 'active')}
      otherProps={select('otherProps', propsObject)}
    >
      {text('Label', 'Add')}
    </ToggleActionButton>
  ));
