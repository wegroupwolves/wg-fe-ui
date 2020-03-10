import React from 'react';
import { int, string } from 'prop-types';

const Upload = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Upload</title>
      <path
        d="M33.328 18.5034C30.3129 15.4933 27.4486 12.6338 24.8105 10C22.0969 12.709 19.2326 15.531 16.3683 18.3529C17.9512 18.3529 19.6849 18.3529 21.7201 18.3529C21.7201 19.9331 21.7201 21.4005 21.7201 22.8679C21.7201 25.2383 21.7201 27.6464 21.7201 30.0168C21.7201 31.3336 22.3607 31.9733 23.6798 31.9733C24.3205 31.9733 24.9235 31.9357 25.5642 31.9733C27.1848 32.0862 27.7878 31.2584 27.7878 29.7158C27.7501 26.0285 27.7878 22.3412 27.7878 18.5034C29.6722 18.5034 31.4813 18.5034 33.328 18.5034Z"
        fill={color}
      />
      <path
        d="M39.9997 39.9992C39.9997 39.0582 39.9997 38.2301 39.9997 37.2891C30.05 37.2891 20.1004 37.2891 10 37.2891C10 38.1172 10 39.0206 10 39.9992C19.9873 39.9992 29.9747 39.9992 39.9997 39.9992Z"
        fill={color}
      />
    </svg>
  );
};

Upload.defaultProps = {
  color: 'black',
  size: 30,
};

Upload.propTypes = {
  color: string,
  className: string,
  size: int,
};

export default Upload;
