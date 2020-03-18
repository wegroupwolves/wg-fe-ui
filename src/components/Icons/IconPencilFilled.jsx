import React from 'react';
import { string, int } from 'prop-types';

const IconPencilFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconPencilFilled</title>
      <path
        d="M26.1197 18.6872L31.3128 23.8816L19.1931 36H14V30.8057L26.1197 18.686V18.6872ZM27.8507 16.9562L30.4472 14.3584C30.6769 14.1289 30.9882 14 31.3128 14C31.6374 14 31.9487 14.1289 32.1782 14.3584L35.6415 17.8217C35.8711 18.0513 36 18.3626 36 18.6872C36 19.0119 35.8711 19.3232 35.6415 19.5528L33.0438 22.1493L27.8507 16.9562Z"
        fill={color}
      />
    </svg>
  );
};

IconPencilFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconPencilFilled.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default IconPencilFilled;
