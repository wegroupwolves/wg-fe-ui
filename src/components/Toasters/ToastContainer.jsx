import React from 'react';
import { ToastContainer as BaseToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ToastContainer = ({ ...props }) => {
  return (
    <StyledToastContainer
      hideProgressBar
      autoClose={10000}
      closeButton={false}
      {...props}
    />
  );
};

const StyledToastContainer = styled(BaseToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  &.Toastify__toast-container {
    width: 45rem;
  }
  .toast {
    border: 0.5px solid #ececec;
    border-radius: 5px;
    box-shadow: none;
    filter: drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.05));
  }
`;

export default ToastContainer;
