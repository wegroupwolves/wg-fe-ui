import React from 'react';
import { string, number } from 'prop-types';

const IconShoppingCartFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconShoppingCartFilled</title>
      <path
        d="M20.5 45C22.433 45 24 43.433 24 41.5C24 39.567 22.433 38 20.5 38C18.567 38 17 39.567 17 41.5C17 43.433 18.567 45 20.5 45Z"
        fill={color}
      />
      <path
        d="M35.5 45C37.433 45 39 43.433 39 41.5C39 39.567 37.433 38 35.5 38C33.567 38 32 39.567 32 41.5C32 43.433 33.567 45 35.5 45Z"
        fill={color}
      />
      <path
        d="M44.58 13H14.17L12.89 9.34C12.753 8.94811 12.4975 8.60857 12.1588 8.36846C11.8201 8.12835 11.4151 7.99958 11 8H6C5.46957 8 4.96086 8.21072 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12H9.58L15.7 29.49C15.1733 29.8732 14.7448 30.3756 14.4493 30.9561C14.1539 31.5365 13.9999 32.1787 14 32.83C14 33.9342 14.438 34.9934 15.2178 35.7751C15.9977 36.5568 17.0558 36.9974 18.16 37H40C40.5304 37 41.0391 36.7893 41.4142 36.4142C41.7893 36.0391 42 35.5304 42 35C42 34.4696 41.7893 33.9609 41.4142 33.5858C41.0391 33.2107 40.5304 33 40 33H18.16C18.1232 32.9909 18.0904 32.9696 18.067 32.9397C18.0436 32.9098 18.0309 32.873 18.0309 32.835C18.0309 32.797 18.0436 32.7602 18.067 32.7303C18.0904 32.7004 18.1232 32.6791 18.16 32.67L40.33 29C40.8604 28.9854 41.3633 28.7607 41.7281 28.3753C42.0929 27.9899 42.2896 27.4754 42.275 26.945C42.2604 26.4146 42.0357 25.9117 41.6503 25.5469C41.2649 25.1821 40.7504 24.9854 40.22 25L45 13.58C45.0276 13.5137 45.0377 13.4414 45.0293 13.37C45.021 13.2986 44.9945 13.2306 44.9524 13.1724C44.9102 13.1142 44.8539 13.0678 44.7887 13.0376C44.7235 13.0075 44.6516 12.9945 44.58 13V13Z"
        fill={color}
      />
    </svg>
  );
};

IconShoppingCartFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconShoppingCartFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconShoppingCartFilled;
