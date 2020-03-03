import React from 'react';
import { string } from 'prop-types';

const IconExtraObjectDamageFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Extra object damage</title>
      <path
        d="M37 29.07C36.2855 29.071 35.5842 29.2634 34.9692 29.6272C34.3542 29.991 33.8479 30.5129 33.5029 31.1386C33.1579 31.7643 32.9868 32.471 33.0074 33.1853C33.028 33.8995 33.2395 34.5952 33.62 35.2L31 38V35L29 38L28 37L27 38V42.43C26.2019 42.0144 25.3102 41.8114 24.4108 41.8404C23.5115 41.8695 22.6348 42.1296 21.8651 42.5958C21.0955 43.062 20.4589 43.7186 20.0166 44.5022C19.5743 45.2859 19.3413 46.1702 19.34 47.07H31V41L35.09 36.61C35.6253 36.8915 36.2176 37.048 36.8221 37.0676C37.4266 37.0872 38.0277 36.9695 38.5802 36.7232C39.1327 36.477 39.6221 36.1087 40.0117 35.646C40.4012 35.1833 40.6808 34.6383 40.8293 34.0519C40.9779 33.4656 40.9915 32.8532 40.8692 32.2609C40.7469 31.6685 40.4918 31.1116 40.1232 30.632C39.7546 30.1525 39.282 29.7628 38.7411 29.4922C38.2001 29.2216 37.6048 29.0773 37 29.07Z"
        fill={color}
      />
      <path
        d="M21 32.23L26.51 34.71L27 36.11L27.62 34.83L29 36L30 33L27.56 25.55C29.3764 24.5151 30.8603 22.9841 31.8378 21.1362C32.8154 19.2884 33.2462 17.2002 33.0797 15.1163C32.9132 13.0325 32.1563 11.0392 30.8978 9.37C29.6392 7.70079 27.9311 6.42478 25.9734 5.69143C24.0158 4.95808 21.8897 4.79776 19.8442 5.22925C17.7987 5.66075 15.9185 6.66618 14.4239 8.12778C12.9292 9.58938 11.882 11.4466 11.4049 13.482C10.9278 15.5173 11.0406 17.6464 11.73 19.62C11.929 20.195 12.18 20.7506 12.48 21.28C11.2934 21.6101 10.2064 22.2273 9.315 23.0771C8.42357 23.9269 7.75513 24.9832 7.36874 26.1527C6.98235 27.3221 6.88989 28.5687 7.09954 29.7823C7.30919 30.9959 7.8145 32.1393 8.57081 33.1113C9.32713 34.0833 10.3112 34.8541 11.4361 35.3557C12.5609 35.8572 13.792 36.0739 15.0205 35.9868C16.2491 35.8997 17.4372 35.5114 18.4801 34.8562C19.5229 34.201 20.3884 33.299 21 32.23ZM25.61 32.11L21.75 30.38C21.9148 29.7669 21.9989 29.1349 22 28.5C22.0009 27.9962 21.9507 27.4936 21.85 27C22.4956 27.0145 23.1412 26.9744 23.78 26.88L25.61 32.11Z"
        fill={color}
      />
    </svg>
  );
};

IconExtraObjectDamageFilled.defaultProps = {
  color: 'black',
};

IconExtraObjectDamageFilled.propTypes = {
  color: string,
  className: string,
};

export default IconExtraObjectDamageFilled;
