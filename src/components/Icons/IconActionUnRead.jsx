import React from 'react';
import { string } from 'prop-types';

const IconActionRead = ({ className, color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 22 22"
    >
      <g clip-path="url(#clip0)">
        <path
          fill={color}
          d="M11 6.16c3.27 0 6.34 1.84 8.166 4.84-1.826 3-4.897 4.84-8.166 4.84-3.27 0-6.34-1.84-8.166-4.84C4.66 8 7.73 6.16 11 6.16zm0-1.32c-4.136 0-7.748 2.482-9.68 6.16 1.932 3.678 5.544 6.16 9.68 6.16s7.748-2.482 9.68-6.16C18.75 7.322 15.136 4.84 11 4.84z"
        ></path>
        <path
          fill={color}
          d="M14.96 11a3.96 3.96 0 11-6.978-2.56l2.578 2.12-.981-3.252c.452-.179.934-.27 1.421-.268A3.96 3.96 0 0114.96 11z"
        ></path>
        <path stroke={color} d="M-0.354 21.646L21.646 -0.354"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill={color} d="M0 0H22V22H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

IconActionRead.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionRead.propTypes = {
  color: string,
  className: string,
};

export default IconActionRead;
