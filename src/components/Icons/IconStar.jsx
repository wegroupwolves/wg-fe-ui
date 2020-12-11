import React from 'react';
import { string, number } from 'prop-types';

const IconStar = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 27 26"
      fill="none"
    >
      <title>IconStar</title>
      <path
        d="M13.3152 20.72L5.08667 25.326L6.92417 16.0767L0 9.674L9.36483 8.56333L13.3152 0L17.2655 8.56333L26.6303 9.674L19.7062 16.0767L21.5437 25.326L13.3152 20.72Z"
        fill={color}
      />
    </svg>
  );
};

IconStar.defaultProps = {
  color: 'black',
  size: 30,
};

IconStar.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconStar;
