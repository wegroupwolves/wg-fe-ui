import React from 'react';
import { func, number, string } from 'prop-types';

const Close = ({ className, width, height, fill, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M9.86035 1L1.10081 10.3355M1 1.09961L9.9641 10.2311"
        stroke="#505050"
        strokeWidth="2.22575"
      />
    </svg>
  );
};

Close.defaultProps = {
  width: 11,
  height: 12,
  fill: 'none',
};

Close.propTypes = {
  width: number,
  height: number,
  fill: string,
  className: string,
  onClick: func,
};

export default Close;
