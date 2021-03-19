import React from 'react';
import { string } from 'prop-types';

const IconABS = ({ className, color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 12.5C17.5442 12.5 11.5 18.5442 11.5 26C11.5 33.4558 17.5442 39.5 25 39.5C32.4558 39.5 38.5 33.4558 38.5 26C38.5 18.5442 32.4558 12.5 25 12.5ZM8.5 26C8.5 16.8873 15.8873 9.5 25 9.5C34.1127 9.5 41.5 16.8873 41.5 26C41.5 35.1127 34.1127 42.5 25 42.5C15.8873 42.5 8.5 35.1127 8.5 26Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5645 9.33061C11.1481 9.9185 11.1447 10.8682 10.5568 11.4519C6.81454 15.1674 4.5 20.312 4.5 25.9999C4.5 31.6879 6.81453 36.8325 10.5568 40.548C11.1447 41.1317 11.1481 42.0814 10.5645 42.6693C9.98079 43.2572 9.03104 43.2606 8.44316 42.6769C4.15683 38.4213 1.5 32.5195 1.5 25.9999C1.5 19.4804 4.15683 13.5786 8.44316 9.32299C9.03105 8.73931 9.98079 8.74272 10.5645 9.33061ZM39.4355 9.33061C40.0192 8.74272 40.969 8.73931 41.5568 9.32299C45.8432 13.5786 48.5 19.4804 48.5 25.9999C48.5 32.5195 45.8432 38.4213 41.5568 42.6769C40.969 43.2606 40.0192 43.2572 39.4355 42.6693C38.8519 42.0814 38.8553 41.1317 39.4432 40.548C43.1855 36.8325 45.5 31.6879 45.5 25.9999C45.5 20.312 43.1855 15.1674 39.4432 11.4519C38.8553 10.8682 38.8519 9.9185 39.4355 9.33061Z"
        fill={color}
      />
      <path
        d="M19.732 30H21.532L18.292 21.492H16.372L13.108 30H14.86L15.568 28.056H19.024L19.732 30ZM17.296 23.328L18.472 26.544H16.12L17.296 23.328Z"
        fill={color}
      />
      <path
        d="M22.6445 21.492V30H25.9325C27.5285 30 28.5605 29.004 28.5605 27.624C28.5605 26.568 27.8885 25.812 27.0605 25.608C27.7685 25.368 28.2965 24.66 28.2965 23.784C28.2965 22.464 27.3605 21.492 25.7045 21.492H22.6445ZM24.2765 25.008V22.884H25.4405C26.2445 22.884 26.6645 23.292 26.6645 23.94C26.6645 24.588 26.2085 25.008 25.4525 25.008H24.2765ZM24.2765 28.62V26.376H25.6445C26.4725 26.376 26.9045 26.844 26.9045 27.516C26.9045 28.2 26.4245 28.62 25.6205 28.62H24.2765Z"
        fill={color}
      />
      <path
        d="M35.8219 23.52C35.6299 22.56 34.8379 21.312 32.7739 21.312C31.1659 21.312 29.8099 22.464 29.8099 23.976C29.8099 25.26 30.6859 26.136 32.0419 26.412L33.2299 26.652C33.8899 26.784 34.2619 27.168 34.2619 27.66C34.2619 28.26 33.7699 28.704 32.8819 28.704C31.6819 28.704 31.0939 27.948 31.0219 27.108L29.4859 27.516C29.6179 28.728 30.6139 30.18 32.8699 30.18C34.8499 30.18 35.9419 28.86 35.9419 27.552C35.9419 26.352 35.1139 25.344 33.5659 25.044L32.3779 24.816C31.7539 24.696 31.4539 24.324 31.4539 23.856C31.4539 23.292 31.9819 22.776 32.7859 22.776C33.8659 22.776 34.2499 23.508 34.3339 23.976L35.8219 23.52Z"
        fill={color}
      />
    </svg>
  );
};

IconABS.defaultProps = {
  color: 'black',
};

IconABS.propTypes = {
  color: string,
  className: string,
};

export default IconABS;
