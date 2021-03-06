import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Tooltip } from '../src';

storiesOf('Low level blocks/Tooltips', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Tooltip', () => {
    return (
      <Tooltip
        toggleIcon={text('Icon', '?')}
        text={text('Tooltip text', '')}
        direction={select(
          'Direction',
          {
            Middle: '',
            Left: 'left',
            Right: 'right',
            Bottom: 'bottom',
            Bottomleft: 'bottomleft',
            Bottomright: 'bottomright',
          },
          2,
        )}
      >
        {text(
          'Content',
          'Aliquam eu nunc. Donec sodales sagittis magna. Aenean ut eros et nisl sagittis vestibulum. Pellentesque commodo eros a enim. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
        )}
      </Tooltip>
    );
  });
