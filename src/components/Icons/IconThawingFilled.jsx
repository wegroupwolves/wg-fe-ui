import React from 'react';
import { string } from 'prop-types';

const IconThawingFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>thawing</title>
      <path
        d="M23,37.18A5.66,5.66,0,0,1,17.5,43,5.66,5.66,0,0,1,12,37.18C12,34,16.12,27,17.5,27S23,34,23,37.18Z"
        fill={color}
      />
      <path
        d="M37,12H15a1,1,0,0,0-1,1V27.53C15.85,25,17,25,17.5,25s2.26,0,5,4.91A20.83,20.83,0,0,1,24.89,36H37a1,1,0,0,0,1-1V13A1,1,0,0,0,37,12Zm-1,7a1,1,0,0,1-2,0V16.5a.5.5,0,0,0-.5-.5H31a1,1,0,0,1,0-2h4a1,1,0,0,1,1,1Z"
        fill={color}
      />
    </svg>
  );
};

IconThawingFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconThawingFilled.propTypes = {
  color: string,
  className: string,
};

export default IconThawingFilled;
