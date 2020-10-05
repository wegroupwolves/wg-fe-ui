import React, { createContext, useContext } from 'react';
import { string, bool, node, func, shape, number } from 'prop-types';
import styled from 'styled-components';
import Drawer from 'react-drag-drawer';

import CloseIcon from '../Icons/IconActionClose';
const StepModalContext = createContext();

const StyledModalActions = ({ children, position, className }) => {
  return (
    <ModalActions className={className} position={position}>
      {children}
    </ModalActions>
  );
};

const ModalContent = ({ children, step }) => {
  const { currentStep } = useContext(StepModalContext);
  return currentStep === step ? children : null;
};

const ModalWithSteps = ({
  canClose,
  children,
  showModal,
  setShowModal,
  small,
  large,
  className,
  steps,
  currentStep,
}) => {
  return (
    <StepModalContext.Provider value={{ currentStep }}>
      <StyledDrawer
        open={showModal}
        onRequestClose={canClose ? () => setShowModal(!showModal) : ''}
      >
        <ModalContainer className={className} small={small} large={large}>
          {canClose ? (
            <ModalCloser onClick={() => setShowModal(!showModal)}>
              <CloseIcon color="#505050" />
            </ModalCloser>
          ) : null}

          <ModalTitleBar>
            <ModalTitle>
              Step {currentStep + 1}/{steps.length}
              {steps.map(
                ({ step, label }) =>
                  step === currentStep && (
                    <StepLabel key={step.step}>{label}</StepLabel>
                  ),
              )}
            </ModalTitle>
          </ModalTitleBar>
          <div>{children}</div>
        </ModalContainer>
      </StyledDrawer>
    </StepModalContext.Provider>
  );
};

const StyledDrawer = styled(Drawer)`
  z-index: 9999999;
`;

const ModalContainer = styled.div`
  background: white;
  width: ${({ small, large }) =>
    small ? '50rem' : large ? '100rem' : '60rem'};
  border: 1px solid #ccc;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  position: relative;
  font-family: ${({ theme }) => theme.font};

  @media screen and (max-width: 95rem) {
    width: calc(100vw - 3rem);
  }
`;

const StepLabel = styled.p`
  color: black;
  text-transform: initial;
  margin-left: 1rem;
  font-weight: bold;
`;

const ModalTitleBar = styled.div`
  width: 100%;
  padding-left: 2.2rem;
  height: 6.5rem;
  border-bottom: 1px solid #ccc;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
`;

const ModalTitle = styled.h1`
  color: #8990a3;
  display: flex;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 135%;
  text-align: left;
`;

const ModalCloser = styled.a`
  position: absolute;
  top: 3.25rem;
  transform: translate(0%, -50%);
  right: 3rem;
  z-index: 9999;
  cursor: pointer;

  &:hover {
    svg > path {
      fill: ${({ theme }) => theme.brand.primary};
    }
  }
`;

const ModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) => handleActionsPosition(position)};
  margin-top: 4rem;
  align-items: center;
  padding: 3rem;

  > button {
    margin: 0 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const handleActionsPosition = position => {
  switch (position) {
    case 'left':
      return 'flex-start';

    case 'center':
      return 'center';

    case 'right':
      return 'flex-end';

    default:
      return 'flex-start';
  }
};

StyledModalActions.propTypes = {
  children: node,
  position: string,
  className: string,
};

StyledModalActions.defaultProps = { position: 'right' };

ModalContent.propTypes = { children: node, step: number };

ModalContent.defaultProps = { step: 0 };

ModalWithSteps.propTypes = {
  title: string.isRequired,
  /** Set to true to make the modal closeable. */
  canClose: bool,
  children: node,
  showModal: bool,
  setShowModal: func.isRequired,
  /** Add this prop to display a smaller size of modal. */
  small: bool,
  /** Add this prop to display a larger size of modal. */
  large: bool,
  className: string,
  currentStep: number.isRequired,
  steps: shape([]).isRequired,
};

ModalWithSteps.defaultProps = {
  canClose: true,
  showModal: false,
};

ModalWithSteps.ModalActions = StyledModalActions;
ModalWithSteps.ModalActions.displayName = 'ModalWithSteps.ModalActions';
ModalWithSteps.ModalContent = ModalContent;
ModalWithSteps.ModalContent.displayName = 'ModalWithSteps.ModalContent';

export default ModalWithSteps;
