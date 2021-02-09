import React, { createContext, useContext, useRef } from 'react';
import { string, bool, node, func, array, number } from 'prop-types';
import styled, { css } from 'styled-components';
import Drawer from 'react-drag-drawer';
import CloseIcon from '../Icons/IconActionClose';
import cogoToast from 'cogo-toast';

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
  visualSteps,
  title,
  stepText = 'Step',
  showToast,
  toastText,
  toastHideTime,
  onClose,
  ...otherProps
}) => {
  const isShowingToast = useRef(false);

  const handleOnRequestClose = () => {
    if (canClose) {
      setShowModal(!showModal);
      onClose();
    }

    if (showToast && !isShowingToast.current) {
      isShowingToast.current = true;
      cogoToast.warn(toastText, { hideAfter: toastHideTime });
      setTimeout(() => {
        isShowingToast.current = false;
      }, toastHideTime * 1000);
    }
  };

  return (
    <StepModalContext.Provider value={{ currentStep }}>
      <StyledDrawer open={showModal} onRequestClose={handleOnRequestClose}>
        <ModalContainer
          className={className}
          small={small}
          large={large}
          {...otherProps}
        >
          <ModalTitleBar visualSteps={visualSteps}>
            {visualSteps ? (
              <TopStepsWrapper>
                <Title>{title}</Title>
                <VisualStepsWrapper>
                  {steps.map(({ step, label }) => (
                    <StepArrow
                      key={step}
                      active={currentStep >= step}
                      fill={
                        currentStep - 1 >= step &&
                        step < steps[steps.length - 1].step
                          ? 1
                          : 0
                      }
                      first={step === 0}
                      last={step === steps[steps.length - 1].step}
                      isCurrentStep={currentStep === step}
                      isPreviousStep={currentStep - 1 === step}
                    >
                      <div>
                        <StepArrowLabel>{label}</StepArrowLabel>
                      </div>
                    </StepArrow>
                  ))}
                </VisualStepsWrapper>
              </TopStepsWrapper>
            ) : (
              <ModalTitle>
                {stepText} {currentStep + 1}/{steps.length}
                <StepsWrapper>
                  {steps.map(
                    ({ step, label }) =>
                      step === currentStep && (
                        <StepLabel key={step}>{label}</StepLabel>
                      ),
                  )}
                </StepsWrapper>
              </ModalTitle>
            )}
            {canClose ? (
              <ModalCloser onClick={() => setShowModal(!showModal)}>
                <CloseIcon color="#505050" />
              </ModalCloser>
            ) : null}
          </ModalTitleBar>
          <div>{children}</div>
        </ModalContainer>
      </StyledDrawer>
    </StepModalContext.Provider>
  );
};

const StepArrowLabel = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 10px;
  color: #8990a3;
  z-index: 1;
  cursor: ${({ pointerEnabled }) => (pointerEnabled ? 'pointer' : 'auto')};
  white-space: nowrap;
  font-weight: ${({ isCurrentStep }) => (isCurrentStep ? 700 : 500)};
`;

const TopStepsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 2rem;
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const StepArrow = styled.div`
  display: flex;
  font-size: 1.3rem;
  opacity: 0.5;
  height: 32px;
  ${({ active }) =>
    active
      ? css`
          > * {
            background-color: rgba(240,241,243,0.5);
          }
          opacity: 1;

          /* The following :before and :after pseudo selectors are used to
          create the triangle effect when visualSteps boolean is turnedo n*/

          /* --- CURRENT STEP --- */   
          /* Color background grey */   
          /* Draw grey triangle after square */          
          ${({ isCurrentStep }) =>
            isCurrentStep &&
            css`
              > * {
                background-color: rgba(240, 241, 243, 1);
              }
              &:after {
                content: '';
                display: inline-block;
                border-top: 16px solid transparent;
                border-bottom: 16px solid transparent;
                border-left: 16px solid rgba(240, 241, 243, 1);
              }
            `}

          /* --- NOT FIRST AND CURRENT STEP --- */   
          /* Draw LIGHT grey triangle before square */     
          ${({ first, isCurrentStep }) =>
            !first &&
            isCurrentStep &&
            css`
              &:before {
                content: '';
                display: inline-block;
                border-top: 16px solid rgba(240, 241, 243, 1);
                border-bottom: 16px solid rgba(240, 241, 243, 1);
                border-left: 16px solid rgba(240, 241, 243, 0.5);
              }
            `}

            ${({ first }) =>
              first &&
              css`
                * {
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                }
              `}

              ${({ last, isCurrentStep }) =>
                last &&
                !isCurrentStep &&
                css`
                  &:after {
                    content: '';
                    display: inline-block;
                    border-top: 16px solid transparent;
                    border-bottom: 16px solid transparent;
                    border-left: 16px solid rgba(240, 241, 243, 0.5);
                  }
                `}

          /* --- FILL AND NOT PREVIOUS STEP --- */   
          /* Draw LIGHT grey triangle after square */     
          ${({ fill, isPreviousStep }) =>
            fill &&
            !isPreviousStep &&
            css`
              &:after {
                content: '';
                display: inline-block;
                border-top: 0 solid transparent;
                border-bottom: 0 solid transparent;
                border-left: 16px solid rgba(240, 241, 243, 0.5);
              }
            `}
        `
      : css`
          /* --- NOT ACTIVE --- */
          /* If step has not been passed yet */
          &:after {
            content: '';
            display: inline-block;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            border-left: 16px solid transparent;
          }
        `}
`;

const Title = styled.h2`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2rem;
`;

const VisualStepsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

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
  height: ${({ visualSteps }) => (visualSteps ? '8.5rem' : '6.5rem')};
  padding-left: 2.2rem;
  border-bottom: 1px solid #f0f1f3;
  display: flex;
  align-items: center;
`;

const ModalTitle = styled.h1`
  flex-grow: 1;
  color: #8990a3;
  display: flex;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 135%;
  text-align: left;
  font-weight: 600;
`;

const ModalCloser = styled.a`
  cursor: pointer;
  padding-right: 3rem;

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
  background-color: #fbfbfb;
  border-top: 1px solid #f0f1f3;

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
  steps: array.isRequired,
  visualSteps: bool,
  /** Step text */
  stepText: string.isRequired,
  /** If a toast should be shown when trying to close the modal */
  showToast: bool,
  /** Text for the toast if shown */
  toastText: string,
  /** Time for toast to hide in seconds*/
  toastHideTime: number,
  /** FUnction to execute if closed */
  onClose: func,
};

ModalWithSteps.defaultProps = {
  canClose: true,
  showModal: false,
  toastHideTime: 5,
};

ModalWithSteps.ModalActions = StyledModalActions;
ModalWithSteps.ModalActions.displayName = 'ModalWithSteps.ModalActions';
ModalWithSteps.ModalContent = ModalContent;
ModalWithSteps.ModalContent.displayName = 'ModalWithSteps.ModalContent';

export default ModalWithSteps;
