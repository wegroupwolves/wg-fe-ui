import React from 'react';
import { string } from 'prop-types';

const IconBreadCrumbChevronRight = ({ className, color, size }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.7 3.4L6.3 6 3.7 8.6"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

IconBreadCrumbChevronRight.defaultProps = {
  color: 'black',
  size: 30,
};

IconBreadCrumbChevronRight.propTypes = {
  color: string,
  className: string,
};

export default IconBreadCrumbChevronRight;
