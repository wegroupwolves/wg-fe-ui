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
        d="M14.875 11.613a4.275 4.275 0 00-4.275 4.274v12.15a4.275 4.275 0 004.275 4.276h4.05a1.8 1.8 0 011.273.527L25 37.642l4.802-4.802a1.8 1.8 0 011.273-.528h4.05a4.275 4.275 0 004.275-4.274v-12.15a4.275 4.275 0 00-4.275-4.275h-20.25zm-5.568-1.294a7.875 7.875 0 015.568-2.306h20.25A7.875 7.875 0 0143 15.887v12.15a7.875 7.875 0 01-7.875 7.876h-3.304l-5.548 5.547a1.8 1.8 0 01-2.546 0l-5.548-5.547h-3.304A7.875 7.875 0 017 28.038v-12.15c0-2.09.83-4.092 2.307-5.569z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M15.1 17.913a1.8 1.8 0 011.8-1.8h16.2a1.8 1.8 0 010 3.6H16.9a1.8 1.8 0 01-1.8-1.8zM15.1 26.013a1.8 1.8 0 011.8-1.8h12.15a1.8 1.8 0 010 3.6H16.9a1.8 1.8 0 01-1.8-1.8z"
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
