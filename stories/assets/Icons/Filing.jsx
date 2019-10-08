import React from 'react';
import { string } from 'prop-types';

const Filing = ({ className, width = 24, height = 15 }) => {
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
        d="M1.18025 13.1943H5.8548C6.34519 13.1943 6.74257 13.5818 6.74257 14.0599C6.74257 14.538 6.34519 14.9255 5.8548 14.9255H1.18025C0.689865 14.9255 0.29248 14.538 0.29248 14.0599C0.29248 13.5818 0.689865 13.1943 1.18025 13.1943Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2397 0.220973L19.1733 1.2607C19.092 1.34004 19.092 1.46885 19.1733 1.5482L22.1944 4.49375C22.2758 4.57309 22.4079 4.57309 22.4893 4.49375L23.5557 3.45402C23.7591 3.25566 23.7591 2.93416 23.5557 2.73579L20.9769 0.221488C20.7729 0.022611 20.4432 0.0226105 20.2397 0.220973Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2195 5.44378L18.1984 2.49823C18.117 2.41888 17.9849 2.41888 17.9035 2.49823L8.83504 11.3405C8.80069 11.374 8.77903 11.4183 8.7748 11.4657L8.47254 14.706C8.46091 14.8322 8.56924 14.9384 8.69871 14.9265L12.0971 14.6251L21.2195 5.73076C21.3009 5.65193 21.3009 5.52312 21.2195 5.44378Z"
        fill="white"
      />
    </svg>
  );
};

Filing.propTypes = {
  className: string
};

export default Filing;
