import React from 'react';
import { string, number } from 'prop-types';

const IconPopupStroke = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>IconPopupStroke</title>
      <path
        d="M38.0909 13H11.9091C10.3024 13 9 14.3024 9 15.9091V33.3636C9 34.9703 10.3024 36.2727 11.9091 36.2727H38.0909C39.6976 36.2727 41 34.9703 41 33.3636V15.9091C41 14.3024 39.6976 13 38.0909 13Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21.7278H41"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconPopupStroke.defaultProps = {
  color: 'black',
  size: 30,
};

IconPopupStroke.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPopupStroke;
