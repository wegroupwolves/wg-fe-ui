import React from 'react';
import { string, number, oneOfType } from 'prop-types';

const IconAccidentFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <path
        d="M31.73,29.39a1.27,1.27,0,0,0-.88-.75L29,28.24,14.45,25.09a1.23,1.23,0,0,1-.73-.48l-3.33-4.48a.78.78,0,0,0-.39-.25l-2.88-.52c-.83-.15-1.66-.29-2.5-.4a.54.54,0,0,0-.62.55V38.35a.54.54,0,0,0,.55.54H15.27a5.61,5.61,0,0,0,11.17,0h4a1.26,1.26,0,0,0,1.23-1,41,41,0,0,0,1-5.34A12.68,12.68,0,0,0,31.73,29.39Zm-7.81,9.5a3.12,3.12,0,0,1-6.13,0,4.21,4.21,0,0,1-.05-.62,3.12,3.12,0,1,1,6.24,0A3.18,3.18,0,0,1,23.92,38.89Z"
        fill={color}
      />
      <path
        d="M33.4,27.77a3.48,3.48,0,0,1,.43.75A12,12,0,0,1,35,32.58a38.15,38.15,0,0,1-1.08,5.88,2,2,0,0,1-.14.43,5.61,5.61,0,0,0,11.17,0h.56a.5.5,0,0,0,.5-.53V25.63a.51.51,0,0,0-.61-.49Zm9,11.12a3.12,3.12,0,0,1-6.13,0,4.21,4.21,0,0,1,0-.62,3.12,3.12,0,1,1,6.24,0A3.18,3.18,0,0,1,42.42,38.89Z"
        fill={color}
      />
      <path
        d="M36.76,24a1,1,0,0,1-.52-.14,1.08,1.08,0,0,1-.39-1.46l2.29-4.09-4,2.34A1,1,0,0,1,32.63,20l-1.9-5.82L29.41,21a1.06,1.06,0,0,1-.6.76,1,1,0,0,1-.95,0l-3.48-2,1.73,2.65a1.08,1.08,0,0,1-.29,1.48,1,1,0,0,1-1.45-.29l-4.19-6.43a1.1,1.1,0,0,1,.1-1.33,1.05,1.05,0,0,1,1.29-.2l6.07,3.55,1.81-9.26a1.05,1.05,0,0,1,1-.85,1,1,0,0,1,1.06.73l2.74,8.4,6.22-3.64a1,1,0,0,1,1.26.17,1.08,1.08,0,0,1,.17,1.29l-4.19,7.5A1,1,0,0,1,36.76,24Z"
        fill={color}
      />
    </svg>
  );
};

IconAccidentFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconAccidentFilled.propTypes = {
  color: string,
  className: string,
  size: oneOfType([string, number]),
};

export default IconAccidentFilled;
