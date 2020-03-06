import React from 'react';
import { string } from 'prop-types';

const IconActionPlus = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Plus</title>
      <path d="M38 23H27V12H23V23H12V27H23V38H27V27H38V23Z" fill={color} />
    </svg>
  );
};

IconActionPlus.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionPlus.propTypes = {
  color: string,
  className: string,
};

export default IconActionPlus;
