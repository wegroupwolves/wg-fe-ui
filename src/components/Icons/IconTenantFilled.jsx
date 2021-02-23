import React from 'react';
import { string } from 'prop-types';

const IconTenantFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M32,33l-6.42-2.75a1,1,0,0,1-.58-.88h0a1,1,0,0,1,1.29-.89l5,1.87a1.8,1.8,0,0,0,2.33-1.11h0a1.8,1.8,0,0,0-.65-2l-6.65-4.84a7.57,7.57,0,0,0-7.1-1L15.52,22.8a3,3,0,0,1-1.08.2H9V21.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V33h5.59a2.45,2.45,0,0,1,.8.14L31,38.82a3.17,3.17,0,0,0,2,0l11.47-3.39a2.11,2.11,0,0,0,1.51-2h0a2.11,2.11,0,0,0-2.4-2.09Z"
        fill={color}
      />
      <path
        d="M38,25h1.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H38V21.79a5.5,5.5,0,1,0-3,0V29.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5H38Zm-3.92-7.88a2.49,2.49,0,0,1,3-3,2.46,2.46,0,0,1,1.8,1.8,2.49,2.49,0,0,1-3,3A2.46,2.46,0,0,1,34.08,17.12Z"
        fill={color}
      />
    </svg>
  );
};

IconTenantFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconTenantFilled.propTypes = {
  color: string,
  className: string,
};

export default IconTenantFilled;
