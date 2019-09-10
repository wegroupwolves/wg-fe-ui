import React from 'react';
import { string } from 'prop-types';

const Checkmark = ({ color, className }) => (
  <svg
    className={className}
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2848 1L4.68936 9.71536L1 5.71879"
      stroke={color}
      style={{ strokeWidth: 2.19416 }}
    />
  </svg>
);

Checkmark.propTypes = {
  className: string,
  color: string.isRequired,
};

export default Checkmark;
