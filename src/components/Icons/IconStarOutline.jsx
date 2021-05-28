import React from 'react';
import { string } from 'prop-types';

const IconStarOutline = ({ className, color }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 4.10925L12.5765 8.31597L17.22 8.99469L13.86 12.2673L14.653 16.8907L10.5 14.7067L6.34707 16.8907L7.14003 12.2673L3.78003 8.99469L8.42355 8.31597L10.5 4.10925Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconStarOutline.defaultProps = {
  color: 'black',
};

IconStarOutline.propTypes = {
  color: string,
  className: string,
};

export default IconStarOutline;
