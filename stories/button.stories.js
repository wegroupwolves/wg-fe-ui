import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import buttonIcon from './assets/buttonIcon.svg';
import { ReactComponent as BackArrow } from './assets/back-arrow.svg';
import {
  ActionButton,
  AddEntityButton,
  BackButton,
  UploadField,
  ToggleButton,
} from '../src/';

addParameters({
  options: {
    panelPosition: 'right',
  },
});

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const buttonLevels = ['primary', 'secondary'];
const ToggleButtonLevels = ['active', 'non-active'];
const iconObject = { none: null, House: buttonIcon };
const svg = { none: null, back_arrow: <BackArrow /> };
const propsObject = [{ none: null, id: { id: 'add' } }];

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
      otherProps={select('otherProps', ...propsObject)}
    >
      {text('Label', 'Pay')}
    </ActionButton>
  ))
  .add('AddEntityButton', () => {
    const onClick = () => console.log('resource: ');

    return <AddEntityButton onClick={onClick} name="Add Entity" />;
  })
  .add('BackButton', () => {
    const iconName = select('Icon', Object.keys(svg), 'back_arrow');
    return (
      <BackButton
        onClick={action('button clicked')}
        name="Overview"
        icon={svg[iconName]}
        otherProps={select('otherProps', ...propsObject)}
      />
    );
  })
  .add('UploadField', () => {
    const onClick = value => console.log('value: ', value);
    return <UploadField onClick={onClick} />;
  })
  .add('ToggleButton', () => (
    <ToggleButton
      onClick={action('button clicked')}
      fullwidth={boolean('Fullwidth', false)}
      disabled={boolean('Disabled', false)}
      icon={select('Icon', iconObject)}
      level={select('Level', ToggleButtonLevels, 'active')}
      otherProps={select('otherProps', ...propsObject)}
    >
      {text('Label', 'Add')}
    </ToggleButton>
  ));
