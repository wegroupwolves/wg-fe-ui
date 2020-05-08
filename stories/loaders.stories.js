import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';

import {
  LoadingSpinner,
  PieProgressIndicator,
  CircularProgressBar,
} from '../src/components/Loaders/index';

import { H1, H2 } from '../src/components/Typography/index';

storiesOf('Low level blocks/Loaders', module)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(withKnobs)
  .add('LoadingSpinner', () => {
    return <LoadingSpinner isAbsolute={boolean('isAbsolute', true)} />;
  })
  .add('PieProgressIndicator', () => {
    return (
      <PieProgressIndicator
        percentage={number('Percentage', 10, {
          range: true,
          min: 0,
          max: 100,
          step: 1,
        })}
        big={boolean('Full size?', false)}
      />
    );
  })
  .add('CircularProgressBar', () => {
    return (
      <CircularProgressBar
        currentItems={number('Current items', 374, {
          min: 0,
          max: 1500,
          range: true,
          step: 10,
        })}
        maxItems={number('Max items', 1290, {
          min: 100,
          max: 1500,
          range: true,
          step: 10,
        })}
        relative={boolean('Relative positioning?', true)}
      >
        <H1>
          {number('Current items', 374, {
            min: 0,
            max: 1500,
            range: true,
            step: 10,
          })}
          /
          {number('Max items', 1290, {
            min: 100,
            max: 1500,
            range: true,
            step: 10,
          })}
        </H1>
        <H2>quotes calculated</H2>
      </CircularProgressBar>
    );
  });
