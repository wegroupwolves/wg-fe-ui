import React from 'react';
import { string } from 'prop-types';

const IconFamilyFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Family</title>
      <path
        d="M31 33H38C39.3261 33 40.5979 33.5268 41.5355 34.4645C42.4732 35.4021 43 36.6739 43 38V44H26V38C26 36.6739 26.5268 35.4021 27.4645 34.4645C28.4021 33.5268 29.6739 33 31 33Z"
        fill={color}
      />
      <path
        d="M34.5 31C36.9853 31 39 28.9853 39 26.5C39 24.0147 36.9853 22 34.5 22C32.0147 22 30 24.0147 30 26.5C30 28.9853 32.0147 31 34.5 31Z"
        fill={color}
      />
      <path
        d="M28.18 30.52C26.6589 31.093 25.3485 32.1156 24.4231 33.4519C23.4977 34.7882 23.0013 36.3746 23 38V44H7V33C7 30.8783 7.84285 28.8434 9.34315 27.3431C10.8434 25.8429 12.8783 25 15 25H25C25.7126 25.0006 26.422 25.0947 27.11 25.28C27.0328 25.682 26.996 26.0907 27 26.5C26.9967 27.9259 27.4066 29.3221 28.18 30.52Z"
        fill={color}
      />
      <path
        d="M20 23C23.866 23 27 19.866 27 16C27 12.134 23.866 9 20 9C16.134 9 13 12.134 13 16C13 19.866 16.134 23 20 23Z"
        fill={color}
      />
    </svg>
  );
};

IconFamilyFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconFamilyFilled.propTypes = {
  color: string,
  className: string,
};

export default IconFamilyFilled;
