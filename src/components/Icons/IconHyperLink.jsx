import React from 'react';
import { number, string } from 'prop-types';

const IconHyperLink = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="25"
      height="25"
      viewBox="0 0 40 35"
      fill="none"
    >
      
      <path
        d="M14.782 19.6107C15.473 20.5355 16.3546 21.3006 17.367 21.8543C18.3794 22.408 19.499 22.7373 20.6497 22.8198C21.8004 22.9023 22.9554 22.7361 24.0363 22.3325C25.1172 21.9288 26.0987 21.2972 26.9143 20.4805L31.7415 15.6484C33.207 14.1295 34.0179 12.0951 33.9996 9.98353C33.9813 7.87193 33.1352 5.85201 31.6435 4.35882C30.1518 2.86563 28.134 2.01865 26.0245 2.0003C23.9151 1.98196 21.8828 2.7937 20.3654 4.26072L17.5978 7.01502"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2179 16.3888C20.5269 15.4641 19.6453 14.6989 18.6329 14.1452C17.6205 13.5915 16.501 13.2623 15.3502 13.1798C14.1995 13.0973 13.0446 13.2635 11.9637 13.6671C10.8828 14.0707 9.90121 14.7023 9.0856 15.519L4.25841 20.3511C2.7929 21.8701 1.98197 23.9044 2.0003 26.016C2.01863 28.1276 2.86475 30.1475 4.35642 31.6407C5.84808 33.1339 7.86595 33.9809 9.9754 33.9992C12.0849 34.0176 14.1171 33.2058 15.6345 31.7388L18.386 28.9845"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconHyperLink.defaultProps = {
  color: 'black',
  size: 25,
};

IconHyperLink.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconHyperLink;
