import React from 'react';
import { string } from 'prop-types';

const IconIncomeFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>income</title>
      <path
        d="M35.89,20H14.11A6.75,6.75,0,0,1,10,24.2v4.61A6.75,6.75,0,0,1,14.11,33H35.89A6.75,6.75,0,0,1,40,28.8V24.2A6.75,6.75,0,0,1,35.89,20ZM25,30a4,4,0,1,1,4-4A4,4,0,0,1,25,30Z"
        fill={color}
      />
      <path
        d="M4.88,15V38H45.12V15ZM42,30.36A4.78,4.78,0,0,0,37.47,35H12.53A4.78,4.78,0,0,0,8,30.36V22.64A4.78,4.78,0,0,0,12.53,18H37.47A4.78,4.78,0,0,0,42,22.64Z"
        fill={color}
      />
    </svg>
  );
};

IconIncomeFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconIncomeFilled.propTypes = {
  color: string,
  className: string,
};

export default IconIncomeFilled;
