import React from 'react';
import { string } from 'prop-types';

const IconStatusExclamation = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path d="M27 10V25.3L26.42 32H23.59L23 25.3V10H27Z" fill={color} />
      <path
        d="M25 40C26.6569 40 28 38.6569 28 37C28 35.3431 26.6569 34 25 34C23.3431 34 22 35.3431 22 37C22 38.6569 23.3431 40 25 40Z"
        fill={color}
      />
    </svg>
  );
};

IconStatusExclamation.defaultProps = {
  color: 'black',
  size: 30,
};

IconStatusExclamation.propTypes = {
  color: string,
  className: string,
};

export default IconStatusExclamation;
