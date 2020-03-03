import React from 'react';
import { string } from 'prop-types';

const IconStatusCheck = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Check</title>
      <path
        d="M25.13 36.95L12.59 24.41L15.41 21.59L24.87 31.05L39.47 13.71L42.53 16.29L25.13 36.95Z"
        fill={color}
      />
    </svg>
  );
};

IconStatusCheck.defaultProps = {
  color: 'black',
};

IconStatusCheck.propTypes = {
  color: string,
  className: string,
};

export default IconStatusCheck;
