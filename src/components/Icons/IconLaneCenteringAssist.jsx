import React from 'react';
import { string } from 'prop-types';

const IconLaneCenteringAssist = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 6.45483H3V16.4548H7V6.45483Z" fill={color} />
      <path d="M7 20.4548H3V30.4548H7V20.4548Z" fill={color} />
      <path d="M7 34.4548H3V44.4548H7V34.4548Z" fill={color} />
      <path d="M47 6.45483H43V16.4548H47V6.45483Z" fill={color} />
      <path d="M47 20.4548H43V30.4548H47V20.4548Z" fill={color} />
      <path d="M47 34.4548H43V44.4548H47V34.4548Z" fill={color} />
      <path
        d="M25 19.6348C18.38 19.6348 13.02 24.9948 13.02 31.6148C13.02 38.2348 18.38 43.5948 25 43.5948C31.62 43.5948 36.98 38.2348 36.98 31.6148C36.98 24.9948 31.62 19.6348 25 19.6348ZM22.6 39.8548C22.6 40.0548 22.4 40.2048 22.21 40.1448C19.92 39.3948 18.04 37.7548 16.97 35.6348C16.87 35.4348 17.02 35.2048 17.24 35.2048H19.61C21.26 35.2048 22.6 36.5448 22.6 38.1948V39.8548ZM25 34.6048C24.01 34.6048 23.2 33.8048 23.2 32.8048C23.2 31.8148 24 31.0048 25 31.0048C26 31.0048 26.8 31.8048 26.8 32.8048C26.8 33.8048 25.99 34.6048 25 34.6048ZM33.03 35.6348C31.87 37.9448 29.74 39.6848 27.17 40.3348C26.98 40.3848 26.8 40.2348 26.8 40.0448V38.2048C26.8 36.5548 28.14 35.2148 29.79 35.2148H32.75C32.98 35.2048 33.13 35.4348 33.03 35.6348ZM33.53 31.1648L29.25 29.5548C26.57 28.3748 23.9 28.2448 20.73 29.5548L16.45 31.1648C16.25 31.2448 16.02 31.0848 16.04 30.8648C16.42 26.2548 20.28 22.6248 24.98 22.6248C29.68 22.6248 33.54 26.2548 33.92 30.8648C33.96 31.0748 33.74 31.2448 33.53 31.1648Z"
        fill={color}
      />
      <path
        d="M37.07 12.0949L39.03 9.25486C32.76 4.91486 24.73 3.81486 17.55 6.32486C15.18 7.14486 12.96 8.33486 10.96 9.85486L13.04 12.6049C14.75 11.3049 16.65 10.2949 18.68 9.58486C24.84 7.43486 31.71 8.37486 37.07 12.0949Z"
        fill={color}
      />
      <path
        d="M20.1 15.605C24.91 13.925 30.29 14.665 34.49 17.575L36.45 14.735C31.35 11.195 24.81 10.305 18.96 12.345C17.01 13.025 15.21 13.995 13.59 15.225L15.68 17.965C17.01 16.955 18.5 16.165 20.1 15.605Z"
        fill={color}
      />
    </svg>
  );
};

IconLaneCenteringAssist.defaultProps = {
  color: 'black',
};

IconLaneCenteringAssist.propTypes = {
  color: string,
  className: string,
};

export default IconLaneCenteringAssist;
