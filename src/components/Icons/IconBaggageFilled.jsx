import React from 'react';
import { string } from 'prop-types';

const IconBaggageFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>baggage</title>
      <path
        d="M10,16h5a0,0,0,0,1,0,0V39a0,0,0,0,1,0,0H10a1,1,0,0,1-1-1V17A1,1,0,0,1,10,16Z"
        fill={color}
      />
      <path
        d="M35,16h5a1,1,0,0,1,1,1V38a1,1,0,0,1-1,1H35a0,0,0,0,1,0,0V16a0,0,0,0,1,0,0Z"
        fill={color}
      />
      <path
        d="M29,16V12a1,1,0,0,0-1-1H22a1,1,0,0,0-1,1v4H17V39H33V16Zm-6-2.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V16H23Z"
        fill={color}
      />
    </svg>
  );
};

IconBaggageFilled.defaultProps = {
  color: 'black',
};

IconBaggageFilled.propTypes = {
  color: string,
  className: string,
};

export default IconBaggageFilled;
