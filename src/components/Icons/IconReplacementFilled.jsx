import React from 'react';
import { string } from 'prop-types';

const IconReplacementFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M10 10V22C10 22.6 10.4 23 11 23H25C25.6 23 26 22.6 26 22V10C26 9.4 25.6 9 25 9H11C10.4 9 10 9.4 10 10ZM22 16H14C13.5 16 13 15.5 13 15C13 14.5 13.5 14 14 14H22C22.5 14 23 14.5 23 15C23 15.5 22.5 16 22 16Z"
        fill={color}
      />
      <path
        d="M18.6 31.2L21 32V35L18.6 35.8C18.4 35.9 18.4 36.1 18.6 36.2L21 37V41C21 42.7 19.7 44 18 44C16.3 44 15 42.7 15 41V24H21V30L18.6 30.8C18.4 30.9 18.4 31.1 18.6 31.2Z"
        fill={color}
      />
      <path
        d="M42.4 35.8L28.6 42C28.1 42.2 27.5 42 27.2 41.5L23 31.6V25H25C26.7 25 28 23.6 28 22V10C28 8.3 26.7 7 25 7H20.9C21.1 6.9 21.2 6.8 21.4 6.8C22.5 6.2 23.7 6 24.9 6C28.2 6 31.3 7.9 32.7 11L42.9 34.4C43.1 35 42.9 35.6 42.4 35.8Z"
        fill={color}
      />
    </svg>
  );
};

IconReplacementFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconReplacementFilled.propTypes = {
  color: string,
  className: string,
};

export default IconReplacementFilled;
