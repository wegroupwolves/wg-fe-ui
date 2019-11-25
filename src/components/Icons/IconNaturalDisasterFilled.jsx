import React from 'react';
import { string } from 'prop-types';

const IconNaturalDisasterFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>natural disaster+storm</title>
      <path
        d="M24.25,34.42H15.58a.53.53,0,0,1-.4-.88L26.65,20.33a.53.53,0,0,1,.91.49l-2.38,8.73a.53.53,0,0,0,.51.67h8.67a.53.53,0,0,1,.39.89L22.53,44.2a.53.53,0,0,1-.88-.54l3.09-8.53A.52.52,0,0,0,24.25,34.42Z"
        fill={color}
      />
      <path
        d="M42.46,25.34a1.05,1.05,0,0,1-1,.65H28.34l1.26-4.61a2.56,2.56,0,0,0-.44-2.3,2.65,2.65,0,0,0-4.11-.14l-6.11,7h-10A1.06,1.06,0,0,1,8,25.5a7.3,7.3,0,0,1-1-3.74,7.4,7.4,0,0,1,7.41-7.41,8.11,8.11,0,0,1,.86.05,10.58,10.58,0,0,1,20.11,2.19,7.11,7.11,0,0,1,1.15-.12,6.22,6.22,0,0,1,6.32,5A6.34,6.34,0,0,1,42.46,25.34Z"
        fill={color}
      />
    </svg>
  );
};

IconNaturalDisasterFilled.defaultProps = {
  color: 'black',
};

IconNaturalDisasterFilled.propTypes = {
  color: string,
  className: string,
};

export default IconNaturalDisasterFilled;
