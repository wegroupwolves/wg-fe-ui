import React from 'react';
import { string } from 'prop-types';

const IconCracksFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>cracks</title>
      <path
        d="M39.56,18.56,36,16.17V10.81a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v1.34l-4.45-3a1,1,0,0,0-1.1,0l-14,9.39a1,1,0,0,0-.45.84V40a1,1,0,0,0,1,1H24.34a.5.5,0,0,0,.48-.64l-1.77-6.17a.5.5,0,0,1,0-.36l2.84-5.69a.49.49,0,0,0,.05-.29l-.84-6.69a.2.2,0,0,1,.38-.12l3.41,6.81a.56.56,0,0,1,0,.31L28,33.8a.49.49,0,0,0,.09.37l4.73,6.62a.51.51,0,0,0,.41.21H39a1,1,0,0,0,1-1V19.4A1,1,0,0,0,39.56,18.56Z"
        fill={color}
      />
    </svg>
  );
};

IconCracksFilled.defaultProps = {
  color: 'black',
};

IconCracksFilled.propTypes = {
  color: string,
  className: string,
};

export default IconCracksFilled;
