import React from 'react';
import { string } from 'prop-types';

const IconPropertyFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M39.56,18.56,36,16.17V10.81a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v1.34l-4.45-3a1,1,0,0,0-1.1,0l-14,9.39a1,1,0,0,0-.45.84V40a1,1,0,0,0,1,1h6V31a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1V41H39a1,1,0,0,0,1-1V19.4A1,1,0,0,0,39.56,18.56Z"
        fill={color}
      />
    </svg>
  );
};

IconPropertyFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconPropertyFilled.propTypes = {
  color: string,
  className: string,
};

export default IconPropertyFilled;
