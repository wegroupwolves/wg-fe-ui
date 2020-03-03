import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
// import { boolean } from '@storybook/addon-knobs';

addParameters({
  options: {
    panelPosition: 'right',
  },
});

const LabelTypes = {
  None: 'default',
  Prospect: 'prospect',
  Customer: 'customer',
  Lead: 'lead',
};

import TypeLabel from '../src/components/Labels/TypeLabel.jsx';

storiesOf('Low level blocks/Labels', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('TypeLabel', () => {
    return (
      <TypeLabel
        type={select('Test', LabelTypes)}
        text={text('Label text', 'Prospect')}
      ></TypeLabel>
    );
  });
