import React from 'react';
import { string, bool, node, func, shape, number } from 'prop-types';
import styled from 'styled-components';
import Drawer from 'react-drag-drawer';

import CloseIcon from '../Icons/IconActionClose';

const StyledModalActions = ({ children, position }) => {
  return <ModalActions position={position}>{children}</ModalActions>;
};

const ModalWithSteps = ({
  title,
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
  console.log(steps);
  console.log(currentStep);
  return (
    <StyledDrawer
      className={className}
      open={showModal}
      onRequestClose={canClose ? () => setShowModal(!showModal) : ''}
    >
      <ModalContainer small={small} large={large}>
        {canClose ? (
          <ModalCloser onClick={() => setShowModal(!showModal)}>
            <CloseIcon color="#505050" />
          </ModalCloser>
        ) : null}

        <ModalTitleBar>
          <ModalTitle>{title}</ModalTitle>
          <ModalSteps currentStep={currentStep}>
            {steps.map(step => (
              <StepLabel key={step.step}>
                {step.label}
                {step.step}
              </StepLabel>
            ))}
          </ModalSteps>
        </ModalTitleBar>
        <ModalContent title={title}>{children}</ModalContent>
      </ModalContainer>
    </StyledDrawer>
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
  color: #8990a3;
`;

const ModalSteps = styled.div`
  margin-left: 3rem;
  display: flex;

  & ${StepLabel} {
    font-weight: ${({ currentStep, key }) =>
      key == currentStep ? 'bold' : 'normal'};
  }
`;

const ModalTitleBar = styled.div`
  width: 100%;
  padding: 3rem 3rem 2.2rem;
  border-bottom: 1px solid #ccc;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
`;

const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 135%;
  text-align: left;
  letter-spacing: -0.03em;
`;

const ModalContent = styled.div``;

const ModalCloser = styled.a`
  position: absolute;
  top: 3rem;
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

StyledModalActions.propTypes = { children: node, position: string };

StyledModalActions.defaultProps = { position: 'right' };

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

export default ModalWithSteps;
