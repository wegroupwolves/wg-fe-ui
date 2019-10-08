import React from 'react';
import { string } from 'prop-types';

const Loupe = ({ className, width = 20, height = 21 }) => {
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
      <path d="M16.4552 11.0274C18.2782 8.77376 17.9289 5.46981 15.6756 3.64706C13.422 1.82405 10.1183 2.173 8.29533 4.4266C6.6627 6.44486 6.77269 9.30629 8.43281 11.1914L4.68856 15.82C4.38068 16.2006 4.43962 16.7586 4.82022 17.0665C5.20083 17.3744 5.75882 17.3155 6.06671 16.9349L9.81095 12.3062C12.001 13.5356 14.8226 13.0456 16.4552 11.0274ZM10.1311 10.5012C8.59887 9.26177 8.36155 7.01503 9.60101 5.48281C10.8405 3.95059 13.0869 3.71302 14.6194 4.95274C16.152 6.19246 16.389 8.43894 15.1495 9.97116C13.91 11.5034 11.6633 11.7407 10.1311 10.5012Z" fill="white"/>
    </svg>
  );
};

Loupe.propTypes = {
  className: string
};

export default Loupe;
