import React from 'react';
import { number, string } from 'prop-types';

const IconPopup = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="25"
      height="25"
      viewBox="0 0 38 30"
      fill="none"
    >
      <path
        d="M31.0909 2H4.90909C3.30244 2 2 3.30244 2 4.90909V22.3636C2 23.9703 3.30244 25.2727 4.90909 25.2727H31.0909C32.6976 25.2727 34 23.9703 34 22.3636V4.90909C34 3.30244 32.6976 2 31.0909 2Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.728H34"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconPopup.defaultProps = {
  color: 'black',
  size: 25,
};

IconPopup.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPopup;
