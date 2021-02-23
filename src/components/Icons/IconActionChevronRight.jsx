import React from 'react';
import { string } from 'prop-types';

const IconActionChevronRight = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      
      <path
        d="M18.5 14.5L31.5 27.5L18.5 40.5"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

IconActionChevronRight.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionChevronRight.propTypes = {
  color: string,
  className: string,
};

export default IconActionChevronRight;
