import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  number,
  boolean,
} from '@storybook/addon-knobs';
import * as Icons from '../src/components/Icons';

import {
  TypeLabel,
  RiskObjectLabel,
  PhaseLabel,
  Label,
  Badge,
} from '../src/components/Labels/index';

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
  Guarantee: 'guarantee',
};

const Statuses = {
  Default: 'default',
  Pending: 'PENDING',
  Send: 'SEND',
  Accepted: 'ACCEPTED',
  Warning: 'warning',
  Cancelled: 'CANCELLED',
};

const IconsKeys = Object.keys(Icons);
const IconsList = {};
IconsKeys.map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey].name;
});

storiesOf('Low level blocks/Labels', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))

  .add('Label', () => {
    return <Label>{text('Label text', 'Theft')}</Label>;
  })

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
  })

  .add('PhaseLabel', () => {
    return (
      <PhaseLabel
        status={select('Type', Statuses)}
        text={text('Text', 'Lead')}
      ></PhaseLabel>
    );
  })

  .add('Badge', () => {
    return (
      <Badge
        size={select('Size', { Small: 'small', Normal: 'normal' }, 'normal')}
        disabled={boolean('Disabled?', false)}
      >
        {number('Badge content', 2, { range: true, min: 0, max: 99, step: 1 })}
      </Badge>
    );
  });
