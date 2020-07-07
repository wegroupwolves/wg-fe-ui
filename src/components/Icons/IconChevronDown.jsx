import React from 'react';
import { string, number } from 'prop-types';

const IconChevronDown = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconChevronDown</title>
      <path
        d="M25.7081 32.29C25.3173 32.6818 24.6827 32.6818 24.2919 32.29L13.711 21.6798C13.0824 21.0495 13.5289 19.9737 14.4191 19.9737L35.5809 19.9737C36.4711 19.9737 36.9176 21.0495 36.289 21.6798L25.7081 32.29Z"
        fill={color}
      />
    </svg>
  );
};

IconChevronDown.defaultProps = {
  color: 'black',
  size: 30,
};

IconChevronDown.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconChevronDown;
