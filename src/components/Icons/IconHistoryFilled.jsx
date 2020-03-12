import React from 'react';
import { string } from 'prop-types';

const IconHistoryFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>history</title>
      <path
        d="M29,28H24a2,2,0,0,1-2-2V21a2,2,0,0,1,4,0v3h3a2,2,0,0,1,0,4Z"
        fill={color}
      />
      <path
        d="M24.27,10A15.11,15.11,0,0,0,10,24.34,15,15,0,0,0,14.84,36h.05A2,2,0,0,0,15,40h5a2,2,0,0,0,2-2V33a2,2,0,0,0-4,0v.28a10.84,10.84,0,1,1,8.76,2.44,2,2,0,0,0-1.76,2v.13a2,2,0,0,0,2.34,2A15,15,0,0,0,24.27,10Z"
        fill={color}
      />
    </svg>
  );
};

IconHistoryFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconHistoryFilled.propTypes = {
  color: string,
  className: string,
};

export default IconHistoryFilled;
