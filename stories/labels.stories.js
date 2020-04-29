import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import * as Icons from '../src/components/Icons';

import {
  TypeLabel,
  RiskObjectLabel,
  PhaseLabel,
  Label,
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
};

const Statuses = {
  Default: 'default',
  OfferSend: 'offer-send',
  ContractSend: 'contract-send',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
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
  });
