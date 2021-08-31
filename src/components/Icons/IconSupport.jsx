import React from 'react';
import { string } from 'prop-types';

const IconFullscreen = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M25 10.6c-7.953 0-14.4 6.447-14.4 14.4S17.047 39.4 25 39.4 39.4 32.953 39.4 25 32.953 10.6 25 10.6zM7 25c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18S7 34.941 7 25z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25 32.2a1.8 1.8 0 011.8 1.8v.018a1.8 1.8 0 01-3.6 0V34a1.8 1.8 0 011.8-1.8zM22.255 14.82a6.48 6.48 0 115.142 11.878.9.9 0 00-.6.9 1.8 1.8 0 11-3.594.204 4.5 4.5 0 012.971-4.49 2.881 2.881 0 10-3.34-4.424 1.8 1.8 0 01-2.868-2.176 6.479 6.479 0 012.289-1.891z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

IconFullscreen.defaultProps = {
  color: 'black',
};

IconFullscreen.propTypes = {
  color: string,
  className: string,
};

export default IconFullscreen;
