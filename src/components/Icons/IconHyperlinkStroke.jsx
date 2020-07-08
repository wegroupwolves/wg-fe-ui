import React from 'react';
import { string, number } from 'prop-types';

const IconHyperlinkStroke = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <title>IconHyperlinkStroke</title>
      <path
        d="M21.782 26.6107C22.473 27.5355 23.3546 28.3006 24.3671 28.8543C25.3795 29.408 26.499 29.7373 27.6497 29.8198C28.8004 29.9023 29.9554 29.7361 31.0363 29.3325C32.1172 28.9288 33.0987 28.2972 33.9143 27.4805L38.7415 22.6484C40.2071 21.1295 41.018 19.0951 40.9996 16.9835C40.9813 14.8719 40.1352 12.852 38.6435 11.3588C37.1519 9.86563 35.134 9.01865 33.0245 9.0003C30.9151 8.98196 28.8828 9.7937 27.3655 11.2607L24.5979 14.015"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.2179 23.3889C27.5269 22.4642 26.6453 21.699 25.6329 21.1453C24.6205 20.5916 23.501 20.2624 22.3502 20.1799C21.1995 20.0974 20.0446 20.2636 18.9637 20.6672C17.8828 21.0708 16.9012 21.7024 16.0856 22.5192L11.2584 27.3513C9.7929 28.8702 8.98197 30.9045 9.0003 33.0161C9.01863 35.1277 9.86475 37.1476 11.3564 38.6408C12.8481 40.134 14.8659 40.981 16.9754 40.9993C19.0849 41.0177 21.1171 40.2059 22.6345 38.7389L25.386 35.9846"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconHyperlinkStroke.defaultProps = {
  color: 'black',
  size: 30,
};

IconHyperlinkStroke.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconHyperlinkStroke;
