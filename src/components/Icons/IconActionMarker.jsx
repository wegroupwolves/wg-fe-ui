import React from 'react';
import { string } from 'prop-types';

const IconActionMarker = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Marker</title>
      <path
        d="M25 10C21.8174 10 18.7652 11.2643 16.5147 13.5147C14.2643 15.7652 13 18.8174 13 22C13 31 25 41 25 41C25 41 37 31 37 22C37 18.8174 35.7357 15.7652 33.4853 13.5147C31.2348 11.2643 28.1826 10 25 10ZM25 29C23.6155 29 22.2622 28.5895 21.111 27.8203C19.9599 27.0511 19.0627 25.9579 18.5328 24.6788C18.003 23.3997 17.8644 21.9922 18.1345 20.6344C18.4046 19.2765 19.0713 18.0292 20.0503 17.0503C21.0292 16.0713 22.2765 15.4046 23.6344 15.1345C24.9922 14.8644 26.3997 15.003 27.6788 15.5328C28.9579 16.0627 30.0511 16.9599 30.8203 18.111C31.5895 19.2622 32 20.6155 32 22C32 23.8565 31.2625 25.637 29.9497 26.9497C28.637 28.2625 26.8565 29 25 29Z"
        fill={color}
      />
    </svg>
  );
};

IconActionMarker.defaultProps = {
  color: 'black',
};

IconActionMarker.propTypes = {
  color: string,
  className: string,
};

export default IconActionMarker;
