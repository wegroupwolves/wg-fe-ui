import React from 'react';
import { string } from 'prop-types';

const IconAppartment = ({ color, size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      className={className}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.5 4.5a1 1 0 00-1 1v14a1 1 0 001 1h3.364v-4.364h2.909V20.5h3.363a1 1 0 001-1v-14a1 1 0 00-1-1H7.5zm2.636 1.455H8.682v2.909h1.454v-2.91zm1.455 0h1.455v2.909H11.59v-2.91zm4.364 0H14.5v2.909h1.454v-2.91zm-7.273 5.09h1.454v2.91H8.682v-2.91zm4.364 0H11.59v2.91h1.455v-2.91zm2.909 0H14.5v2.91h1.454v-2.91z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

IconAppartment.defaultProps = {
  color: 'black',
  size: 30,
};

IconAppartment.propTypes = {
  color: string,
  className: string,
  size: string,
};

export default IconAppartment;
