import React from 'react';
import { string } from 'prop-types';

const IconActionDropDown = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>Drop down</title>
      <path
        d="M38 21L25 34L12 21"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

IconActionDropDown.defaultProps = {
  color: 'black',
};

IconActionDropDown.propTypes = {
  color: string,
  className: string,
};

export default IconActionDropDown;
