import React from 'react';
import { string, number } from 'prop-types';

const IconPedestrian = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M35.5 43L28 32.5L30.1 18.6C30.6 15.6 28.3 13 25.3 13C24.1 13 22.9 13.5 22.1 14.2C22 14.2 21.9 14.3 21.9 14.3L14.9 19.3C14.5 19.6 14.2 20 14.1 20.4L12.1 28.4C11.8 29.5 12.5 30.6 13.6 30.8C13.8 30.8 13.9 30.9 14.1 30.9C15 30.9 15.8 30.3 16 29.4L17.8 22.1L20.1 20.4L19.2 27.5C19.1 28.7 19.4 29.8 20.1 30.8L31.5 45.8C32.3 46.9 33.9 47.1 35 46.3C35.7 45.8 36 45.1 36 44.3C36 44 35.8 43.5 35.5 43Z"
        fill={color}
      />
      <path
        d="M27 11C29.2091 11 31 9.20914 31 7C31 4.79086 29.2091 3 27 3C24.7909 3 23 4.79086 23 7C23 9.20914 24.7909 11 27 11Z"
        fill={color}
      />
      <path
        d="M20.8 36.9L24.1 41.2L20.5 46C19.7 47.1 18.1 47.3 17 46.5C16.3 46 16 45.3 16 44.5C16 44 16.2 43.5 16.5 43L20.8 36.9Z"
        fill={color}
      />
      <path
        d="M35.1 30.7C34.7 30.9 34.4 31 34 31C33.3 31 32.7 30.7 32.3 30.1L31.6 29L32.5 22.9L35.7 28C36.3 28.9 36 30.1 35.1 30.7Z"
        fill={color}
      />
    </svg>
  );
};

IconPedestrian.defaultProps = {
  color: 'black',
  size: 30,
};

IconPedestrian.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPedestrian;
