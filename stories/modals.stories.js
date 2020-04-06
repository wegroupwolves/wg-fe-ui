import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { ActionButton, TertiaryButton, Modal } from '../src/';

const ModalActionsPositions = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
};

storiesOf('Low level blocks/Modals', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Modal', () => {
    return (
      <Modal
        title={text('Modal title', 'Default Title')}
        showModal={boolean('Show modal?', true)}
      >
        <p>This is some content for the modal</p>

        <Modal.ModalActions
          position={select(
            'Position of the actions',
            ModalActionsPositions,
            'right',
          )}
        >
          <TertiaryButton label="Cancel"></TertiaryButton>
          <ActionButton>Primary</ActionButton>
        </Modal.ModalActions>
      </Modal>
    );
  });
