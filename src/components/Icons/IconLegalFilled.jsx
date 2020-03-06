import React from 'react';
import { string } from 'prop-types';

const IconLegalFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconLegalFilled</title>
      <path
        d="M35.38,14H26V10a1,1,0,0,0-2,0v4H14.62a1,1,0,0,0-.9.55L9,24v.26A5.65,5.65,0,0,0,14,30a5.49,5.49,0,0,0,6-5.47V24l-4-8h8V37H18a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H32a1,1,0,0,0,1-1V38a1,1,0,0,0-1-1H26V16h8l-4,8v.26A5.65,5.65,0,0,0,35,30a5.49,5.49,0,0,0,6-5.47V24l-4.72-9.45A1,1,0,0,0,35.38,14ZM11,24l3.5-7L18,24Zm21,0,3.5-7L39,24Z"
        fill={color}
      />
    </svg>
  );
};

IconLegalFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconLegalFilled.propTypes = {
  color: string,
  className: string,
};

export default IconLegalFilled;
