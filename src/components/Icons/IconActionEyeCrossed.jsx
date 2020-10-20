import React from 'react';
import { shape, string } from 'prop-types';

const IconActionEyeCrossed = ({ className, color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.50659 20.3219C10.2762 18.5522 11.8335 16.4995 13.8155 15.0484C17.921 12.0046 22.6282 12.04 26.7692 15.0484C28.5742 16.3579 29.9899 18.1629 31.5825 19.7556C32.2196 20.3927 32.0427 21.0297 31.6179 21.773C26.0967 30.6565 15.1958 30.8689 9.28523 22.1623C9.03748 21.8084 8.75434 21.4544 8.50659 21.1005C8.50659 20.8528 8.50659 20.605 8.50659 20.3219ZM20.3277 15.2253C17.2486 15.2253 14.8419 17.5612 14.8065 20.605C14.7711 23.6842 17.1424 26.1263 20.1507 26.1616C23.2653 26.197 25.7428 23.7903 25.7428 20.6758C25.7782 17.6674 23.3715 15.2607 20.3277 15.2253Z"
      fill={color}
    />
    <path
      d="M22.6284 20.7483C22.593 22.0932 21.5666 23.0488 20.2217 23.0134C18.9475 22.978 17.9919 21.987 17.9919 20.7129C17.9919 19.3679 19.0183 18.377 20.3632 18.377C21.6374 18.377 22.6284 19.4387 22.6284 20.7483Z"
      fill={color}
    />
    <rect
      x="29.2131"
      y="9"
      width="3"
      height="30"
      transform="rotate(45 29.2131 9)"
      fill={color}
    />
  </svg>
);

IconActionEyeCrossed.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionEyeCrossed.propTypes = {
  color: shape().isRequired,
  className: string,
};

export default IconActionEyeCrossed;
