import React from 'react';
import { string, int } from 'prop-types';

const IconTaxFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconTaxFilled</title>
      <circle cx="25" cy="31.5" r="3.5" fill={color} />
      <path
        d="M30,22l-.89-.9-.83.9-1.56,1.69L25.46,25H36a3,3,0,0,0,3,3v7a3,3,0,0,0-3,3H14a3,3,0,0,0-3-3V28a3,3,0,0,0,3-3h4.07l-3,3.06L15,32h2L30.49,17.51a4.49,4.49,0,1,0-2.49-4,4.58,4.58,0,0,0,.21,1.29L25.5,17.52l-2.71-2.73A4.58,4.58,0,0,0,23,13.5a4.54,4.54,0,1,0-2.49,4L23,20l-2,2H8V41H42V22ZM32.5,11A2.5,2.5,0,1,1,30,13.5,2.5,2.5,0,0,1,32.5,11Zm-14,5A2.5,2.5,0,1,1,21,13.5,2.5,2.5,0,0,1,18.5,16Z"
        fill={color}
      />
    </svg>
  );
};

IconTaxFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconTaxFilled.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default IconTaxFilled;
