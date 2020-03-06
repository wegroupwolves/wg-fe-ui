import React from 'react';
import { string } from 'prop-types';

const IconOilFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>oil (environmental)</title>
      <path
        d="M30,13H23.72A2,2,0,0,0,20,14V32a2,2,0,0,0,3.73,1H30a1,1,0,0,0,1-1V14A1,1,0,0,0,30,13Z"
        fill={color}
      />
      <path
        d="M17,13H10.72A2,2,0,0,0,7,14V32a2,2,0,0,0,3.73,1H17a1,1,0,0,0,1-1V14A1,1,0,0,0,17,13Z"
        fill={color}
      />
      <path
        d="M38,24H37V14a2,2,0,0,0-4,0V32a2,2,0,0,0,4,0V29h1a1,1,0,0,0,1-1V25A1,1,0,0,0,38,24Z"
        fill={color}
      />
      <path
        d="M43,35a4,4,0,0,1-3,3.87,5.49,5.49,0,0,1-9.86,3A3.57,3.57,0,0,1,29,42a4,4,0,0,1-3.5-2.08A14.85,14.85,0,0,1,24,40c-4.41,0-8-2-8-4.5a4,4,0,0,1,0-.5H17a3,3,0,0,0,1.8-.61,4,4,0,0,0,5.83.61H30a3,3,0,0,0,1.77-.58l0,0c.1.12.19.24.3.35a1.14,1.14,0,0,0,.25.24,3.43,3.43,0,0,0,1.11.7,1.78,1.78,0,0,0,.29.12l.16,0a1.26,1.26,0,0,0,.25.07,2.32,2.32,0,0,0,.38.06A3.44,3.44,0,0,0,35,36a4,4,0,0,0,4-4V31A4,4,0,0,1,43,35Z"
        fill={color}
      />
      <path
        d="M33.8,35.39a.05.05,0,0,1,0,0M32,12H26.63a4,4,0,0,0-5.83.61A3,3,0,0,1,22,15a2,2,0,0,1,2-2,2,2,0,0,1,1.72,1H32a1,1,0,0,1,1,1,4,4,0,0,1,.8-2.39A3,3,0,0,0,32,12Z"
        fill={color}
      />
    </svg>
  );
};

IconOilFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconOilFilled.propTypes = {
  color: string,
  className: string,
};

export default IconOilFilled;
