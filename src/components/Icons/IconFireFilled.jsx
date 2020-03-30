import React from 'react';
import { string, number } from 'prop-types';

const IconFireFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconFireFilled</title>
      <path
        d="M18.51,7s.46,3.56.48,5.78c0,3.66-.6,7.32-3.59,10.76A12.28,12.28,0,0,0,12,31.89C12,44.87,22.84,46,22.84,46a14.91,14.91,0,0,1-2.17-7.57,11.92,11.92,0,0,1,3.25-7.57s-1.08,6.49,2.16,6.49c1.47,0,2.17-2.17,2.17-2.17a5.62,5.62,0,0,1,1.08,3.25c0,5.22-2.17,7.57-2.17,7.57S38,44.87,38,31.89c0-6.5-6.49-10.82-6.49-10.82v3.24a2.12,2.12,0,0,1-2.16,2.17c-2.86,0-2.17-4.33-2.17-6.5a18.25,18.25,0,0,0-1.08-7.57C24.82,9.23,18.51,7,18.51,7Z"
        fill={color}
      />
    </svg>
  );
};

IconFireFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconFireFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconFireFilled;
