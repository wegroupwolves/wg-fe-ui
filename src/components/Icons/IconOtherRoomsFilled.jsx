import React from 'react';
import { string, number } from 'prop-types';

const IconOtherRoomsFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Other rooms</title>
      <path
        d="M25 30.99C26.5629 30.99 27.83 29.7274 27.83 28.17C27.83 26.6126 26.5629 25.35 25 25.35C23.437 25.35 22.17 26.6126 22.17 28.17C22.17 29.7274 23.437 30.99 25 30.99Z"
        fill={color}
      />
      <path
        d="M34.21 30.99C35.773 30.99 37.04 29.7274 37.04 28.17C37.04 26.6126 35.773 25.35 34.21 25.35C32.647 25.35 31.38 26.6126 31.38 28.17C31.38 29.7274 32.647 30.99 34.21 30.99Z"
        fill={color}
      />
      <path
        d="M15.79 30.99C17.353 30.99 18.62 29.7274 18.62 28.17C18.62 26.6126 17.353 25.35 15.79 25.35C14.2271 25.35 12.96 26.6126 12.96 28.17C12.96 29.7274 14.2271 30.99 15.79 30.99Z"
        fill={color}
      />
      <path
        d="M42.47 17.36L38.47 14.72V8.24001C38.47 7.94296 38.352 7.65809 38.1419 7.44805C37.9319 7.23801 37.647 7.12001 37.35 7.12001H31.75C31.4529 7.12001 31.1681 7.23801 30.958 7.44805C30.748 7.65809 30.63 7.94296 30.63 8.24001V9.49001L25.63 6.20001C25.435 6.06846 25.2052 5.99817 24.97 5.99817C24.7348 5.99817 24.5049 6.06846 24.31 6.20001L7.52998 17.36C7.36556 17.4696 7.23102 17.6184 7.13849 17.793C7.04596 17.9676 6.99836 18.1624 6.99998 18.36V42.8C6.99998 42.9576 7.03102 43.1136 7.09132 43.2592C7.15163 43.4048 7.24002 43.5371 7.35145 43.6485C7.46288 43.76 7.59517 43.8484 7.74076 43.9087C7.88635 43.969 8.04239 44 8.19998 44H41.8C41.9576 44 42.1136 43.969 42.2592 43.9087C42.4048 43.8484 42.5371 43.76 42.6485 43.6485C42.7599 43.5371 42.8483 43.4048 42.9086 43.2592C42.9689 43.1136 43 42.9576 43 42.8V18.35C42.9999 18.1541 42.9516 17.9613 42.8591 17.7886C42.7666 17.6159 42.633 17.4687 42.47 17.36ZM32.56 13.28C32.4834 13.323 32.3977 13.347 32.31 13.35C32.3975 13.3455 32.4829 13.3216 32.56 13.28ZM39.75 40.76H10.25V19.52L25 9.83001L29.12 12.56L31.45 14.09C31.6866 14.2449 31.9606 14.333 32.2431 14.3451C32.5256 14.3571 32.8061 14.2927 33.055 14.1585C33.3039 14.0243 33.5119 13.8254 33.6572 13.5828C33.8024 13.3401 33.8793 13.0628 33.88 12.78V10.35H35.25V15.79C35.2501 16.0548 35.3193 16.3149 35.4509 16.5447C35.5824 16.7745 35.7717 16.9659 36 17.1L39.79 19.53L39.75 40.76Z"
        fill={color}
      />
    </svg>
  );
};

IconOtherRoomsFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconOtherRoomsFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconOtherRoomsFilled;
