import React from 'react';
import { string } from 'prop-types';

const IconLookingForCarFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>looking for a car</title>
      <path
        d="M16.57,13,10.15,24H5.57a3.5,3.5,0,0,0,0,7H8a3.45,3.45,0,0,0,2.48-1l1.24-1.23L16.57,37h29.5V13ZM9.1,28.56A1.52,1.52,0,0,1,8,29H5.57a1.5,1.5,0,0,1,0-3h4.58l.56.95Zm5-1.56a2.09,2.09,0,0,1-.51-.07l1.22-1.22A1,1,0,0,0,15,24.62a1,1,0,0,0-.92-.62H12.35a2,2,0,1,1,1.72,3Zm24.56-2.94a5.7,5.7,0,0,1-4.27,4.3,5.8,5.8,0,0,1-4.6-.87l-5.2,5.2a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.48l5.2-5.2a5.76,5.76,0,1,1,10.35-2Zm-6.32-4.9a3.67,3.67,0,1,0,1.43,7.19,3.67,3.67,0,0,0-1.43-7.19Z"
        fill={color}
      />
    </svg>
  );
};

IconLookingForCarFilled.defaultProps = {
  color: 'black',
};

IconLookingForCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconLookingForCarFilled;
