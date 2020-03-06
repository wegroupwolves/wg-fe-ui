import React from 'react';
import { string } from 'prop-types';

const IconMechanicalBreakdownFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>mechanical breakdown</title>
      <path
        d="M40,15.09a5.75,5.75,0,0,0,2-4.32A5.9,5.9,0,0,0,31.39,7.3a3.1,3.1,0,0,0-1.18-.23,3.17,3.17,0,0,0-.66,6.28A3.66,3.66,0,0,0,29.14,15a3.7,3.7,0,0,0,3.36,3.66,4.08,4.08,0,0,0,1.17,2,3.17,3.17,0,0,0-.24,1.2,3.05,3.05,0,0,0,.06.6,9.06,9.06,0,0,1-1.67,1.72l-2.54,2a.42.42,0,0,0,.33.74L32,26.61A10.88,10.88,0,0,0,36.32,25c.11,0,.21,0,.32,0a3.16,3.16,0,0,0,3-4.37A4.14,4.14,0,0,0,40,15.09Z"
        fill={color}
      />
      <path
        d="M32.12,29.65c-.12-.23-.44-.83-1-.83L17,28.8a.27.27,0,0,1-.13-.51L28.63,22a.38.38,0,0,0-.18-.71h0A21.72,21.72,0,0,0,19,23.43l-3.72,1.8a.53.53,0,0,1-.61-.18l-3.38-4.49a.64.64,0,0,0-.38-.25L5.73,19.23a.53.53,0,0,0-.65.52L5,38.44a.55.55,0,0,0,.54.55H16.06a5.51,5.51,0,0,0,11,0h4a1.24,1.24,0,0,0,1.2-1,41.42,41.42,0,0,0,1-5.24A10.34,10.34,0,0,0,32.12,29.65ZM24.55,39a3.07,3.07,0,0,1-6,0,4.34,4.34,0,0,1-.05-.63,3.06,3.06,0,1,1,6.12,0A4.34,4.34,0,0,1,24.55,39Z"
        fill={color}
      />
    </svg>
  );
};

IconMechanicalBreakdownFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconMechanicalBreakdownFilled.propTypes = {
  color: string,
  className: string,
};

export default IconMechanicalBreakdownFilled;
