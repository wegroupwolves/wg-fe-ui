import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { ActionButton, TertiaryButton, Modal, ModalWithSteps } from '../src/';

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
          small={boolean('Small modal?', false)}
          large={boolean('Larger modal?', false)}
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
  })
  .add('ModalWithSteps', () => {
    const [showModal, setShowModal] = useState(true);

    return (
      <>
        <ActionButton onClick={() => setShowModal(!showModal)}>
          Click me!
        </ActionButton>
        <ModalWithSteps
          showModal={showModal}
          setShowModal={setShowModal}
          title={text('Modal title', 'Default Title')}
          small={boolean('Small modal?', false)}
          large={boolean('Larger modal?', false)}
          currentStep={0}
          steps={[
            {
              step: 0,
              label: 'Acknowledgements',
            },
            {
              step: 1,
              label: 'Information requirements',
            },
            {
              step: 2,
              label: 'Termination letter',
            },
          ]}
        >
          <p>Content for the modal</p>

          <ModalWithSteps.ModalActions
            position={select(
              'Position of the actions',
              ModalActionsPositions,
              'right',
            )}
          >
            <TertiaryButton label="Cancel"></TertiaryButton>
            <ActionButton>Primary</ActionButton>
          </ModalWithSteps.ModalActions>
        </ModalWithSteps>
      </>
    );
  });
