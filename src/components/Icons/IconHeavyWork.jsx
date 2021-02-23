import React from 'react';
import { string, number } from 'prop-types';

const IconHeavyWork = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M34.9 13.1V12.1C34.9 9.8 33.1 8 30.8 8H23.6C21.3 8 19.5 9.8 19.5 12.1V13.1C18.4 13.1 17.5 14 17.5 15.2V17.3C17.5 18.4 18.4 19.4 19.5 19.4V23C20.2 23.1 20.9 23.5 21.3 24.1C21.5 24 21.8 24 22 24C22.8 24 23.6 24.3 24.2 24.9C25 25.7 25.3 26.8 25 27.8C25.6 28.3 25.9 28.9 26.1 29.7H30.8C33.1 29.7 34.9 27.9 34.9 25.6V19.4C36 19.4 36.9 18.5 36.9 17.3V15.2C36.9 14.1 36 13.1 34.9 13.1ZM22.6 17.1V13.1C22.6 12.5 23.1 12.1 23.6 12.1H25.2L22.6 17.1ZM25.4 18.3L28.7 12.1H30.2L26.9 18.3H25.4ZM31.8 17.3C31.8 17.9 31.3 18.3 30.8 18.3H28.7L31.7 12.7C31.8 12.9 31.8 13 31.8 13.2V17.3Z"
        fill={color}
      />
      <path
        d="M26.7 37.8H26.2L26.1 37.4C25.7 36 25 34.6 23.9 33.6L22.8 32.4L22.3 32L21.8 31.5C21.8 31.4 21.9 31.3 21.9 31.2H23.1C23.7 31.2 24.1 30.7 24.1 30.2C24.1 29.7 23.6 29.2 23.1 29.2H21.9C21.9 29.1 21.8 29 21.8 28.9L22.8 27.9C23.2 27.5 23.2 26.8 22.8 26.5C22.4 26.1 21.7 26.1 21.4 26.5L20.4 27.5C20.3 27.5 20.2 27.4 20.1 27.4V26C20.1 25.4 19.6 25 19.1 25C18.5 25 18.1 25.5 18.1 26V27.2C18 27.2 17.9 27.3 17.8 27.3L16.8 26.3C16.4 25.9 15.7 25.9 15.3 26.3C14.9 26.7 14.9 27.3 15.3 27.7L16.3 28.7C16.3 28.8 16.2 28.9 16.2 29H15C14.4 29 14 29.5 14 30C14 30.5 14.5 31 15 31H16.2C16.2 31.1 16.3 31.2 16.3 31.3L15.3 32.3C14.9 32.7 14.9 33.4 15.3 33.8C15.7 34.2 16.3 34.2 16.8 33.8L17.8 32.8C17.9 32.9 18 32.9 18.1 32.9V34.1C18.1 34.7 18.6 35.1 19.1 35.1C19.7 35.1 20.1 34.6 20.1 34.1V33C20.2 33 20.3 32.9 20.4 32.9L21.4 33.9L22.5 35.1C23.3 35.9 23.8 36.8 24.1 37.8H23.6C23 37.8 22.6 38.3 22.6 38.8V43H27.7V38.9C27.7 38.3 27.2 37.8 26.7 37.8ZM19 31.2C18.4 31.2 18 30.7 18 30.2C18 29.7 18.5 29.2 19 29.2C19.6 29.2 20 29.7 20 30.2C20 30.7 19.6 31.2 19 31.2Z"
        fill={color}
      />
    </svg>
  );
};

IconHeavyWork.defaultProps = {
  color: 'black',
  size: 30,
};

IconHeavyWork.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconHeavyWork;
