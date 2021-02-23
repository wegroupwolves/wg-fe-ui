import React from 'react';
import { string } from 'prop-types';

const IconWitnessFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M25 14C32.43 14 39.41 18.18 43.56 25C39.41 31.82 32.43 36 25 36C17.57 36 10.59 31.82 6.44 25C10.59 18.18 17.57 14 25 14ZM25 11C15.6 11 7.39 16.64 3 25C7.39 33.36 15.6 39 25 39C34.4 39 42.61 33.36 47 25C42.61 16.64 34.4 11 25 11Z"
        fill={color}
      />
      <path
        d="M34 25C34.0009 26.4494 33.6518 27.8775 32.9824 29.163C32.3129 30.4484 31.3429 31.5532 30.1549 32.3834C28.9668 33.2135 27.5958 33.7444 26.1585 33.931C24.7212 34.1175 23.2601 33.9542 21.8995 33.4549C20.5389 32.9556 19.319 32.1351 18.3435 31.0632C17.368 29.9912 16.6659 28.6995 16.2968 27.298C15.9277 25.8964 15.9025 24.4264 16.2234 23.0131C16.5443 21.5997 17.2018 20.2847 18.14 19.18L24 24L21.77 16.61C22.7979 16.2026 23.8943 15.9955 25 16C27.3869 16 29.6761 16.9482 31.364 18.6361C33.0518 20.3239 34 22.6131 34 25Z"
        fill={color}
      />
    </svg>
  );
};

IconWitnessFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconWitnessFilled.propTypes = {
  color: string,
  className: string,
};

export default IconWitnessFilled;
