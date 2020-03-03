import React from 'react';
import { string } from 'prop-types';

const IconGardenFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Garden</title>
      <path
        d="M36.64 38.72C32.64 38.72 31.28 41.37 31.28 41.37C31.28 39.57 28.28 36.06 25.93 36.06V30.78L33.93 22.78H43.29C43.29 20.11 41.38 18.78 40.63 18.78H46C45.9097 17.0423 45.1755 15.4005 43.9405 14.1748C42.7055 12.9491 41.0583 12.2272 39.32 12.15C39.32 10.15 34.9 8.55 32.64 9.49C32.63 6.86 28.58 5 25.25 5C21.92 5 17.89 6.9 17.89 9.52C17.89 9.52 12.89 9.28 11.2 13.52C10.0278 13.8269 8.99425 14.522 8.26782 15.4917C7.54139 16.4615 7.16498 17.6488 7.19998 18.86H16.58L23.28 25.47V33.47C15.28 33.47 13.92 38.78 13.92 38.78C9.91998 38.78 5.91998 41.47 5.91998 44.09H42C42 44.09 42 38.73 36.64 38.72ZM25.93 18.78H31.28C30.4867 19.1055 29.8083 19.6597 29.3311 20.372C28.8538 21.0843 28.5993 21.9226 28.6 22.78H31.28L25.93 28.07V18.78ZM19.25 18.78H23.25V22.78L19.25 18.78Z"
        fill={color}
      />
    </svg>
  );
};

IconGardenFilled.defaultProps = {
  color: 'black',
};

IconGardenFilled.propTypes = {
  color: string,
  className: string,
};

export default IconGardenFilled;
