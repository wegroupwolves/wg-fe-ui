import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  select,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs';

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
          currentStep={number('Current step', 0)}
          steps={[
            {
              step: 0,
              label: 'Generate offers - Acknowledgements',
            },
            {
              step: 1,
              label: 'Generate offers - Informatieplicht fiches',
            },
            {
              step: 2,
              label: 'Generate offers - Termination letter',
            },
          ]}
        >
          <ModalWithSteps.ModalContent key={0} step={0}>
            This is step 0
          </ModalWithSteps.ModalContent>
          <ModalWithSteps.ModalContent key={1} step={1}>
            This is step 1
          </ModalWithSteps.ModalContent>
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
