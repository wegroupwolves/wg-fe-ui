import React from 'react';
import { string } from 'prop-types';

const IconLiabilitybuildingFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>liability building</title>
      <path
        d="M34.12,26.61a3.81,3.81,0,0,1,1.37,4.26,4.27,4.27,0,0,1-.29.65l7.5-1.07.3,0V20.17a.51.51,0,0,0-.21-.41L42,19.19V16.5a.51.51,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5V17l-2.71-1.95a.51.51,0,0,0-.58,0l-6.5,4.67a.51.51,0,0,0-.21.41v2.72l3.18,2.32Z"
        fill={color}
      />
      <path
        d="M43.9,32.32l-.3,0-.6.09L32,34l-1-.43-2-.86-3.42-1.46A1,1,0,0,1,26,29.42a1.06,1.06,0,0,1,.34.06l2.71,1,2,.75.26.1a1.74,1.74,0,0,0,.63.11,1.78,1.78,0,0,0,1-3.23L31,26.82c-.62-.46-1.31-.95-2-1.45l-2.71-2a7.58,7.58,0,0,0-7.1-1L15.52,23.8a3,3,0,0,1-1.08.2H9V22.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V34h5.59a2.45,2.45,0,0,1,.8.14L31,39.82A3.18,3.18,0,0,0,32,40a3.06,3.06,0,0,0,1-.16L39.25,38,43,36.89l1.49-.44a2.11,2.11,0,0,0-.59-4.13Z"
        fill={color}
      />
    </svg>
  );
};

IconLiabilitybuildingFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconLiabilitybuildingFilled.propTypes = {
  color: string,
  className: string,
};

export default IconLiabilitybuildingFilled;
