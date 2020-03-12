import React from 'react';
import { string } from 'prop-types';

const IconPersonalLiabilityFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>personal liability</title>
      <path d="M37,17a3,3,0,1,0-3-3A3,3,0,0,0,37,17Z" fill={color} />
      <path
        d="M35.48,30.87a3.44,3.44,0,0,1-.28.65L43,30.4V21a3,3,0,0,0-3-3H34a3,3,0,0,0-3,3v3.34l3.12,2.27A3.77,3.77,0,0,1,35.48,30.87Z"
        fill={color}
      />
      <path
        d="M43.9,32.32l-.3,0-.6.09L32,34l-1-.43-5.42-2.32A1,1,0,0,1,26,29.42a1.06,1.06,0,0,1,.34.06L31,31.25l.26.1a1.74,1.74,0,0,0,.63.11,1.78,1.78,0,0,0,1-3.23L31,26.82l-4.71-3.43a7.58,7.58,0,0,0-7.1-1L15.52,23.8a3,3,0,0,1-1.08.2H9V22.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V34h5.59a2.45,2.45,0,0,1,.8.14L31,39.82A3.18,3.18,0,0,0,32,40a3.06,3.06,0,0,0,1-.16l11.47-3.39a2.11,2.11,0,0,0-.59-4.13Z"
        fill={color}
      />
    </svg>
  );
};

IconPersonalLiabilityFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconPersonalLiabilityFilled.propTypes = {
  color: string,
  className: string,
};

export default IconPersonalLiabilityFilled;
