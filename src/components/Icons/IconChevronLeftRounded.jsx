import React from 'react';
import { string } from 'prop-types';

const IconChevronLeftRounded = ({ className, color }) => {
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
        d="M32.4142 10.5858C33.1953 11.3668 33.1953 12.6332 32.4142 13.4142L20.8284 25L32.4142 36.5858C33.1953 37.3668 33.1953 38.6332 32.4142 39.4142C31.6332 40.1953 30.3668 40.1953 29.5858 39.4142L16.5858 26.4142C15.8047 25.6332 15.8047 24.3668 16.5858 23.5858L29.5858 10.5858C30.3668 9.80474 31.6332 9.80474 32.4142 10.5858Z"
        fill={color}
      />
    </svg>
  );
};

IconChevronLeftRounded.defaultProps = {
  color: 'black',
};

IconChevronLeftRounded.propTypes = {
  color: string,
  className: string,
};

export default IconChevronLeftRounded;
