import React from 'react';
import { string } from 'prop-types';

const IconCarFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>IconCarFilled</title>
      <path
        d="M48.14,27.41a1.08,1.08,0,0,0-.78-.64L33,23.72a1.12,1.12,0,0,1-.64-.41l-2.91-3.85a.56.56,0,0,0-.33-.21l-2.52-.45A49.51,49.51,0,0,0,8.12,19l-1.28.26a1.1,1.1,0,0,0-.63.37C5.15,20.86,1,25.8,1,26.89s.64,5.9.94,7.77A1.09,1.09,0,0,0,3,35.57H6.49a4.91,4.91,0,0,0,9.75,0H33.76a4.91,4.91,0,0,0,9.75,0h3.54a1.1,1.1,0,0,0,1.07-.83,35.42,35.42,0,0,0,.88-4.6A11,11,0,0,0,48.14,27.41ZM11.36,37.74a2.72,2.72,0,0,1-2.67-2.17,3.19,3.19,0,0,1,0-.54,2.73,2.73,0,0,1,5.45,0,3.19,3.19,0,0,1-.05.54A2.73,2.73,0,0,1,11.36,37.74Zm27.28,0A2.73,2.73,0,0,1,36,35.57a3.19,3.19,0,0,1-.05-.54,2.73,2.73,0,0,1,5.45,0,3.19,3.19,0,0,1,0,.54A2.72,2.72,0,0,1,38.64,37.74Z"
        fill={color}
      />
    </svg>
  );
};

IconCarFilled.defaultProps = {
  color: 'black',
};

IconCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconCarFilled;
