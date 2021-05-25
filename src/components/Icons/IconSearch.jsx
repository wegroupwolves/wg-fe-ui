import React from 'react';
import { string } from 'prop-types';

const IconSearch = ({ className, color }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M13.2536 19.2267C16.5526 19.2267 19.2269 16.5523 19.2269 13.2534C19.2269 9.95438 16.5526 7.28003 13.2536 7.28003C9.95462 7.28003 7.28027 9.95438 7.28027 13.2534C7.28027 16.5523 9.95462 19.2267 13.2536 19.2267Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7206 20.72L17.4727 17.472"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconSearch.defaultProps = {
  color: 'black',
};

IconSearch.propTypes = {
  color: string,
  className: string,
};

export default IconSearch;
