import React from 'react';
import { string, int } from 'prop-types';

const IconDragHandlerFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconDragHandlerFilled</title>
      <path
        d="M15 24.25C15 26.3211 16.6789 28 18.75 28C20.8211 28 22.5 26.3211 22.5 24.25C22.5 22.1789 20.8211 20.5 18.75 20.5C16.6789 20.5 15 22.1789 15 24.25Z"
        fill={color}
      />
      <path
        d="M27.5 24.25C27.5 26.3211 29.1789 28 31.25 28C33.3211 28 35 26.3211 35 24.25C35 22.1789 33.3211 20.5 31.25 20.5C29.1789 20.5 27.5 22.1789 27.5 24.25Z"
        fill={color}
      />
      <path
        d="M15 37.251C15 39.322 16.6789 41.001 18.75 41.001C20.8211 41.001 22.5 39.322 22.5 37.251C22.5 35.1799 20.8211 33.501 18.75 33.501C16.6789 33.501 15 35.1799 15 37.251Z"
        fill={color}
      />
      <path
        d="M27.5 37.251C27.5 39.322 29.1789 41.001 31.25 41.001C33.3211 41.001 35 39.322 35 37.251C35 35.1799 33.3211 33.501 31.25 33.501C29.1789 33.501 27.5 35.1799 27.5 37.251Z"
        fill={color}
      />
      <path
        d="M15 11.25C15 13.3211 16.6789 15 18.75 15C20.8211 15 22.5 13.3211 22.5 11.25C22.5 9.17893 20.8211 7.5 18.75 7.5C16.6789 7.5 15 9.17893 15 11.25Z"
        fill={color}
      />
      <path
        d="M27.5 11.25C27.5 13.3211 29.1789 15 31.25 15C33.3211 15 35 13.3211 35 11.25C35 9.17893 33.3211 7.5 31.25 7.5C29.1789 7.5 27.5 9.17893 27.5 11.25Z"
        fill={color}
      />
    </svg>
  );
};

IconDragHandlerFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDragHandlerFilled.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default IconDragHandlerFilled;
