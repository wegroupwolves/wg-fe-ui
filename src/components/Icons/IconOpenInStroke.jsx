import React from 'react';
import { string, number } from 'prop-types';

const IconOpenInStroke = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>IconOpenInStroke</title>
      <path
        d="M34.3333 26.5556V35.8889C34.3333 36.714 34.0056 37.5054 33.4221 38.0888C32.8387 38.6723 32.0474 39 31.2222 39H14.1111C13.286 39 12.4947 38.6723 11.9112 38.0888C11.3278 37.5054 11 36.714 11 35.8889V18.7778C11 17.9527 11.3278 17.1614 11.9112 16.5779C12.4947 15.9945 13.286 15.6667 14.1111 15.6667H23.4445"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.6667 11H39V20.3333"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8889 28.1111L39 11"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconOpenInStroke.defaultProps = {
  color: 'black',
  size: 30,
};

IconOpenInStroke.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconOpenInStroke;
