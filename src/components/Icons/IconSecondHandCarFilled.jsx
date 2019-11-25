import React from 'react';
import { string } from 'prop-types';

const IconSecondHandCarFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>2nd handed car</title>
      <path
        d="M16.45,13,10,24H5.45a3.5,3.5,0,0,0,0,7H7.91a3.45,3.45,0,0,0,2.48-1l1.24-1.23L16.45,37H46V13ZM9,28.56A1.52,1.52,0,0,1,7.91,29H5.45a1.5,1.5,0,0,1,0-3H10l.56.95ZM14,27a2.09,2.09,0,0,1-.51-.07l1.22-1.22a1,1,0,0,0,.21-1.09A1,1,0,0,0,14,24H12.23A2,2,0,1,1,14,27Zm10-.16A1,1,0,0,1,23,26,7.54,7.54,0,0,1,29,17.62a7.39,7.39,0,0,1,4.78.62V17.7a.71.71,0,0,1,1.41,0V21a.24.24,0,0,1-.19.21H31.62a.71.71,0,0,1,0-1.41h1.06a5.61,5.61,0,0,0-7.82,4.56,5.25,5.25,0,0,0,0,1.43A.92.92,0,0,1,24,26.84Zm6.49,5.63a7.34,7.34,0,0,1-3.75-1v.78a.71.71,0,1,1-1.41,0V29a.24.24,0,0,1,.24-.24h3.28a.71.71,0,0,1,0,1.41h-.59a5.63,5.63,0,0,0,7.79-6,.92.92,0,0,1,.92-1.05,1,1,0,0,1,.94.81A9.1,9.1,0,0,1,38,24.92,7.57,7.57,0,0,1,30.45,32.47Z"
        fill={color}
      />
    </svg>
  );
};

IconSecondHandCarFilled.defaultProps = {
  color: 'black',
};

IconSecondHandCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconSecondHandCarFilled;
