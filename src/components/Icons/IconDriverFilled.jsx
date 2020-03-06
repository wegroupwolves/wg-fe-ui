import React from 'react';
import { string } from 'prop-types';

const IconDriverFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Driver</title>
      <path
        d="M25 5C21.0444 5 17.1776 6.17298 13.8886 8.37061C10.5996 10.5682 8.03616 13.6918 6.52241 17.3463C5.00866 21.0009 4.61259 25.0222 5.38429 28.9018C6.156 32.7814 8.06081 36.3451 10.8579 39.1421C13.6549 41.9392 17.2186 43.844 21.0982 44.6157C24.9778 45.3874 28.9991 44.9913 32.6537 43.4776C36.3082 41.9638 39.4318 39.4004 41.6294 36.1114C43.827 32.8224 45 28.9556 45 25C45 19.6957 42.8929 14.6086 39.1421 10.8579C35.3914 7.10714 30.3043 5 25 5ZM21 38.76C20.9999 38.8389 20.9816 38.9167 20.9463 38.9873C20.9111 39.0579 20.86 39.1193 20.797 39.1668C20.734 39.2143 20.6608 39.2466 20.5833 39.261C20.5057 39.2754 20.4259 39.2717 20.35 39.25C18.468 38.632 16.7263 37.6488 15.2249 36.3567C13.7234 35.0646 12.4916 33.4889 11.6 31.72C11.5626 31.6437 11.5453 31.5591 11.5497 31.4743C11.554 31.3894 11.58 31.3071 11.625 31.235C11.67 31.1629 11.7327 31.1036 11.8071 31.0624C11.8814 31.0213 11.965 30.9998 12.05 31H16C17.3261 31 18.5979 31.5268 19.5355 32.4645C20.4732 33.4021 21 34.6739 21 36V38.76ZM25 30C24.4067 30 23.8266 29.8241 23.3333 29.4944C22.8399 29.1648 22.4554 28.6962 22.2284 28.1481C22.0013 27.5999 21.9419 26.9967 22.0576 26.4147C22.1734 25.8328 22.4591 25.2982 22.8787 24.8787C23.2982 24.4591 23.8328 24.1734 24.4147 24.0576C24.9967 23.9419 25.5999 24.0013 26.1481 24.2284C26.6962 24.4554 27.1648 24.8399 27.4944 25.3333C27.8241 25.8266 28 26.4067 28 27C28 27.7956 27.6839 28.5587 27.1213 29.1213C26.5587 29.6839 25.7956 30 25 30ZM38.4 31.72C37.4279 33.6521 36.0513 35.3523 34.3638 36.7051C32.6762 38.0578 30.7173 39.0316 28.62 39.56C28.546 39.5783 28.4687 39.5794 28.3942 39.5633C28.3196 39.5472 28.2498 39.5142 28.19 39.4669C28.1301 39.4196 28.0819 39.3593 28.049 39.2905C28.016 39.2217 27.9993 39.1463 28 39.07V36C28 35.3434 28.1293 34.6932 28.3806 34.0866C28.6319 33.48 29.0002 32.9288 29.4645 32.4645C29.9288 32.0002 30.48 31.6319 31.0866 31.3806C31.6932 31.1293 32.3434 31 33 31H38C38.0807 31.0078 38.1583 31.035 38.2261 31.0794C38.2939 31.1238 38.3499 31.184 38.3892 31.2549C38.4286 31.3257 38.4501 31.4051 38.452 31.4861C38.4539 31.5671 38.436 31.6474 38.4 31.72ZM39.25 24.25L32.11 21.56C29.8803 20.5334 27.4547 20.0018 25 20.0018C22.5453 20.0018 20.1197 20.5334 17.89 21.56L10.75 24.25C10.6715 24.2805 10.5867 24.2907 10.5032 24.2796C10.4198 24.2686 10.3405 24.2367 10.2726 24.1868C10.2048 24.1369 10.1507 24.0708 10.1153 23.9944C10.0799 23.918 10.0643 23.834 10.07 23.75C10.4297 20.0397 12.158 16.5963 14.9181 14.0909C17.6782 11.5854 21.2723 10.1974 25 10.1974C28.7277 10.1974 32.3218 11.5854 35.0819 14.0909C37.842 16.5963 39.5703 20.0397 39.93 23.75C39.9357 23.834 39.9201 23.918 39.8847 23.9944C39.8493 24.0708 39.7952 24.1369 39.7274 24.1868C39.6595 24.2367 39.5802 24.2686 39.4968 24.2796C39.4133 24.2907 39.3285 24.2805 39.25 24.25Z"
        fill={color}
      />
    </svg>
  );
};

IconDriverFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDriverFilled.propTypes = {
  color: string,
  className: string,
};

export default IconDriverFilled;
