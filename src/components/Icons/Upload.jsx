import React from 'react';
import { number, string } from 'prop-types';

const Upload = ({ className, width, height }) => {
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
        d="M15.5521 5.67125C13.5421 3.66372 11.6325 1.75657 9.87375 -1.71358e-05C8.0647 1.80676 6.15515 3.68881 4.24561 5.57087C5.30088 5.57087 6.45666 5.57087 7.81345 5.57087C7.81345 6.62482 7.81345 7.60349 7.81345 8.58216C7.81344 10.1631 7.81344 11.7691 7.81344 13.35C7.81344 14.2283 8.24058 14.6549 9.11998 14.6549C9.54711 14.6549 9.94912 14.6298 10.3763 14.6549C11.4567 14.7302 11.8587 14.1781 11.8587 13.1493C11.8335 10.6901 11.8587 8.23085 11.8587 5.67125C13.115 5.67125 14.321 5.67125 15.5521 5.67125Z"
        fill="#C1C1C1"
      />
      <path
        d="M20 20.0081C20 19.3808 20 18.8287 20 18.2014C13.3668 18.2014 6.73367 18.2014 0 18.2014C0 18.7534 0 19.3557 0 20.0081C6.65829 20.0081 13.3166 20.0081 20 20.0081Z"
        fill="#C1C1C1"
      />
    </svg>
  );
};

Upload.defaultProps = {
  width: 20,
  height: 21,
};

Upload.propTypes = {
  className: string,
  width: number,
  height: number,
};

export default Upload;
