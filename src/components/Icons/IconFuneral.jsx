import React from 'react';
import { string } from 'prop-types';

const IconFullscreen = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M25 43H10c-2 0-1.5-1.667-1-2.5.554-1.422 2.456-4.267 5.626-4.267.53 0 1.044.082 1.562.165a1.672 1.672 0 001.687-.759C18.979 33.925 20.98 31 25 31s6.021 2.925 7.125 4.639a1.672 1.672 0 001.687.759c.518-.083 1.033-.165 1.562-.165 3.17 0 5.072 2.845 5.626 4.267.5.833 1 2.5-1 2.5H25z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25 7c7.18 0 13 3.134 13 7v19.953a5.162 5.162 0 00-2.626-.72c-.53 0-1.044.082-1.562.165a1.672 1.672 0 01-1.687-.759C31.021 30.925 29.02 28 25 28s-6.021 2.925-7.125 4.639a1.672 1.672 0 01-1.687.759c-.518-.083-1.033-.165-1.562-.165-1.003 0-1.88.285-2.626.72V14c0-3.866 5.82-7 13-7zm-7 8a2 2 0 012-2h10a2 2 0 110 4H20a2 2 0 01-2-2zm0 4a2 2 0 100 4h14a2 2 0 100-4H18z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

IconFullscreen.defaultProps = {
  color: 'black',
};

IconFullscreen.propTypes = {
  color: string,
  className: string,
};

export default IconFullscreen;
