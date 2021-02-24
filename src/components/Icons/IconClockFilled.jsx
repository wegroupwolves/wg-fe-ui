import React from 'react';
import { string } from 'prop-types';

const IconClockFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 14.4712C19.2111 14.4712 14.5 19.2007 14.5 25.0576C14.5 30.9144 19.2111 35.6439 25 35.6439C30.7889 35.6439 35.5 30.9144 35.5 25.0576C35.5 19.2007 30.7889 14.4712 25 14.4712ZM11.5 25.0576C11.5 17.5642 17.534 11.4712 25 11.4712C32.466 11.4712 38.5 17.5642 38.5 25.0576C38.5 32.5509 32.466 38.6439 25 38.6439C17.534 38.6439 11.5 32.5509 11.5 25.0576Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 16.3057C25.8284 16.3057 26.5 16.9773 26.5 17.8057V24.1334L30.4747 26.1351C31.2146 26.5077 31.5123 27.4096 31.1397 28.1495C30.7671 28.8894 29.8652 29.1871 29.1253 28.8145L24.3253 26.3972C23.8193 26.1424 23.5 25.6241 23.5 25.0575V17.8057C23.5 16.9773 24.1716 16.3057 25 16.3057Z"
        fill={color}
      />
    </svg>
  );
};

IconClockFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconClockFilled.propTypes = {
  color: string,
  className: string,
};

export default IconClockFilled;
