import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';

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
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <ActionButton onClick={() => setShowModal(!showModal)}>
          Click me!
        </ActionButton>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title={text('Modal title', 'Default Title')}
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
      </>
    );
  });
