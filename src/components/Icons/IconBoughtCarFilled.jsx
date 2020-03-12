import React from 'react';
import { string } from 'prop-types';

const IconBoughtCarFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>bought a car</title>
      <path
        d="M30.28,27.71a1,1,0,0,1-1.41,0l-3.5-3.5a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l2.79,2.8L34,21.13A6,6,0,1,0,35.45,25a5.77,5.77,0,0,0-.38-2.08Z"
        fill={color}
      />
      <path
        d="M16.45,13,10,24H5.45a3.5,3.5,0,0,0,0,7H7.92a3.44,3.44,0,0,0,2.47-1l1.24-1.23L16.45,37H46V13ZM9,28.56A1.5,1.5,0,0,1,7.92,29H5.45a1.5,1.5,0,0,1,0-3H10l.55.95ZM14,27a2.24,2.24,0,0,1-.51-.07l1.22-1.22A1,1,0,0,0,14,24H12.23A2,2,0,1,1,14,27Zm24.21-7.17L36.59,21.4a7.9,7.9,0,0,1,.86,3.6,8,8,0,1,1-2-5.29l1.29-1.29a1,1,0,0,1,1.42,0A1,1,0,0,1,38.16,19.83Z"
        fill={color}
      />
    </svg>
  );
};

IconBoughtCarFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconBoughtCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconBoughtCarFilled;
