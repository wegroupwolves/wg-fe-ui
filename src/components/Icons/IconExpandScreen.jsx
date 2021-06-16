import React from 'react';
import { string, number } from 'prop-types';

const IconExpandScreen = ({ className, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.955 3.36h-4.53a.663.663 0 100 1.326h2.939l-5.281 5.281a.663.663 0 10.928.928l5.281-5.281v2.939a.663.663 0 101.326 0v-4.53a.663.663 0 00-.663-.663zM10.895 12.994a.662.662 0 00-.928.023L4.73 18.364l-.022-2.939a.663.663 0 10-1.326.022l.066 4.53a.663.663 0 00.663.663l4.53-.066a.663.663 0 10-.022-1.326l-2.939.044 5.215-5.347a.664.664 0 000-.95z"
        fill={color}
      />
    </svg>
  );
};

IconExpandScreen.defaultProps = {
  color: 'black',
  size: 30,
};

IconExpandScreen.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconExpandScreen;
