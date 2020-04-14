import React from 'react';
import { string, number } from 'prop-types';

const IconPrint = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconPrint</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.2 18.6H13.8C11.08 18.6 9 20.68 9 23.4V33H15.4V39.4H34.6V33H41V23.4C41 20.68 38.92 18.6 36.2 18.6ZM31.4 36.2H18.6V28.2H31.4V36.2ZM36.2 25C35.24 25 34.6 24.36 34.6 23.4C34.6 22.44 35.24 21.8 36.2 21.8C37.16 21.8 37.8 22.44 37.8 23.4C37.8 24.36 37.16 25 36.2 25ZM34.6 10.6H15.4V17H34.6V10.6Z"
        fill={color}
      />
    </svg>
  );
};

IconPrint.defaultProps = {
  color: 'black',
  size: 30,
};

IconPrint.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPrint;
