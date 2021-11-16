import * as React from 'react';
import { string, number } from 'prop-types';

const IconEmptyCircle = ({ className, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 39c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14zm0 4c9.941 0 18-8.059 18-18S34.941 7 25 7 7 15.059 7 25s8.059 18 18 18z"
        fill={color}
      />
    </svg>
  );
};

IconEmptyCircle.defaultProps = {
  color: 'black',
  size: 30,
};

IconEmptyCircle.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconEmptyCircle;
