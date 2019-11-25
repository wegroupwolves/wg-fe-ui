import React from 'react';
import { string } from 'prop-types';

const IconElectricityFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>electricity</title>
      <path
        d="M23.85,28.5H11.5a.5.5,0,0,1-.38-.82l18-21.5a.5.5,0,0,1,.87.44L26.64,19.88a.5.5,0,0,0,.49.62H39.5a.5.5,0,0,1,.39.81c-2.83,3.54-14.1,17.62-18,22.51a.5.5,0,0,1-.87-.43l3.37-14.27A.51.51,0,0,0,23.85,28.5Z"
        fill={color}
      />
    </svg>
  );
};

IconElectricityFilled.defaultProps = {
  color: 'black',
};

IconElectricityFilled.propTypes = {
  color: string,
  className: string,
};

export default IconElectricityFilled;
