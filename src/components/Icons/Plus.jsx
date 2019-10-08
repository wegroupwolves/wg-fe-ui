import React from 'react';
import { string } from 'prop-types';

const Plus = ({ className, width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <line
        x1="9.57129"
        y1="4.37114e-08"
        x2="9.57129"
        y2="20"
        stroke="#C1C1C1"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="10.5238"
        x2="-8.74228e-08"
        y2="10.5238"
        stroke="#C1C1C1"
        strokeWidth="2"
      />
    </svg>
  );
};

Plus.propTypes = {
  className: string,
};

export default Plus;
