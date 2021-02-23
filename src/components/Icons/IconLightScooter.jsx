import React from 'react';
import { string, number } from 'prop-types';

const IconLightScooter = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M13 27C11.8698 27 10.765 27.3351 9.82531 27.963C8.8856 28.5909 8.15318 29.4834 7.72068 30.5275C7.28818 31.5717 7.17502 32.7206 7.39551 33.8291C7.61599 34.9375 8.16023 35.9557 8.95938 36.7549C9.75854 37.5541 10.7767 38.0983 11.8852 38.3188C12.9937 38.5393 14.1426 38.4261 15.1868 37.9936C16.2309 37.5611 17.1234 36.8287 17.7512 35.889C18.3791 34.9493 18.7143 33.8445 18.7143 32.7143C18.7143 31.1988 18.1122 29.7453 17.0406 28.6737C15.969 27.602 14.5155 27 13 27ZM13 35C12.5479 35 12.106 34.8659 11.7301 34.6148C11.3542 34.3636 11.0613 34.0066 10.8883 33.589C10.7153 33.1713 10.67 32.7118 10.7582 32.2684C10.8464 31.825 11.0641 31.4177 11.3837 31.098C11.7034 30.7784 12.1107 30.5607 12.5541 30.4725C12.9975 30.3843 13.457 30.4296 13.8747 30.6026C14.2924 30.7756 14.6493 31.0685 14.9005 31.4444C15.1517 31.8203 15.2857 32.2622 15.2857 32.7143C15.2857 33.3205 15.0449 33.9019 14.6162 34.3305C14.1876 34.7592 13.6062 35 13 35Z"
        fill={color}
      />
      <path
        d="M39.2857 33.8571C39.9169 33.8571 40.4286 33.3455 40.4286 32.7143C40.4286 32.0831 39.9169 31.5714 39.2857 31.5714C38.6545 31.5714 38.1429 32.0831 38.1429 32.7143C38.1429 33.3455 38.6545 33.8571 39.2857 33.8571Z"
        fill={color}
      />
      <path
        d="M39.2857 27C38.1556 27 37.0508 27.3351 36.111 27.963C35.1713 28.5909 34.4389 29.4834 34.0064 30.5275C33.5739 31.5717 33.4608 32.7206 33.6812 33.8291C33.9017 34.9375 34.446 35.9557 35.2451 36.7549C36.0443 37.5541 37.0625 38.0983 38.1709 38.3188C39.2794 38.5393 40.4283 38.4261 41.4725 37.9936C42.5166 37.5611 43.4091 36.8287 44.037 35.889C44.6649 34.9493 45 33.8445 45 32.7143C45 31.1988 44.398 29.7453 43.3263 28.6737C42.2547 27.602 40.8013 27 39.2857 27ZM39.2857 35C38.8337 35 38.3917 34.8659 38.0159 34.6148C37.64 34.3636 37.347 34.0066 37.174 33.589C37.001 33.1713 36.9557 32.7118 37.0439 32.2684C37.1321 31.825 37.3498 31.4177 37.6695 31.098C37.9891 30.7784 38.3964 30.5607 38.8398 30.4725C39.2832 30.3843 39.7428 30.4296 40.1604 30.6026C40.5781 30.7756 40.9351 31.0685 41.1862 31.4444C41.4374 31.8203 41.5714 32.2622 41.5714 32.7143C41.5714 33.3205 41.3306 33.9019 40.902 34.3305C40.4733 34.7592 39.8919 35 39.2857 35Z"
        fill={color}
      />
      <path
        d="M17.5714 17.8571H9.57142C9.26831 17.8571 8.97762 17.9775 8.76329 18.1919C8.54897 18.4062 8.42856 18.6969 8.42856 19V20.1429H19.8571C19.8571 19.5366 19.6163 18.9553 19.1877 18.5266C18.759 18.098 18.1776 17.8571 17.5714 17.8571Z"
        fill={color}
      />
      <path
        d="M39.2857 25.6286C40.2885 25.6274 41.2798 25.841 42.1931 26.2549C42.3496 26.3228 42.5257 26.33 42.6871 26.275C42.8486 26.2201 42.9838 26.1069 43.0663 25.9577C43.1131 25.8738 43.1418 25.781 43.1504 25.6853C43.1591 25.5896 43.1475 25.4931 43.1164 25.4022C43.0854 25.3112 43.0356 25.2278 42.9703 25.1573C42.9049 25.0869 42.8255 25.0309 42.7371 24.9931C41.6517 24.5063 40.4753 24.2554 39.2857 24.2571C39.0206 24.2571 38.76 24.2709 38.5017 24.2937L34.6274 16.7143H35.8571V13.2857H34.1429C33.7518 13.2847 33.3723 13.4187 33.0686 13.6651L31.896 11.3794C31.8393 11.2659 31.7523 11.1704 31.6445 11.1034C31.5368 11.0364 31.4126 11.0006 31.2857 11H26.7143C26.1154 11 25.6971 11.7657 26.3829 12.3714H30.8651L33.6583 17.8571H31.2857V27H25.5714C24.0559 27 22.6025 26.398 21.5308 25.3263C20.4592 24.2547 19.8571 22.8012 19.8571 21.2857H9.57143C8.35901 21.2857 7.19625 21.7673 6.33894 22.6247C5.48163 23.482 5 24.6447 5 25.8571V29.2857H7.05714C7.81091 27.9763 8.97605 26.9524 10.3715 26.3733C11.767 25.7941 13.3147 25.6921 14.7742 26.083C16.2336 26.4739 17.5231 27.3359 18.4423 28.5351C19.3614 29.7342 19.8588 31.2034 19.8571 32.7143H32.2C32.2 30.835 32.9465 29.0328 34.2754 27.7039C35.6042 26.3751 37.4065 25.6286 39.2857 25.6286V25.6286Z"
        fill={color}
      />
      <path
        d="M13 33.8571C13.6312 33.8571 14.1429 33.3455 14.1429 32.7143C14.1429 32.0831 13.6312 31.5714 13 31.5714C12.3688 31.5714 11.8571 32.0831 11.8571 32.7143C11.8571 33.3455 12.3688 33.8571 13 33.8571Z"
        fill={color}
      />
    </svg>
  );
};

IconLightScooter.defaultProps = {
  color: 'black',
  size: 30,
};

IconLightScooter.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconLightScooter;
