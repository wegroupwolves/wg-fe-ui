import React from 'react';
import { string, number } from 'prop-types';

const IconPlusFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconPlusFilled</title>
      <path d="M38 23H27V12H23V23H12V27H23V38H27V27H38V23Z" fill={color} />
    </svg>
  );
};

IconPlusFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconPlusFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPlusFilled;
