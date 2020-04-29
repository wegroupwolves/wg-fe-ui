import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs, number } from '@storybook/addon-knobs';

import LoadingSpinner from '../src/components/Loaders/LoadingSpinner.jsx';
import PieProgressIndicator from '../src/components/Loaders/PieProgressIndicator';

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
  });
