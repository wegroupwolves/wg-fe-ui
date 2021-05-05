import React from 'react';
import { string } from 'prop-types';

const IconFullscreen = ({ className, color }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 15H32V11H42V21H38V15Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 35L18 35L18 39L8 39L8 29L12 29L12 35Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 35L38 29L42 29L42 39L32 39L32 35L38 35Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15L12 21L8 21L8 11L18 11L18 15L12 15Z"
        fill={color}
      />
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
