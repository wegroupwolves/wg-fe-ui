import React from 'react';
import { string } from 'prop-types';

const IconIdFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M4 9.79001V39.79H46V9.79001H4ZM22 36.79H8V34.79H22V36.79ZM22 31.79H20V26.29C20 25.3618 19.6313 24.4715 18.9749 23.8151C18.3185 23.1588 17.4283 22.79 16.5 22.79H13.5C12.5717 22.79 11.6815 23.1588 11.0251 23.8151C10.3687 24.4715 10 25.3618 10 26.29V31.79H8V13.79H22V31.79ZM42 36.79H39V34.79H42V36.79ZM42 28.79H25V24.79H42V28.79ZM42 21.79H25V19.79H42V21.79ZM42 16.79H25V13.79H42V16.79Z"
        fill={color}
      />
      <path
        d="M15 21.79C16.6569 21.79 18 20.4469 18 18.79C18 17.1332 16.6569 15.79 15 15.79C13.3431 15.79 12 17.1332 12 18.79C12 20.4469 13.3431 21.79 15 21.79Z"
        fill={color}
      />
    </svg>
  );
};

IconIdFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconIdFilled.propTypes = {
  color: string,
  className: string,
};

export default IconIdFilled;
