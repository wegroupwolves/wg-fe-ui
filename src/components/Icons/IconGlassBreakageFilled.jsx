import React from 'react';
import { string } from 'prop-types';

const IconGlassBreakageFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M26,32.37V40.5a.5.5,0,0,0,.5.5h3A2.5,2.5,0,0,1,32,43.5h0a.5.5,0,0,1-.5.5h-13a.5.5,0,0,1-.5-.5h0A2.5,2.5,0,0,1,20.5,41h3a.5.5,0,0,0,.5-.5V32.37a.5.5,0,0,0-.43-.49A9,9,0,0,1,16,23V9.5a.5.5,0,0,1,.5-.5h5.19a.51.51,0,0,1,.45.28l1.75,3.5a.49.49,0,0,1,0,.44l-1.77,3.54a.49.49,0,0,0,0,.47l2.57,4.5a.5.5,0,0,0,.93-.32l-.6-4.2a.51.51,0,0,1,.09-.38l2.78-3.7a.51.51,0,0,0,.1-.3V9.5a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5V23a9,9,0,0,1-7.57,8.88A.5.5,0,0,0,26,32.37Z"
        fill={color}
      />
    </svg>
  );
};

IconGlassBreakageFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconGlassBreakageFilled.propTypes = {
  color: string,
  className: string,
};

export default IconGlassBreakageFilled;
