import React from 'react';
import { string } from 'prop-types';

const IconActionClose = ({ className, color, size, ...rest }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      {...rest}
    >
      <path
        d="M36 16.93L33.07 14L25 22.07L16.93 14L14 16.93L22.07 25L14 33.07L16.93 36L25 27.93L33.07 36L36 33.07L27.93 25L36 16.93Z"
        fill={color}
      />
    </svg>
  );
};

IconActionClose.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionClose.propTypes = {
  color: string,
  className: string,
};

export default IconActionClose;
