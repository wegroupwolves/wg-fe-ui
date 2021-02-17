import React from 'react';
import { string, number } from 'prop-types';

const IconNotificationBellFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <path
        d="M28.4001 37C28.4001 38.1 26.8001 39 24.9001 39C23.0001 39 21.4001 38.1 21.4001 37H28.4001Z"
        fill={color}
      />
      <path
        d="M37.2002 34.5C35.8002 32.5 33.6002 28.8 33.6002 26C33.6002 22 34.6002 14.2 27.8002 14C27.8002 13.9 27.8002 13.7 27.8002 13.5C27.8002 11.5 26.0002 11.1 25.3002 11H25.1002C24.4002 11.1 22.6002 11.5 22.6002 13.5C22.6002 13.7 22.6002 13.9 22.6002 14C15.8002 14.2 16.8002 22 16.8002 26C16.8002 28.7 14.6002 32.4 13.2002 34.5C12.7002 35.1 13.2002 36 14.0002 36H36.4002C37.2002 36 37.6002 35.1 37.2002 34.5Z"
        fill={color}
      />
    </svg>
  );
};

IconNotificationBellFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconNotificationBellFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconNotificationBellFilled;
