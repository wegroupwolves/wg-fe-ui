import React from 'react';
import { string, number } from 'prop-types';

const Liability = ({ className, width, height }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0608 27.5388C36.414 25.4928 40.2157 20.3085 40.2157 14.2362C40.2157 6.37376 33.842 0 25.9795 0C18.1171 0 11.7433 6.37376 11.7433 14.2362C11.7433 20.2608 15.4856 25.4113 20.7724 27.49C8.90242 29.858 1.51384e-05 40.4751 1.51384e-05 53.0399V58.301H33.2165C33.8673 58.301 34.3961 57.7722 34.3961 57.1214V54.0897C34.3961 46.835 37.1919 39.8162 42.3351 34.7005C42.5336 34.5019 42.7361 34.3093 42.9386 34.1185C43.1077 33.9613 43.1097 33.6919 42.9367 33.5386C39.6306 30.5869 35.5611 28.4758 31.0608 27.5388Z"
        fill="#CCCCCC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.4671 33.173C69.8376 31.5056 72.942 27.2747 72.942 22.3186C72.942 15.9046 67.7425 10.7051 61.3286 10.7051C54.9146 10.7051 49.7151 15.9046 49.7151 22.3186C49.7151 27.2748 52.8197 31.5058 57.1903 33.1731C47.5585 35.0956 40.3 43.598 40.3 53.7948V57.1214C40.3 57.7721 40.8289 58.301 41.4797 58.301H81.1782C81.829 58.301 82.3579 57.7741 82.3579 57.1214V53.7948C82.3579 43.5978 75.0991 35.0953 65.4671 33.173Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

Liability.defaultProps = {
  width: 83,
  height: 59,
};

Liability.propTypes = {
  width: number,
  height: number,
  className: string,
};

export default Liability;
