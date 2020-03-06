import React from 'react';
import { string } from 'prop-types';

const IconAtticFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Attic</title>
      <path
        d="M29.64 29.73C29.4132 29.9566 29.1056 30.0838 28.785 30.0838C28.4644 30.0838 28.1569 29.9566 27.93 29.73L26.21 28V34.77C26.21 35.0909 26.0825 35.3987 25.8556 35.6256C25.6287 35.8525 25.3209 35.98 25 35.98C24.6791 35.98 24.3713 35.8525 24.1444 35.6256C23.9175 35.3987 23.79 35.0909 23.79 34.77V28L22.07 29.69C21.8432 29.9166 21.5356 30.0438 21.215 30.0438C20.8944 30.0438 20.5869 29.9166 20.36 29.69C20.246 29.5808 20.1552 29.4496 20.0932 29.3044C20.0312 29.1592 19.9993 29.0029 19.9993 28.845C19.9993 28.6871 20.0312 28.5308 20.0932 28.3856C20.1552 28.2404 20.246 28.1092 20.36 28L24.14 24.27C24.3699 24.0452 24.6786 23.9194 25 23.9194C25.3215 23.9194 25.6302 24.0452 25.86 24.27L29.64 28C29.7604 28.1096 29.8566 28.2432 29.9224 28.3922C29.9882 28.5411 30.0222 28.7022 30.0222 28.865C30.0222 29.0278 29.9882 29.1889 29.9224 29.3378C29.8566 29.4868 29.7604 29.6203 29.64 29.73Z"
        fill={color}
      />
      <path
        d="M42.36 17.36L38.36 14.72V8.24C38.36 7.94296 38.242 7.65808 38.0319 7.44804C37.8219 7.238 37.537 7.12 37.24 7.12H31.67C31.3729 7.12 31.0881 7.238 30.878 7.44804C30.668 7.65808 30.55 7.94296 30.55 8.24V9.49L25.6 6.2C25.405 6.06845 25.1752 5.99816 24.94 5.99816C24.7048 5.99816 24.4749 6.06845 24.28 6.2L7.52998 17.36C7.36556 17.4696 7.23102 17.6184 7.13849 17.793C7.04596 17.9675 6.99836 18.1624 6.99998 18.36V42.8C6.99998 42.9576 7.03102 43.1136 7.09132 43.2592C7.15163 43.4048 7.24002 43.5371 7.35145 43.6485C7.46288 43.76 7.59517 43.8484 7.74076 43.9087C7.88635 43.969 8.04239 44 8.19998 44H41.68C41.8376 44 41.9936 43.969 42.1392 43.9087C42.2848 43.8484 42.4171 43.76 42.5285 43.6485C42.6399 43.5371 42.7283 43.4048 42.7886 43.2592C42.8489 43.1136 42.88 42.9576 42.88 42.8V18.35C42.8802 18.1552 42.8329 17.9632 42.7423 17.7907C42.6517 17.6182 42.5205 17.4704 42.36 17.36ZM39.64 40.76H10.24V20H39.64V40.76Z"
        fill={color}
      />
    </svg>
  );
};

IconAtticFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconAtticFilled.propTypes = {
  color: string,
  className: string,
};

export default IconAtticFilled;
