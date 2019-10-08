import React from 'react';
import { string } from 'prop-types';

const Repair = ({ className, width = 10, height = 23 }) => {
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
      <path
        d="M6.70721 5.56264H7.20721V5.06264V0.865127C8.36013 1.69132 9.1305 3.10293 9.1305 4.7204C9.1305 6.64993 8.03417 8.28603 6.50034 8.98527L6.20774 9.11866V9.44023V20.1155C6.20774 21.0037 5.53942 21.6683 4.78143 21.6683C4.02307 21.6683 3.35512 21.0033 3.35512 20.1155V9.40731V9.09146L3.06989 8.95578C1.56705 8.24093 0.5 6.62319 0.5 4.7204C0.5 3.13528 1.24001 1.74735 2.35512 0.914939V5.06264V5.56264H2.85512H6.70721Z"
        fill="#5B5550"
        stroke="#5B5550"
      />
    </svg>
  );
};

Repair.propTypes = {
  className: string
};

export default Repair;
