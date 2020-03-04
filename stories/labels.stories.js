import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import * as Icons from '../src/components/Icons';

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

const IconsKeys = Object.keys(Icons);
const IconsList = {};
IconsKeys.map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey].name;
});

import TypeLabel from '../src/components/Labels/TypeLabel';
import RiskObjectLabel from '../src/components/Labels/RiskObjectLabel';

console.log(IconsKeys[0]);

storiesOf('Low level blocks/Labels', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('TypeLabel', () => {
    return (
      <TypeLabel
        type={select('Label type', LabelTypes)}
        text={text('Label text', 'Prospect')}
      ></TypeLabel>
    );
  })
  .add('RiskObjectLabel', () => {
    return (
      <RiskObjectLabel
        amount={number('Amount', 0)}
        icon={select('Icon', IconsList, IconsKeys[0])}
      ></RiskObjectLabel>
    );
  });
