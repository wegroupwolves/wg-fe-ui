import React from 'react';
import { string, number } from 'prop-types';

const IconInfoFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M25.155 11C17.3371 11 11 17.3371 11 25.155C11 32.9729 17.3371 39.31 25.155 39.31C32.9729 39.31 39.31 32.9729 39.31 25.155C39.31 17.3371 32.9729 11 25.155 11ZM25.155 16.5389C26.1748 16.5389 27.0013 17.3654 27.0013 18.3852C27.0013 19.405 26.1748 20.2315 25.155 20.2315C24.1352 20.2315 23.3087 19.405 23.3087 18.3852C23.3087 17.3654 24.1352 16.5389 25.155 16.5389ZM27.6167 33.1557H26.3859H23.9241H22.6933V31.9248H23.9241V23.9241H22.6933V22.6933H23.9241H26.3859V23.9241V31.9248H27.6167V33.1557Z"
        fill={color}
      />
    </svg>
  );
};

IconInfoFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconInfoFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconInfoFilled;
