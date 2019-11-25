import React from 'react';
import { string } from 'prop-types';

const IconOthersFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
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
};

IconOthersFilled.propTypes = {
  color: string,
  className: string,
};

export default IconOthersFilled;
