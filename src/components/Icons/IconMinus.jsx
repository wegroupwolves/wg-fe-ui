import React from 'react';
import { string, number } from 'prop-types';

const IconMinus = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <line x1="12" y1="25" x2="38" y2="25" stroke={color} strokeWidth="4" />
    </svg>
  );
};

IconMinus.defaultProps = {
  color: 'black',
  size: 30,
};

IconMinus.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconMinus;
