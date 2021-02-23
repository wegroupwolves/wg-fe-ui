import React from 'react';
import { string } from 'prop-types';

const IconWaterDamageFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M36,16.33V11a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v1.33l-4.45-3a1,1,0,0,0-1.1,0l-14,9.33a1,1,0,0,0-.45.84V40a1,1,0,0,0,1,1H39a1,1,0,0,0,1-1V19.53a1,1,0,0,0-.44-.83ZM12.22,19.92l12.5-8.33a.52.52,0,0,1,.56,0L28.89,14l2.33,1.56a.5.5,0,0,0,.78-.42V12.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v4.63a.5.5,0,0,0,.22.42l3.56,2.37a.5.5,0,0,1,.22.42v3.73A10.39,10.39,0,0,1,31,27c-5,0-7-5-13-5a16.11,16.11,0,0,0-6,1.38v-3A.5.5,0,0,1,12.22,19.92Z"
        fill={color}
      />
    </svg>
  );
};

IconWaterDamageFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconWaterDamageFilled.propTypes = {
  color: string,
  className: string,
};

export default IconWaterDamageFilled;
