import React from 'react';
import { string, number } from 'prop-types';

const IconWoman = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconWoman</title>
      <path
        d="M25.1 16C26.8 16 28.1 14.7 28.1 13C28.1 11.8 27.4 10.7 26.3 10.3C26.4 10.1 26.5 9.8 26.5 9.5C26.5 8.7 25.9 8 25 8C24.1 8 23.5 8.7 23.5 9.5C23.5 9.8 23.6 10.1 23.7 10.3C22.7 10.8 22 11.8 22 13C22.1 14.7 23.4 16 25.1 16Z"
        fill={color}
      />
      <path
        d="M34.3 26.1L29.4 17.7C29.3 17.6 29.2 17.5 29.1 17.4C29 17.2 28.7 17 28.4 17H28.1C27.3 17.6 26.2 18 25.1 18C24 18 22.9 17.6 22.1 17H21.7C21.4 17 21.1 17.1 20.9 17.4C20.8 17.5 20.6 17.6 20.6 17.7L15.7 26.1C15.3 26.8 15.5 27.7 16.2 28.1C16.9 28.5 17.8 28.3 18.2 27.6L21.1 22.6L21.4 25.5C21.4 25.8 21.4 26.1 21.3 26.4L19 33.7C18.8 34.4 19.3 35 20 35H21.6V41.5C21.6 42.3 22.3 43 23.1 43C23.9 43 24.6 42.3 24.6 41.5V35H25.6V41.5C25.6 42.3 26.3 43 27.1 43C27.9 43 28.6 42.3 28.6 41.5V35H30.2C30.9 35 31.4 34.3 31.2 33.7L28.8 26.4C28.7 26.1 28.7 25.8 28.7 25.5L29 22.6L31.8 27.5C32.2 28.2 33.1 28.5 33.8 28C34.5 27.7 34.7 26.8 34.3 26.1Z"
        fill={color}
      />
    </svg>
  );
};

IconWoman.defaultProps = {
  color: 'black',
  size: 30,
};

IconWoman.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconWoman;
