import React from 'react';
import { string } from 'prop-types';

const IconConsumerFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>consumer</title>
      <circle cx="25" cy="8" r="4" fill={color} />
      <path
        d="M29,13H21a5,5,0,0,0-5,5v9.88A2.08,2.08,0,0,0,17.84,30,1.91,1.91,0,0,0,19,29.72V43.36A2.6,2.6,0,0,0,21.24,46,2.5,2.5,0,0,0,24,43.5V33a1,1,0,0,1,2,0V43.36A2.6,2.6,0,0,0,28.24,46,2.5,2.5,0,0,0,31,43.5V29.72a1.91,1.91,0,0,0,1.16.27A2.08,2.08,0,0,0,34,27.88V18A5,5,0,0,0,29,13Z"
        fill={color}
      />
    </svg>
  );
};

IconConsumerFilled.defaultProps = {
  color: 'black',
};

IconConsumerFilled.propTypes = {
  color: string,
  className: string,
};

export default IconConsumerFilled;
