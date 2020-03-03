import React from 'react';
import { string } from 'prop-types';

const IconActionEye = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Eye</title>
      <path
        d="M25 13C17 13 9.55 18 7 25C9.55 32 17 37 25 37C33 37 40.45 32 43 25C40.45 18 33 13 25 13ZM25 34C23.22 34 21.4799 33.4722 19.9999 32.4832C18.5198 31.4943 17.3663 30.0887 16.6851 28.4442C16.0039 26.7996 15.8257 24.99 16.1729 23.2442C16.5202 21.4984 17.3774 19.8947 18.636 18.636C19.8947 17.3774 21.4984 16.5202 23.2442 16.1729C24.99 15.8257 26.7996 16.0039 28.4442 16.6851C30.0887 17.3663 31.4943 18.5198 32.4832 19.9999C33.4722 21.4799 34 23.22 34 25C34 27.3869 33.0518 29.6761 31.364 31.364C29.6761 33.0518 27.3869 34 25 34Z"
        fill={color}
      />
      <path
        d="M25 30C27.7614 30 30 27.7614 30 25C30 22.2386 27.7614 20 25 20C22.2386 20 20 22.2386 20 25C20 27.7614 22.2386 30 25 30Z"
        fill={color}
      />
    </svg>
  );
};

IconActionEye.defaultProps = {
  color: 'black',
};

IconActionEye.propTypes = {
  color: string,
  className: string,
};

export default IconActionEye;
