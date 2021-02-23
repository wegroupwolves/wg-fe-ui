import React from 'react';
import { string } from 'prop-types';

const IconSearchCarFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M45.27 41.52L35.14 31.4C36.1354 30.0569 36.9273 28.5742 37.49 27C37.49 26.87 37.59 26.74 37.63 26.61C37.67 26.48 37.8 26.07 37.87 25.8C37.94 25.53 38 25.32 38.06 25.07C38.12 24.82 38.16 24.61 38.2 24.37C38.24 24.13 38.31 23.74 38.35 23.42C38.39 23.1 38.35 23.04 38.42 22.85C38.42 22.33 38.5 21.8 38.5 21.27C38.5 17.9077 37.503 14.6209 35.635 11.8253C33.767 9.02967 31.112 6.85073 28.0056 5.56404C24.8993 4.27735 21.4811 3.9407 18.1835 4.59665C14.8858 5.2526 11.8567 6.87169 9.47919 9.24918C7.1017 11.6267 5.48261 14.6558 4.82666 17.9535C4.17071 21.2511 4.50737 24.6693 5.79406 27.7756C7.08075 30.882 9.25968 33.537 12.0553 35.405C14.851 37.273 18.1377 38.27 21.5 38.27C22.03 38.27 22.56 38.27 23.08 38.19L23.65 38.12C23.97 38.12 24.29 38.03 24.65 37.97L25.35 37.83L26.07 37.64C26.35 37.57 26.62 37.49 26.89 37.4L27.28 37.26C28.8473 36.6955 30.323 35.9037 31.66 34.91L41.73 45.06C42.2003 45.5278 42.8367 45.7903 43.5 45.7903C44.1633 45.7903 44.7997 45.5278 45.27 45.06C45.7354 44.5884 45.9963 43.9525 45.9963 43.29C45.9963 42.6275 45.7354 41.9916 45.27 41.52ZM21.79 33.29C19.6367 33.3395 17.5098 32.8086 15.6324 31.7529C13.755 30.6972 12.1964 29.1556 11.12 27.29H17.55C17.6349 28.0935 17.9393 28.8581 18.43 29.5C18.4609 29.5452 18.4943 29.5886 18.53 29.63C18.6528 29.7828 18.7865 29.9265 18.93 30.06C19.04 30.17 19.16 30.26 19.28 30.36L19.53 30.55C19.7458 30.6895 19.9733 30.81 20.21 30.91H20.26C20.7941 31.1389 21.3689 31.2579 21.95 31.26H22C22.1946 31.2554 22.3886 31.2353 22.58 31.2H22.8C23.7495 31.0269 24.6177 30.5519 25.2753 29.8455C25.933 29.1392 26.345 28.2394 26.45 27.28H29.5C29.6088 27.1046 29.6866 26.9118 29.73 26.71C30.0773 25.3957 30.3345 24.0593 30.5 22.71C30.3638 21.8692 30.1114 21.0513 29.75 20.28C29.6962 20.1396 29.6072 20.0153 29.4917 19.919C29.3761 19.8227 29.2379 19.7576 29.09 19.73L27.68 19.42L16.7 17C16.4793 16.9501 16.284 16.8223 16.15 16.64L13.64 13.25C13.5691 13.1541 13.4662 13.0867 13.35 13.06L12.89 13C14.5812 11.2584 16.7608 10.0708 19.1411 9.59381C21.5214 9.11684 23.9903 9.37302 26.222 10.3285C28.4536 11.284 30.343 12.8939 31.6406 14.9455C32.9382 16.9972 33.5831 19.3942 33.49 21.82C33.3313 24.85 32.0409 27.71 29.8742 29.834C27.7076 31.9581 24.8225 33.1914 21.79 33.29ZM19.5 26.79C19.5 26.2955 19.6466 25.8122 19.9213 25.4011C20.196 24.9899 20.5865 24.6695 21.0433 24.4803C21.5001 24.2911 22.0028 24.2416 22.4877 24.338C22.9727 24.4345 23.4181 24.6726 23.7678 25.0222C24.1174 25.3719 24.3555 25.8173 24.452 26.3023C24.5484 26.7872 24.4989 27.2899 24.3097 27.7467C24.1205 28.2035 23.8001 28.594 23.3889 28.8687C22.9778 29.1434 22.4945 29.29 22 29.29C21.337 29.29 20.7011 29.0266 20.2322 28.5578C19.7634 28.0889 19.5 27.453 19.5 26.79Z"
        fill={color}
      />
    </svg>
  );
};

IconSearchCarFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconSearchCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconSearchCarFilled;
