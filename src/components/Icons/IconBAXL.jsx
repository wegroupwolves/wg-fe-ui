import React from 'react';
import { string, number } from 'prop-types';

const IconBAXL = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconBAXL</title>
      <path
        d="M37.06 29.62C36.9713 29.4111 36.8345 29.2261 36.6607 29.0801C36.4869 28.9341 36.2811 28.8313 36.06 28.78L34 28.33L17.74 24.81C17.409 24.7446 17.1156 24.555 16.92 24.28L13.2 19.28C13.0868 19.1423 12.9327 19.0443 12.76 19L9.54 18.4C8.61 18.24 7.68 18.08 6.74 17.96C6.65345 17.9485 6.56544 17.9558 6.48194 17.9813C6.39843 18.0068 6.32136 18.0499 6.25595 18.1077C6.19054 18.1655 6.1383 18.2367 6.10277 18.3165C6.06724 18.3962 6.04925 18.4827 6.05 18.57V40H19.05C19.05 41.7239 19.7348 43.3772 20.9538 44.5962C22.1728 45.8152 23.8261 46.5 25.55 46.5C27.2739 46.5 28.9272 45.8152 30.1462 44.5962C31.3652 43.3772 32.05 41.7239 32.05 40H36.56C36.8066 39.7967 36.9818 39.5199 37.06 39.21C37.5652 37.2369 37.9393 35.2325 38.18 33.21C37.9729 31.9677 37.596 30.7597 37.06 29.62V29.62ZM25.55 43C24.7091 42.999 23.8966 42.6953 23.2613 42.1444C22.6259 41.5935 22.2101 40.8323 22.09 40C22.0748 39.8337 22.0748 39.6663 22.09 39.5C22.09 38.5717 22.4588 37.6815 23.1151 37.0251C23.7715 36.3688 24.6617 36 25.59 36C26.5183 36 27.4085 36.3688 28.0649 37.0251C28.7213 37.6815 29.09 38.5717 29.09 39.5C29.1052 39.6663 29.1052 39.8337 29.09 40C28.9681 40.8461 28.5407 41.6183 27.8886 42.171C27.2365 42.7236 26.4046 43.0185 25.55 43V43Z"
        fill={color}
      />
      <path
        d="M38.75 15.28L29.65 25.34L27.23 24.82L29 20.22C29.0114 20.1895 29.0152 20.1568 29.011 20.1245C29.0069 20.0922 28.9949 20.0615 28.9762 20.0349C28.9575 20.0083 28.9326 19.9867 28.9036 19.9719C28.8747 19.9571 28.8425 19.9496 28.81 19.95H20.47C20.4327 19.9478 20.3966 19.9358 20.3655 19.915C20.3344 19.8943 20.3094 19.8656 20.2931 19.832C20.2768 19.7983 20.2698 19.7609 20.2728 19.7237C20.2757 19.6864 20.2886 19.6506 20.31 19.62L32.31 4.87C32.3404 4.83377 32.3827 4.8095 32.4293 4.80148C32.4759 4.79346 32.5238 4.80222 32.5646 4.8262C32.6054 4.85018 32.6363 4.88782 32.6519 4.93246C32.6676 4.97709 32.6669 5.02582 32.65 5.07L29.16 14.68C29.1486 14.7105 29.1448 14.7432 29.149 14.7755C29.1531 14.8078 29.1651 14.8385 29.1838 14.8651C29.2025 14.8917 29.2274 14.9133 29.2564 14.9281C29.2853 14.9429 29.3175 14.9504 29.35 14.95H38.6C38.6381 14.9504 38.6752 14.9616 38.7071 14.9824C38.739 15.0031 38.7643 15.0326 38.7801 15.0672C38.7958 15.1019 38.8014 15.1403 38.7961 15.178C38.7907 15.2157 38.7747 15.2511 38.75 15.28V15.28Z"
        fill={color}
      />
      <path
        d="M40.5 21C44.0899 21 47 18.0899 47 14.5C47 10.9101 44.0899 8 40.5 8C36.9101 8 34 10.9101 34 14.5C34 18.0899 36.9101 21 40.5 21Z"
        fill="#3297FD"
      />
      <path
        d="M40.8 12.18L39.31 14.51L40.82 16.82H39.56L38.65 15.31L37.74 16.82H36.52L38 14.5L36.5 12.18H37.74L38.66 13.69L39.57 12.18H40.8Z"
        fill="white"
      />
      <path
        d="M44.48 16.82H41.48V12.18H42.48V15.83H44.48V16.82Z"
        fill="white"
      />
    </svg>
  );
};

IconBAXL.defaultProps = {
  color: 'black',
  size: 30,
};

IconBAXL.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconBAXL;
