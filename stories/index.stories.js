import React from 'react';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/components/button/Button';


import { Welcome } from '@storybook/react/demo';

const stories = storiesOf('Storybook Knobs', module);


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const buttonColors = ['primary', 'secondary'];


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('De button', () => (<Button disabled={boolean('Disabled', false)} color={select('Kleur', buttonColors, 'primary')} label='klik me' />))
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ));
