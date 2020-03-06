import React from 'react';
import { string } from 'prop-types';

const IconAssistanceCarFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>assistance car</title>
      <path
        d="M33.25,38.54l-6.36-5.76a.56.56,0,0,0-.72,0l-2.61,2a2,2,0,0,1-2.68-.29l-1.95-2.34A23.28,23.28,0,0,1,14.25,23l-.76-2.93a1.9,1.9,0,0,1,1.35-2.3l3.2-.88a.54.54,0,0,0,.4-.58L17.5,7.89a.54.54,0,0,0-.45-.47A16.12,16.12,0,0,0,13.46,7a10.28,10.28,0,0,0-3,1.49c-1.38,1-3.86,4.16-3.43,10.32.38,5.47,3.54,11.75,3.54,11.75s3.27,6.23,7.53,9.78c4.78,4,8.87,3.91,10.47,3.38a9.69,9.69,0,0,0,3-1.49,15.7,15.7,0,0,0,1.81-3.08A.54.54,0,0,0,33.25,38.54Z"
        fill={color}
      />
      <path d="M32.8,36.39a.05.05,0,0,1,0,0" fill={color} />
      <path
        d="M31.5,19a12.49,12.49,0,0,0-5.15,1.11c-.36.16-.7.34-1,.53a12.68,12.68,0,0,0-3.21,2.62A11.55,11.55,0,0,0,20.82,25a12.46,12.46,0,0,0-1.6,4.14s0,0,0,0a20.43,20.43,0,0,0,1.26,1.68l1.91,2.29,2.57-2a2.58,2.58,0,0,1,1.56-.53,2.53,2.53,0,0,1,1.72.66l1.38,1.25a1.5,1.5,0,0,1,0-.37,1.92,1.92,0,1,1,1.92,1.92h-.18l2.62,2.38a2.45,2.45,0,0,1,2.19-1.36h3.43s0,0,0,0h0a8.85,8.85,0,0,1-4.2,4.27,2.1,2.1,0,0,1-.2.63A12.54,12.54,0,0,1,33,43.68a2.73,2.73,0,0,1-.31.27A12.5,12.5,0,0,0,31.5,19Zm8.71,11.53h0L36,28.82a11.87,11.87,0,0,0-8.92,0L22.8,30.54h0s0,0,0,0a8.78,8.78,0,0,1,17.44,0S40.23,30.52,40.21,30.53Z"
        fill={color}
      />
    </svg>
  );
};

IconAssistanceCarFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconAssistanceCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconAssistanceCarFilled;
