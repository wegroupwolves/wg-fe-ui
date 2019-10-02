import React from 'react';
import { string } from 'prop-types';

const BackArrow = ({ className, width = 13, height = 22 }) => {
  return (
    <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}    
    >
        <path d="M12 1L2 11L12 21" stroke="#505050" stroke-width="2"/>
    </svg>

  );
};

BackArrow.propTypes = {
  className: string
};

export default BackArrow;
