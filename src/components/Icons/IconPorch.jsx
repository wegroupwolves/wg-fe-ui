import React from 'react';
import { string, number } from 'prop-types';

const IconPorch = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconPorch</title>
      <path
        d="M41.5115 20.5209C41.8426 20.5209 42.1418 20.3926 42.3582 20.1853C42.5755 19.9788 42.71 19.6926 42.71 19.3775C42.71 18.7466 42.1728 18.2341 41.5115 18.2341H40.1129H38.1151H34.6833C34.6592 18.2127 34.6333 18.193 34.604 18.1757L21.3099 10.0839C21.2167 10.0271 21.1133 10 21.0081 10C20.9046 10 20.8011 10.0263 20.7097 10.0814L7.2604 18.1774C7.0983 18.2752 7 18.4455 7 18.6298V40.3535H17.9937V28.8216C17.9937 28.6316 18.0971 28.4655 18.2541 28.3709C18.3403 28.3174 18.4438 28.287 18.5533 28.287H23.3094C23.619 28.287 23.869 28.5255 23.869 28.8208V40.3527H41.9909V30.5844H40.1129V20.5209H41.5115ZM34.8635 30.5844V20.5209H38.1151V30.5844H34.8635Z"
        fill={color}
      />
    </svg>
  );
};

IconPorch.defaultProps = {
  color: 'black',
  size: 30,
};

IconPorch.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPorch;
