import React from 'react';
import { string } from 'prop-types';

const IconScorchDamageFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>scorch damage</title>
      <path
        d="M26,8a3,3,0,0,1,3,3V28.59l.89.59a7,7,0,1,1-7.78,0l.89-.59V11a3,3,0,0,1,3-3m0-2a5,5,0,0,0-5,5V27.52a9,9,0,1,0,10,0V11a5,5,0,0,0-5-5Z"
        fill={color}
      />
      <path d="M27,30.1V12H25V30.1a5,5,0,1,0,2,0Z" fill={color} />
      <path
        d="M15.21,32.84a7.19,7.19,0,0,1-2.88-1.17C10.67,30.5,9,28.33,9,24.33s4-6.66,4-6.66v2A1.3,1.3,0,0,0,14.33,21c1.77,0,1.34-2.67,1.34-4a11.34,11.34,0,0,1,.66-4.67A6,6,0,0,1,19.1,9.85,6.23,6.23,0,0,0,19,11V26.52A11,11,0,0,0,15.21,32.84Z"
        fill={color}
      />
    </svg>
  );
};

IconScorchDamageFilled.defaultProps = {
  color: 'black',
};

IconScorchDamageFilled.propTypes = {
  color: string,
  className: string,
};

export default IconScorchDamageFilled;
