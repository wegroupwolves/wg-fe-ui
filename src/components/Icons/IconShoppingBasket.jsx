import React from 'react';
import { string, number } from 'prop-types';

const IconShoppingBasket = ({ className, color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8548 7.96439C23.0981 8.36378 24 9.55178 24 10.9552V22.8657C24 24.5967 22.628 26 20.9355 26H8.06452C6.37203 26 5 24.5967 5 22.8657V10.9552C5 9.32996 6.20947 7.99363 7.75806 7.83637V7.19403C7.75806 5.9823 8.71849 5 9.90323 5H19.7097C20.8944 5 21.8548 5.9823 21.8548 7.19403V7.96439ZM20.0161 7.8209V7.19403C20.0161 7.02093 19.8789 6.8806 19.7097 6.8806L9.90323 6.8806C9.73398 6.8806 9.59677 7.02093 9.59677 7.19403V7.8209H20.0161ZM6.83871 10.9552C6.83871 10.2628 7.38752 9.70149 8.06452 9.70149H20.9355C21.6125 9.70149 22.1613 10.2628 22.1613 10.9552V22.8657C22.1613 23.5581 21.6125 24.1194 20.9355 24.1194H8.06452C7.38752 24.1194 6.83871 23.5581 6.83871 22.8657V10.9552Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.90323 14.403C10.411 14.403 10.8226 14.824 10.8226 15.3433V16.597C10.8226 16.7701 10.9598 16.9104 11.129 16.9104H17.871C18.0402 16.9104 18.1774 16.7701 18.1774 16.597V15.3433C18.1774 14.824 18.589 14.403 19.0968 14.403C19.6045 14.403 20.0161 14.824 20.0161 15.3433V16.597C20.0161 17.8087 19.0557 18.791 17.871 18.791H11.129C9.94429 18.791 8.98387 17.8087 8.98387 16.597V15.3433C8.98387 14.824 9.39548 14.403 9.90323 14.403Z"
        fill={color}
      />
    </svg>
  );
};

IconShoppingBasket.defaultProps = {
  color: 'black',
  size: 30,
};

IconShoppingBasket.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconShoppingBasket;
