import React from 'react';
import { string } from 'prop-types';

const IconAssistancePersonFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>assistance person</title>
      <path d="M36.39,33.86a.05.05,0,0,1,0,0" fill={color} />
      <path d="M32.8,36.39a.05.05,0,0,1,0,0" fill={color} />
      <path
        d="M33.34,38.49,27,32.74a.57.57,0,0,0-.73,0l-2.61,2a2,2,0,0,1-2.69-.28l-2-2.34A23.45,23.45,0,0,1,14.27,23l-.76-2.93a1.9,1.9,0,0,1,1.36-2.3l3.21-.87a.55.55,0,0,0,.4-.59l-.95-8.44a.53.53,0,0,0-.44-.47,16.27,16.27,0,0,0-3.6-.4,10.09,10.09,0,0,0-3,1.49c-1.39,1-3.88,4.15-3.45,10.3.38,5.47,3.56,11.74,3.56,11.74s3.27,6.22,7.54,9.76c4.8,4,8.91,3.91,10.51,3.38a10.27,10.27,0,0,0,3-1.49,16.21,16.21,0,0,0,1.81-3.08A.54.54,0,0,0,33.34,38.49Z"
        fill={color}
      />
      <path
        d="M39,26V43a1,1,0,0,1-1,1H32.6a3.35,3.35,0,0,0,.47-.38c.21-.2.86-.84,2.2-3.63a2.51,2.51,0,0,0-.58-3l-6.38-5.75A2.59,2.59,0,0,0,25,31.14L23.93,32V26a3,3,0,0,1,3-3H36A3,3,0,0,1,39,26Z"
        fill={color}
      />
      <ellipse cx="31.46" cy="18.5" rx="3.52" ry="3.5" fill={color} />
    </svg>
  );
};

IconAssistancePersonFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconAssistancePersonFilled.propTypes = {
  color: string,
  className: string,
};

export default IconAssistancePersonFilled;
