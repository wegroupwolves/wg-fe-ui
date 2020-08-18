import React from 'react';
import { number, string } from 'prop-types';

const IconCustomLink = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="25"
      height="25"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M25.3333 17.5554V26.8887C25.3333 27.7139 25.0056 28.5052 24.4221 29.0886C23.8387 29.6721 23.0474 29.9999 22.2222 29.9999H5.11111C4.28599 29.9999 3.49467 29.6721 2.91122 29.0886C2.32778 28.5052 2 27.7139 2 26.8887V9.77762C2 8.9525 2.32778 8.16117 2.91122 7.57773C3.49467 6.99428 4.28599 6.6665 5.11111 6.6665H14.4445"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6666 2H30V11.3333"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8889 19.1111L30 2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconCustomLink.defaultProps = {
  color: 'black',
  size: 25,
};

IconCustomLink.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconCustomLink;
