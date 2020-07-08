import React from 'react';
import { string, number } from 'prop-types';

const IconIframeStroke = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>IconIframeStroke</title>
      <path
        d="M14.0564 9L13.8488 32.9571C13.8488 33.8042 14.1853 34.6167 14.7844 35.2158C15.3834 35.8148 16.1959 36.1513 17.0431 36.1513H41.0001"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14.0554L32.9571 13.8478C33.8042 13.8478 34.6167 14.1843 35.2158 14.7834C35.8148 15.3824 36.1513 16.1949 36.1513 17.0421V40.9991"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconIframeStroke.defaultProps = {
  color: 'black',
  size: 30,
};

IconIframeStroke.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconIframeStroke;
