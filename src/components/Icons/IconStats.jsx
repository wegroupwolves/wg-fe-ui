import React from 'react';
import { string, number } from 'prop-types';

const IconStats = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M38 15C39.6569 15 41 13.6569 41 12C41 10.3431 39.6569 9 38 9C36.3431 9 35 10.3431 35 12C35 13.6569 36.3431 15 38 15Z"
        fill={color}
      />
      <path
        d="M40 16L38 18L36 16H34.8C34.3 16 33.8 16.2 33.4 16.6L24.4 25.6C23.8 26.2 23.8 27.1 24.4 27.7C25 28.3 25.9 28.3 26.5 27.7L33.9 20.3V41.6C33.9 42.4 34.6 43.1 35.4 43.1C36.2 43.1 36.9 42.4 36.9 41.6V33C36.9 32.4 37.4 32 37.9 32C38.4 32 38.9 32.4 38.9 33V41.5C38.9 42.3 39.6 43 40.4 43C41.2 43 41.9 42.3 41.9 41.5V30.9C42.1 31 42.2 31 42.4 31C43.2 31 43.9 30.3 43.9 29.5V18C43.9 16.9 43 16 41.9 16H40Z"
        fill={color}
      />
      <path d="M18 21H15V31H18V21Z" fill={color} />
      <path d="M23 25H20V31H23V25Z" fill={color} />
      <path d="M28 29H25V31H28V29Z" fill={color} />
      <path
        d="M32.2 15C32.6 14.6 33 14.4 33.5 14.2C33.2 13.6 33 12.8 33 12H25V10.5C25 9.7 24.3 9 23.5 9C22.7 9 22 9.7 22 10.5V12H9.5C8.7 12 8 12.7 8 13.5C8 14.3 8.7 15 9.5 15H10V36H20.9L16.5 40.4C15.9 41 15.9 41.9 16.5 42.5C17.1 43.1 18 43.1 18.6 42.5L22 39.1V41.5C22 42.3 22.7 43 23.5 43C24.3 43 25 42.3 25 41.5V39.1L28.4 42.5C29 43.1 29.9 43.1 30.5 42.5C31.1 41.9 31.1 41 30.5 40.4L26.1 36H32V33H13V15H32.2Z"
        fill={color}
      />
    </svg>
  );
};

IconStats.defaultProps = {
  color: 'black',
  size: 30,
};

IconStats.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconStats;
