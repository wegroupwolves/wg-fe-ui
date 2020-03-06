import React from 'react';
import { string } from 'prop-types';

const IconDryRotFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>dry rot </title>
      <path
        d="M15,8.5V19.78a.5.5,0,0,0,.17.37l3,2.65a.5.5,0,0,0,.51.09l2.1-.8a.48.48,0,0,1,.45.05l2,1.34a.5.5,0,0,0,.78-.41V8.5a.5.5,0,0,0-.5-.5h-8A.5.5,0,0,0,15,8.5Z"
        fill={color}
      />
      <path
        d="M21.41,25.14l2.25.75a.5.5,0,0,1,.34.47V41.5a.5.5,0,0,1-.5.5h-8a.5.5,0,0,1-.5-.5V27.62a.5.5,0,0,1,.61-.48l3.51.78a.49.49,0,0,0,.55-.27l1.14-2.26A.5.5,0,0,1,21.41,25.14Z"
        fill={color}
      />
      <path
        d="M26,8.5V23.63a.51.51,0,0,0,.36.48l2.6.77a.49.49,0,0,0,.59-.28l1.85-4.09a.49.49,0,0,1,.71-.22l2.14,1.26a.5.5,0,0,0,.75-.43V8.5a.5.5,0,0,0-.5-.5h-8A.5.5,0,0,0,26,8.5Z"
        fill={color}
      />
      <path
        d="M32.54,24.5l2.37,3.37a.5.5,0,0,1,.09.29V41.5a.5.5,0,0,1-.5.5h-8a.5.5,0,0,1-.5-.5V26.67a.5.5,0,0,1,.64-.48l2.44.72a.49.49,0,0,0,.51-.14l2.18-2.32A.5.5,0,0,1,32.54,24.5Z"
        fill={color}
      />
    </svg>
  );
};

IconDryRotFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDryRotFilled.propTypes = {
  color: string,
  className: string,
};

export default IconDryRotFilled;
