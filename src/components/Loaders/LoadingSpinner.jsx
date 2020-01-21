import React from 'react';
import styled, { css } from 'styled-components';
import { boolean, string } from 'prop-types';

const LoadingSpinner = ({ isAbsolute, className }) => {
  return (
    <Spinner
      id="loadingSpinner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      className={className}
      isAbsolute={isAbsolute}
    >
      <defs>
        <path id="a" d="M0 0h40v40H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <Circle cx="40" cy="40" r="38" opacity="0.1" strokeWidth="2.817" />
        <g transform="translate(40)">
          <mask id="b" fill="#fff">
            <use href="#a" />
          </mask>
          <Circle cy="40" r="38" strokeWidth="2.817" mask="url(#b)" />
        </g>
      </g>
    </Spinner>
  );
};

const Spinner = styled.svg`
  opacity: 1;
  height: 80px;
  width: 80px;
  min-width: 80px;
  min-height: 80px;
  transform-origin: 40px 40px 40px;
  transition: 0.5s;
  animation: spinnerAnimation 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67);

  ${({ isAbsolute }) =>
    isAbsolute
      ? css`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        `
      : css`
          align-self: center;
        `};
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  stroke: ${({ theme }) => theme.brand.primary};
`;

LoadingSpinner.defaultProps = {
  isAbsolute: false,
};

LoadingSpinner.propTypes = {
  className: string,
  isAbsolute: boolean,
};

export default LoadingSpinner;
