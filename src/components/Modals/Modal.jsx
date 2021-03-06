import React, { useRef } from 'react';
import { string, bool, node, func, number, object } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Drawer from 'react-drag-drawer';

import CloseIcon from '../Icons/IconActionClose';
import cogoToast from 'cogo-toast';

const StyledModalActions = ({ children, position }) => {
  return <ModalActions position={position}>{children}</ModalActions>;
};

const Modal = ({
  title,
  canClose,
  children,
  showModal,
  setShowModal,
  small,
  large,
  className,
  width,
  showToast,
  toastText,
  toastHideTime,
  drawerProps,
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
      cogoToast.warn(toastText, {
        hideAfter: toastHideTime,
      });
      setTimeout(() => {
        isShowingToast.current = false;
      }, toastHideTime * 1000);
    }
  };

  return (
    <>
      <GlobalStyle isModalOpen={showModal} />
      <StyledDrawer
        open={showModal}
        onRequestClose={handleOnRequestClose}
        {...drawerProps}
        containerElementClass="ModalDrawerContainer"
      >
        <ModalContainer
          {...otherProps}
          className={className}
          small={small}
          large={large}
          width={width}
        >
          {canClose ? (
            <ModalCloser
              onClick={() => {
                setShowModal(!showModal);
                onClose();
              }}
            >
              <CloseIcon color="#505050" />
            </ModalCloser>
          ) : (
            ''
          )}
          {title ? <ModalTitleBar>{title}</ModalTitleBar> : ''}

          <ModalContent modalTitle={title}>{children}</ModalContent>
        </ModalContainer>
      </StyledDrawer>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
   /* This will prevent scrolling in the background when the modal is open */
   body {
    overflow: ${({ isModalOpen }) => isModalOpen && 'hidden'};
  }
.ModalDrawerContainer {
  /* important addd to overwrite package css */
  overflow: hidden !important; /* stylelint-disable-line */
}
`;

const StyledDrawer = styled(Drawer)`
  z-index: 9999999;
`;

const ModalContainer = styled.div`
  background: white;
  width: ${({ small, large, width }) =>
    width ? width : small ? '50rem' : large ? '100rem' : '60rem'};
  border: 1px solid #ccc;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  max-height: 90vh;
  flex-direction: column;
  height: 100%;
  /* overflow: hidden; */
  position: relative;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.font};

  @media screen and (max-width: 950px) {
    width: calc(100vw - 3rem);
  }
`;

const ModalTitleBar = styled.div`
  width: 100%;
  padding: 30px 60px 22px;
  border-bottom: 1px solid #ccc;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 120%;
  text-align: center;
`;

const ModalContent = styled.div`
  padding: ${({ modalTitle }) => (modalTitle ? '30px' : '45px 30px 30px')};
`;

const ModalCloser = styled.a`
  position: absolute;
  top: 30px;
  right: 30px;
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
  margin-top: 40px;
  align-items: center;

  > button {
    margin: 0 10px;

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

Modal.propTypes = {
  /** A title to be displayed at the top of the modal. */
  title: string,
  /** Set to true to make the modal closeable. */
  canClose: bool,
  children: node,
  showModal: bool,
  setShowModal: func.isRequired,
  /** Add this prop to display a smaller size of modal. */
  small: bool,
  /** Add this prop to display a larger size of modal. */
  large: bool,
  /** Pass a custom width to modal */
  width: string,
  /** If a toast should be shown when trying to close the modal */
  showToast: bool,
  /** Text for the toast if shown */
  toastText: string,
  /** Time for toast to hide in seconds*/
  toastHideTime: number,
  className: string,
  /** FUnction to execute if closed */
  onClose: func,
  drawerProps: object,
};

Modal.defaultProps = {
  onClose: () => {},
  canClose: true,
  showModal: false,
  toastHideTime: 5,
};

Modal.ModalActions = StyledModalActions;
Modal.ModalActions.displayName = 'Modal.ModalActions';

export default Modal;
