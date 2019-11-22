import React from 'react';
import { string } from 'prop-types';

const IconWebFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>IconWebFilled</title>
      <path
        d="M27.12,28.43V22.89a1.05,1.05,0,1,0,0-2.1H22.88a1.05,1.05,0,1,0,0,2.1v5.54a8.43,8.43,0,0,0-6.38,8.15V44a1.06,1.06,0,0,0,1.06,1H32.44a1.06,1.06,0,0,0,1.06-1V36.58A8.43,8.43,0,0,0,27.12,28.43Z"
        fill={color}
      />
      <path
        d="M20.75,27.61V24.19a3.13,3.13,0,0,1-1.06-2.35,3.19,3.19,0,0,1,3.19-3.16h4.24a3.19,3.19,0,0,1,3.19,3.16,3.13,3.13,0,0,1-1.06,2.35v3.38c2-1.06,4.18-3.31,4.18-7.91,0-4.1-4.18-6.83-4.18-6.83s0,1.23,0,1.75a1.5,1.5,0,0,1-1.54,1.49c-1.09,0-1.62-1.06-1.62-2.62s.92-3.17,0-5.29C24.73,5.18,20.75,5,20.75,5a7.89,7.89,0,0,1,1,3.63c0,2.32-1.11,3.59-3.05,5.76a7.6,7.6,0,0,0-2.21,5.27C16.5,24.33,18.78,26.56,20.75,27.61Z"
        fill={color}
      />
    </svg>
  );
};

IconWebFilled.defaultProps = {
  color: 'black',
};

IconWebFilled.propTypes = {
  color: string,
  className: string,
};

export default IconWebFilled;
