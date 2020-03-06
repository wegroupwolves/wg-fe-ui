import React from 'react';
import { string, int } from 'prop-types';

const IconTheftFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Theft</title>
      <path
        d="M39,20.88l-2,4.33-1.35-2.29-3.5,2.66a2.2,2.2,0,0,1-3.08-.43A1.42,1.42,0,0,1,29,25L27.23,27.7l3.52,2A2.49,2.49,0,0,1,32,32h0v9.5a2.5,2.5,0,0,1-5,0V33.34l-4.61-2.66a2.74,2.74,0,0,1-1-3.73h0a5.88,5.88,0,0,0,.59-.53l2.85-2.85a7,7,0,0,1,1.79-1.27,6.55,6.55,0,0,1,5.06-.36,1,1,0,0,0,.64-1.9,8.73,8.73,0,0,0-8.9,2.12L20.57,25A6.67,6.67,0,0,1,18,26.6l-.54.18c-5.63.93-8.74-5.72-4.43-10.89,3.38-4.07,8-5,13-3,3.83,1.53,7.73,6,7.73,6a1.71,1.71,0,0,1,2-.22,2.49,2.49,0,0,1,1.39,2.18,1.62,1.62,0,0,1-.09.38Z"
        fill={color}
      />
      <path d="M34,16a4,4,0,1,0-4-4A3.94,3.94,0,0,0,34,16Z" fill={color} />
      <path
        d="M21.39,32.41l1.2.69L21,36.7A2.2,2.2,0,0,1,19,38a2.08,2.08,0,0,1-.88-.19l-7.61-3.4a2.5,2.5,0,0,1-1.06-3.67,2.58,2.58,0,0,1,3.2-.85l5,2.22,1.48-3.3a4,4,0,0,0,.13.74A4.67,4.67,0,0,0,21.39,32.41Z"
        fill={color}
      />
    </svg>
  );
};

IconTheftFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconTheftFilled.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default IconTheftFilled;
