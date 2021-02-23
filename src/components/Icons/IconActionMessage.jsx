import React from 'react';
import { string } from 'prop-types';

const IconActionMessage = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path d="M25 28L8.17999 13H41.82L25 28Z" fill={color} />
      <path d="M42 16.96V37H8V16.96L25 32.14L42 16.96Z" fill={color} />
    </svg>
  );
};

IconActionMessage.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionMessage.propTypes = {
  color: string,
  className: string,
};

export default IconActionMessage;
