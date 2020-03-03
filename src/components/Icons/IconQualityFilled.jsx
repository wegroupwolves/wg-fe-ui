import React from 'react';
import { string } from 'prop-types';

const IconQualityFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>Quality</title>
      <path
        d="M43.45 26.44C43.0875 25.9701 42.8906 25.3935 42.89 24.8C42.8928 24.224 43.0784 23.6638 43.42 23.2C43.6434 22.894 43.7999 22.5445 43.8793 22.1741C43.9588 21.8036 43.9594 21.4206 43.8811 21.05C43.8028 20.6793 43.6474 20.3293 43.425 20.0226C43.2025 19.7159 42.918 19.4595 42.59 19.27C42.1833 19.0317 41.8458 18.6915 41.6108 18.2828C41.3758 17.8742 41.2514 17.4114 41.25 16.94C41.2476 16.7207 41.2745 16.5021 41.33 16.29C41.3812 16.0805 41.4081 15.8657 41.41 15.65C41.4034 14.9992 41.162 14.3727 40.7302 13.8858C40.2985 13.3989 39.7053 13.0843 39.06 13C38.4819 12.9208 37.9448 12.657 37.5286 12.248C37.1124 11.839 36.8393 11.3066 36.75 10.73C36.6542 10.0931 36.3331 9.51163 35.8449 9.09139C35.3568 8.67116 34.7341 8.44002 34.09 8.44C33.8538 8.44036 33.6186 8.4706 33.39 8.53C32.8263 8.6793 32.2295 8.64211 31.6887 8.42401C31.148 8.2059 30.6923 7.81859 30.39 7.32C30.1928 6.9965 29.93 6.71794 29.6185 6.50229C29.307 6.28665 28.9537 6.13872 28.5815 6.06805C28.2093 5.99737 27.8264 6.00553 27.4575 6.09199C27.0887 6.17845 26.742 6.34129 26.44 6.57C25.9701 6.93247 25.3935 7.12936 24.8 7.13C24.2285 7.128 23.6722 6.94606 23.21 6.61C22.9049 6.38292 22.5552 6.2231 22.1838 6.14109C21.8125 6.05908 21.428 6.05674 21.0557 6.13423C20.6833 6.21172 20.3317 6.36727 20.0239 6.59063C19.7161 6.81398 19.4591 7.10007 19.27 7.43C19.0317 7.83671 18.6915 8.17422 18.2828 8.40922C17.8742 8.64422 17.4114 8.76857 16.94 8.77C16.724 8.77301 16.5086 8.74608 16.3 8.69C16.0866 8.64258 15.8686 8.6191 15.65 8.62C15.0032 8.62347 14.3792 8.85992 13.8925 9.28601C13.4058 9.71209 13.089 10.2993 13 10.94C12.9208 11.5181 12.657 12.0552 12.248 12.4714C11.839 12.8876 11.3066 13.1607 10.73 13.25C10.0931 13.3458 9.51163 13.6669 9.09139 14.1551C8.67116 14.6432 8.44002 15.2659 8.44 15.91C8.44036 16.1462 8.4706 16.3814 8.53 16.61C8.6793 17.1737 8.64211 17.7705 8.42401 18.3113C8.2059 18.852 7.81859 19.3077 7.32 19.61C6.91926 19.8483 6.58705 20.1863 6.35573 20.5911C6.1244 20.9959 6.00185 21.4538 6 21.92C5.99913 22.5137 6.19619 23.0908 6.56 23.56C6.91561 24.0329 7.10856 24.6083 7.11 25.2C7.10608 25.7742 6.92443 26.3332 6.59 26.8C6.24532 27.2584 6.05928 27.8165 6.06 28.39C6.06171 28.8638 6.18717 29.329 6.42396 29.7394C6.66075 30.1499 7.00065 30.4913 7.41 30.73C7.81671 30.9683 8.15422 31.3085 8.38922 31.7172C8.62422 32.1258 8.74857 32.5886 8.75 33.06C8.75301 33.276 8.72608 33.4914 8.67 33.7C8.62258 33.9134 8.5991 34.1314 8.6 34.35C8.60414 34.9999 8.8434 35.6262 9.27355 36.1134C9.7037 36.6005 10.2957 36.9155 10.94 37C11.5181 37.0793 12.0552 37.343 12.4714 37.752C12.8876 38.161 13.1607 38.6934 13.25 39.27C13.3477 39.9061 13.6694 40.4863 14.1571 40.9062C14.6448 41.3261 15.2665 41.5579 15.91 41.56C16.1462 41.5597 16.3814 41.5294 16.61 41.47C17.1737 41.3207 17.7705 41.3579 18.3113 41.576C18.852 41.7941 19.3077 42.1814 19.61 42.68C19.8072 43.0035 20.07 43.2821 20.3815 43.4977C20.693 43.7134 21.0463 43.8613 21.4185 43.932C21.7907 44.0026 22.1736 43.9945 22.5425 43.908C22.9113 43.8216 23.258 43.6587 23.56 43.43C24.0299 43.0675 24.6065 42.8706 25.2 42.87C25.7742 42.8739 26.3332 43.0556 26.8 43.39C27.2584 43.7347 27.8165 43.9207 28.39 43.92C28.8642 43.9203 29.3302 43.7957 29.741 43.5587C30.1518 43.3217 30.4929 42.9807 30.73 42.57C31.025 42.0623 31.4775 41.6647 32.0189 41.4373C32.5602 41.21 33.161 41.1653 33.73 41.31C33.9399 41.358 34.1547 41.3814 34.37 41.38C35.0134 41.3718 35.6325 41.1332 36.115 40.7075C36.5976 40.2819 36.9116 39.6973 37 39.06C37.0793 38.4819 37.343 37.9448 37.752 37.5286C38.161 37.1124 38.6934 36.8393 39.27 36.75C39.9069 36.6542 40.4884 36.3331 40.9086 35.8449C41.3288 35.3568 41.56 34.7341 41.56 34.09C41.5597 33.8538 41.5294 33.6186 41.47 33.39C41.3207 32.8263 41.3579 32.2295 41.576 31.6887C41.7941 31.148 42.1814 30.6923 42.68 30.39C43.0035 30.1928 43.2821 29.93 43.4977 29.6185C43.7134 29.307 43.8613 28.9537 43.932 28.5815C44.0026 28.2093 43.9945 27.8264 43.908 27.4575C43.8216 27.0887 43.6587 26.742 43.43 26.44H43.45ZM25 39.53C22.1262 39.53 19.317 38.6778 16.9276 37.0813C14.5381 35.4847 12.6758 33.2154 11.576 30.5604C10.4763 27.9054 10.1885 24.9839 10.7492 22.1653C11.3098 19.3468 12.6937 16.7578 14.7257 14.7257C16.7578 12.6937 19.3468 11.3098 22.1653 10.7492C24.9839 10.1885 27.9054 10.4763 30.5604 11.576C33.2154 12.6758 35.4847 14.5381 37.0813 16.9276C38.6778 19.317 39.53 22.1262 39.53 25C39.5274 28.8528 37.9957 32.547 35.2713 35.2713C32.547 37.9957 28.8528 39.5274 25 39.53Z"
        fill={color}
      />
      <path
        d="M25 13C22.6266 13 20.3065 13.7038 18.3332 15.0224C16.3598 16.3409 14.8217 18.2151 13.9134 20.4078C13.0052 22.6005 12.7676 25.0133 13.2306 27.3411C13.6936 29.6689 14.8365 31.8071 16.5147 33.4853C18.1929 35.1635 20.3311 36.3064 22.6589 36.7694C24.9867 37.2324 27.3995 36.9948 29.5922 36.0866C31.7849 35.1783 33.6591 33.6402 34.9776 31.6668C36.2962 29.6935 37 27.3734 37 25C37 21.8174 35.7357 18.7652 33.4853 16.5147C31.2348 14.2643 28.1826 13 25 13ZM28.35 30.22L25 28.46L21.65 30.22C21.617 30.2372 21.5799 30.2449 21.5428 30.2423C21.5057 30.2396 21.4701 30.2266 21.44 30.2048C21.4099 30.183 21.3864 30.1532 21.3723 30.1188C21.3582 30.0844 21.3539 30.0467 21.36 30.01L22 26.28L19.29 23.64C19.2636 23.614 19.245 23.5811 19.2362 23.5451C19.2274 23.5091 19.2288 23.4714 19.2402 23.4361C19.2516 23.4008 19.2726 23.3694 19.3008 23.3454C19.329 23.3214 19.3634 23.3057 19.4 23.3L23.15 22.76L24.82 19.36C24.8387 19.3289 24.8651 19.3032 24.8966 19.2854C24.9281 19.2675 24.9638 19.2582 25 19.2582C25.0362 19.2582 25.0719 19.2675 25.1034 19.2854C25.1349 19.3032 25.1613 19.3289 25.18 19.36L26.85 22.76L30.6 23.3C30.6366 23.3057 30.671 23.3214 30.6992 23.3454C30.7274 23.3694 30.7484 23.4008 30.7598 23.4361C30.7712 23.4714 30.7726 23.5091 30.7638 23.5451C30.755 23.5811 30.7364 23.614 30.71 23.64L28 26.28L28.64 30C28.6484 30.0374 28.6459 30.0765 28.6327 30.1125C28.6196 30.1486 28.5963 30.1801 28.5658 30.2033C28.5352 30.2265 28.4986 30.2404 28.4603 30.2433C28.4221 30.2463 28.3838 30.2382 28.35 30.22Z"
        fill={color}
      />
    </svg>
  );
};

IconQualityFilled.defaultProps = {
  color: 'black',
};

IconQualityFilled.propTypes = {
  color: string,
  className: string,
};

export default IconQualityFilled;
