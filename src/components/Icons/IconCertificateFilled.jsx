import React from 'react';
import { string } from 'prop-types';

const IconCertificateFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Certificate</title>
      <path
        d="M25 27C28.866 27 32 23.866 32 20C32 16.134 28.866 13 25 13C21.134 13 18 16.134 18 20C18 23.866 21.134 27 25 27Z"
        fill={color}
      />
      <path
        d="M26.33 7.07C25.4458 6.97667 24.5542 6.97667 23.67 7.07C20.9945 7.3473 18.4709 8.44771 16.447 10.2195C14.4232 11.9913 12.9988 14.3473 12.3702 16.9627C11.7416 19.578 11.9397 22.324 12.9373 24.822C13.9349 27.32 15.6827 29.4471 17.94 30.91V44L25 40L32.06 44V30.91C34.3172 29.4471 36.0651 27.32 37.0627 24.822C38.0603 22.324 38.2584 19.578 37.6298 16.9627C37.0012 14.3473 35.5768 11.9913 33.553 10.2195C31.5291 8.44771 29.0055 7.3473 26.33 7.07ZM25 30C23.0222 30 21.0888 29.4135 19.4443 28.3147C17.7998 27.2159 16.5181 25.6541 15.7612 23.8268C15.0043 21.9996 14.8063 19.9889 15.1921 18.0491C15.578 16.1093 16.5304 14.3275 17.9289 12.9289C19.3274 11.5304 21.1093 10.578 23.0491 10.1921C24.9889 9.80629 26.9996 10.0043 28.8268 10.7612C30.6541 11.5181 32.2159 12.7998 33.3147 14.4443C34.4135 16.0888 35 18.0222 35 20C35 22.6522 33.9464 25.1957 32.0711 27.0711C30.1957 28.9464 27.6522 30 25 30Z"
        fill={color}
      />
    </svg>
  );
};

IconCertificateFilled.defaultProps = {
  color: 'black',
};

IconCertificateFilled.propTypes = {
  color: string,
  className: string,
};

export default IconCertificateFilled;
