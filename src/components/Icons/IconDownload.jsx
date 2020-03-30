import React from 'react';
import { string, number } from 'prop-types';

const IconDownload = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Download</title>
      <path
        d="M2.97215 6.29335C4.37918 7.69862 5.71587 9.03362 6.94702 10.2632C8.21335 8.99849 9.55004 7.68105 10.8867 6.36361C10.148 6.36361 9.33898 6.36361 8.38923 6.36361C8.38923 5.62584 8.38923 4.94077 8.38923 4.25571C8.38923 3.14906 8.38923 2.02484 8.38923 0.918191C8.38923 0.303386 8.09024 0.0047658 7.47466 0.0047658C7.17566 0.0047658 6.89426 0.0223317 6.59526 0.0047658C5.83898 -0.0479318 5.55757 0.338517 5.55757 1.05872C5.57516 2.78017 5.55757 4.50163 5.55757 6.29335C4.67818 6.29335 3.83396 6.29335 2.97215 6.29335Z"
        fill={color}
      />
      <path
        d="M14 14.005C14 13.5658 14 13.1794 14 12.7402C9.35678 12.7402 4.71357 12.7402 0 12.7402C0 13.1267 0 13.5483 0 14.005C4.6608 14.005 9.32161 14.005 14 14.005Z"
        fill={color}
      />
    </svg>
  );
};

IconDownload.defaultProps = {
  color: 'black',
  size: 30,
};

IconDownload.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconDownload;
