import React from 'react';
import { string } from 'prop-types';

const IconActionChevronLeft = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>Chevron left</title>
      <path
        d="M31.5 40.5L18.5 27.5L31.5 14.5"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

IconActionChevronLeft.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionChevronLeft.propTypes = {
  color: string,
  className: string,
};

export default IconActionChevronLeft;
