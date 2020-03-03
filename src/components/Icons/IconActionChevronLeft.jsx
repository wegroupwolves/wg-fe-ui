import React from 'react';
import { string } from 'prop-types';

const IconActionChevronLeft = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
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
};

IconActionChevronLeft.propTypes = {
  color: string,
  className: string,
};

export default IconActionChevronLeft;
