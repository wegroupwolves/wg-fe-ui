import React from 'react';
import { string, int } from 'prop-types';

const IconOthersFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconOthersFilled</title>
      <circle cx="25" cy="25" r="4" fill={color} />
      <circle cx="38" cy="25" r="4" fill={color} />
      <circle cx="12" cy="25" r="4" fill={color} />
    </svg>
  );
};

IconOthersFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconOthersFilled.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default IconOthersFilled;
