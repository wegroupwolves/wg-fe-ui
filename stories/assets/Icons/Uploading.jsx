import React from 'react';
import { string } from 'prop-types';

const Uploading = ({ className, width = 14, height = 19 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        d="M10.4451 4.16635H13.4666V18.3547H0.5V0.5H9.70622V3.43346C9.70622 3.84905 10.0481 4.16635 10.4451 4.16635ZM8.88302 9.36858C9.19652 9.36858 9.51486 9.25226 9.75945 9.01379C10.2519 8.53367 10.2519 7.74953 9.75945 7.2694L7.86024 5.41768C7.37489 4.94446 6.59221 4.94446 6.10686 5.41768L4.20766 7.2694C3.71522 7.74953 3.71522 8.53367 4.20766 9.01379C4.62399 9.41972 5.25911 9.47745 5.73766 9.18696V12.5638C5.73766 13.2546 6.3085 13.7913 6.98382 13.7913C7.66013 13.7913 8.22997 13.2537 8.22997 12.5638V9.18682C8.4306 9.30845 8.6581 9.36858 8.88302 9.36858Z"
        fill="#5B5550"
        stroke="#5B5550"
      />
      <path
        d="M11.7808 1.18557L12.7377 2.11863H11.7808V1.18557Z"
        fill="#5B5550"
        stroke="#5B5550"
      />
    </svg>
  );
};

Uploading.propTypes = {
  className: string
};

export default Uploading;
