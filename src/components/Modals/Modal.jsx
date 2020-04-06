import React, { useState, useEffect } from 'react';
import { string, bool, node, func } from 'prop-types';
import styled from 'styled-components';
import Drawer from 'react-drag-drawer';

import CloseIcon from '../Icons/IconActionClose';

const StyledModalActions = ({ children, position }) => {
  return <ModalActions position={position}>{children}</ModalActions>;
};

const Modal = ({
  title,
  canClose,
  children,
  showModal,
  customCloseHandler,
  large,
}) => {
  const [Open, setOpen] = useState(showModal);

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={Open}
      onRequestClose={
        customCloseHandler ? customCloseHandler : canClose ? closeHandler : ''
      }
    >
      <ModalContainer large={large}>
        {canClose || customCloseHandler ? (
          <ModalCloser
            onClick={customCloseHandler ? customCloseHandler : closeHandler}
          >
            <CloseIcon color="#505050" />
          </ModalCloser>
        ) : (
          ''
        )}
        {title ? <ModalTitleBar>{title}</ModalTitleBar> : ''}

        <ModalContent title={title}>{children}</ModalContent>
      </ModalContainer>
    </Drawer>
  );
};

const ModalContainer = styled.div`
  background: white;
  width: ${({ large }) => (large ? '100rem' : '55rem')};
  border: 1px solid #ccc;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  font-family: ${({ theme }) => theme.font};

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 3rem;
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
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 135%;
  text-align: center;
  letter-spacing: -0.03em;
`;

const ModalContent = styled.div`
  padding: ${({ title }) => (title ? '30px' : '45px 30px 30px')};
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
  canClose: bool.isRequired,
  /** Content of the modal */
  children: node,
  /** Wether or not to show the modal. Set this to true on load to show the modal immediately. */
  showModal: bool.isRequired,
  /** Function to pass which handles the closing of the modal. */
  customCloseHandler: func,
  /** Set to true to have a larger modal */
  large: bool,
};

Modal.defaultProps = {
  canClose: true,
};

Modal.ModalActions = StyledModalActions;
Modal.ModalActions.displayName = 'Modal.ModalActions';

export default Modal;
