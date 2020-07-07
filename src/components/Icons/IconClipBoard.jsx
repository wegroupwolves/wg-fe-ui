import React from 'react';
import { string, number } from 'prop-types';

const IconClipBoard = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>IconClipBoard</title>
      <path
        d="M32 10.4999H35.5C36.4283 10.4999 37.3185 10.8687 37.9749 11.5251C38.6313 12.1814 39 13.0717 39 13.9999V38.4999C39 39.4282 38.6313 40.3184 37.9749 40.9748C37.3185 41.6312 36.4283 41.9999 35.5 41.9999H14.5C13.5717 41.9999 12.6815 41.6312 12.0251 40.9748C11.3687 40.3184 11 39.4282 11 38.4999V13.9999C11 13.0717 11.3687 12.1814 12.0251 11.5251C12.6815 10.8687 13.5717 10.4999 14.5 10.4999H18"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.25 7H19.75C18.7835 7 18 7.7835 18 8.75V12.25C18 13.2165 18.7835 14 19.75 14H30.25C31.2165 14 32 13.2165 32 12.25V8.75C32 7.7835 31.2165 7 30.25 7Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconClipBoard.defaultProps = {
  color: 'black',
  size: 30,
};

IconClipBoard.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconClipBoard;
