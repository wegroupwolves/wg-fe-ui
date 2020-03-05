import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Modal from '../src/components/Modals/Modal';
import { ActionButton, CancelButton } from '../src/';

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
      <Modal title={text('Modal title', '')}>
        <p>This is some content for the modal</p>

        <Modal.ModalActions
          position={select(
            'Position of the actions',
            ModalActionsPositions,
            'right',
          )}
        >
          <CancelButton label="Cancel"></CancelButton>
          <ActionButton>Primary</ActionButton>
        </Modal.ModalActions>
      </Modal>
    );
  });
