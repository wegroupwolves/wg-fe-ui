import React from 'react';
import { string } from 'prop-types';

const IconNewCarFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M37.93,19.48l-.26-.08-.08-.26-.11-.38-.11.38-.08.26-.26.08-.38.11.38.12.26.07.08.26.11.38.11-.38.08-.26.26-.07.38-.12Zm0,0-.26-.08-.08-.26-.11-.38-.11.38-.08.26-.26.08-.38.11.38.12.26.07.08.26.11.38.11-.38.08-.26.26-.07.38-.12ZM16.48,13,10.06,24H5.48a3.5,3.5,0,0,0,0,7H7.94a3.45,3.45,0,0,0,2.48-1l1.24-1.23L16.48,37H46V13ZM9,28.56A1.52,1.52,0,0,1,7.94,29H5.48a1.5,1.5,0,0,1,0-3h4.58l.56.95ZM14,27a2.09,2.09,0,0,1-.51-.07l1.22-1.22a1,1,0,0,0,.21-1.09A1,1,0,0,0,14,24H12.26A2,2,0,1,1,14,27Zm15.19,5.93a.11.11,0,0,1-.2,0l-1.79-6-6-1.8a.1.1,0,0,1,0-.2l6-1.8,1.79-6a.11.11,0,0,1,.2,0l1.8,6,6,1.8a.1.1,0,0,1,0,.2l-6,1.8ZM40,30.53l-1.89.56L37.51,33a0,0,0,0,1-.06,0l-.56-1.89L35,30.53a0,0,0,0,1,0-.06l1.89-.56L37.45,28a0,0,0,0,1,.06,0l.56,1.89,1.89.56A0,0,0,0,1,40,30.53Zm0-10.91-1.89.57-.56,1.88s0,0,0,0,0,0,0,0l-.56-1.88L35,19.62a0,0,0,0,1,0-.06L36.89,19l.56-1.88a0,0,0,1,1,.06,0L38.07,19l1.89.56A0,0,0,0,1,40,19.62Zm-2.29-.22-.08-.26-.11-.38-.11.38-.08.26-.26.08-.38.11.38.12.26.07.08.26.11.38.11-.38.08-.26.26-.07.38-.12-.38-.11Z"
        fill={color}
      />
    </svg>
  );
};

IconNewCarFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconNewCarFilled.propTypes = {
  color: string,
  className: string,
};

export default IconNewCarFilled;
