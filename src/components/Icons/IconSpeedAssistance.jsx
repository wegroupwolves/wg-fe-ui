import React from 'react';
import { string } from 'prop-types';

const IconSpeedAssistance = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1825 11.2059C24.2378 10.4859 24.8565 9.9478 25.5644 10.004C26.0453 10.0422 26.5194 10.1061 26.9854 10.1944C33.2541 11.3816 38 16.9719 38 23.6923C38 24.4145 37.4244 25 36.7143 25C36.0042 25 35.4286 24.4145 35.4286 23.6923C35.4286 18.2545 31.5879 13.7263 26.5146 12.7655C26.1378 12.6941 25.754 12.6424 25.3642 12.6114C24.6563 12.5552 24.1272 11.9259 24.1825 11.2059ZM23.514 11.2405C23.644 11.9505 23.1835 12.6333 22.4854 12.7655C21.2667 12.9963 20.1192 13.4329 19.0785 14.039C18.4623 14.3978 17.6767 14.1807 17.3239 13.5539C16.971 12.9272 17.1845 12.1282 17.8008 11.7694C19.0871 11.0203 20.5068 10.4799 22.0146 10.1944C22.7127 10.0621 23.384 10.5305 23.514 11.2405ZM16.8187 13.9455C17.3183 14.4586 17.3144 15.2865 16.8099 15.7947C16.3625 16.2454 15.9532 16.7351 15.5874 17.2581C15.1759 17.8467 14.3732 17.9844 13.7945 17.5658C13.2159 17.1472 13.0804 16.3308 13.492 15.7423C13.9435 15.0966 14.4485 14.4925 15.0004 13.9365C15.5049 13.4283 16.319 13.4323 16.8187 13.9455ZM13.5581 18.0121C14.2208 18.2715 14.5514 19.0281 14.2964 19.7022C14.1854 19.9956 14.0863 20.295 13.9997 20.5997C13.8025 21.2935 13.0897 21.6934 12.4075 21.4929C11.7254 21.2924 11.3322 20.5674 11.5293 19.8736C11.6365 19.4965 11.7591 19.126 11.8965 18.763C12.1515 18.089 12.8954 17.7528 13.5581 18.0121ZM12.3295 22.0084C13.0393 22.0299 13.5975 22.6326 13.5764 23.3544C13.5731 23.4666 13.5714 23.5793 13.5714 23.6923C13.5714 24.4145 12.9958 25 12.2857 25C11.5756 25 11 24.4145 11 23.6923C11 23.5533 11.002 23.4147 11.0061 23.2766C11.0272 22.5547 11.6197 21.9869 12.3295 22.0084Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.8296 17.3402L28.8185 17.3515L25.1484 21.0215C24.2412 20.6965 23.1878 20.8974 22.4612 21.624C21.457 22.6282 21.457 24.2564 22.4612 25.2606C23.4654 26.2648 25.0935 26.2648 26.0977 25.2606C26.7141 24.6442 26.9522 23.7927 26.8118 22.9947L30.648 19.1585L30.6479 19.1584C31.0614 18.7449 30.9895 18.0027 30.4874 17.5006C29.9853 16.9985 29.2431 16.9267 28.8296 17.3402Z"
        fill={color}
      />
      <path
        d="M30 40.3701H30.08L30.75 36.6601C30.9249 36.0654 31.273 35.5362 31.75 35.1401C32.13 34.8001 32.97 34.1401 33.39 33.8701C34.3081 33.2431 35.3884 32.8958 36.5 32.8701H36.67L40 30.5301C40.1276 30.4396 40.2723 30.376 40.4254 30.3434C40.5784 30.3107 40.7365 30.3096 40.89 30.3401C41.043 30.3668 41.1891 30.4239 41.3197 30.508C41.4502 30.5922 41.5626 30.7017 41.65 30.8301C41.7105 30.9254 41.7544 31.0302 41.78 31.1401C41.8498 31.3717 41.8498 31.6186 41.78 31.8501V31.9201C41.7048 32.1449 41.5615 32.3406 41.37 32.4801L41 32.7001L37.29 35.2801L37.67 35.8301L41.67 33.0401C41.8047 32.9321 41.9256 32.8078 42.03 32.6701C42.2242 32.4399 42.3582 32.165 42.42 31.8701C42.455 31.6818 42.455 31.4885 42.42 31.3001L44.57 23.5801C44.5975 23.4206 44.6563 23.268 44.7428 23.1312C44.8294 22.9943 44.942 22.8758 45.0743 22.7825C45.2066 22.6892 45.3561 22.6228 45.514 22.5873C45.672 22.5517 45.8354 22.5476 45.995 22.5751C46.1545 22.6027 46.3071 22.6615 46.4439 22.748C46.5808 22.8345 46.6993 22.9472 46.7926 23.0795C46.8859 23.2118 46.9523 23.3612 46.9878 23.5192C47.0234 23.6772 47.0275 23.8406 47 24.0001L45.18 34.0001C45.0834 34.5092 44.793 34.9609 44.37 35.2601L37.68 39.9101L37.34 41.7601H37.41C37.5885 41.7942 37.7465 41.8973 37.8495 42.0471C37.9524 42.1968 37.9922 42.3812 37.96 42.5601L37.25 46.4701C37.2343 46.5605 37.2009 46.6468 37.1515 46.7241C37.1021 46.8013 37.0379 46.8679 36.9625 46.9201C36.887 46.9722 36.802 47.0088 36.7123 47.0277C36.6226 47.0466 36.53 47.0474 36.44 47.0301L29 45.6401C28.9105 45.6234 28.8253 45.589 28.7492 45.5392C28.673 45.4893 28.6075 45.4249 28.5564 45.3496C28.5053 45.2743 28.4696 45.1896 28.4513 45.1005C28.433 45.0114 28.4326 44.9195 28.45 44.8301L29.16 40.9201C29.1765 40.8276 29.2117 40.7394 29.2635 40.6609C29.3153 40.5824 29.3826 40.5154 29.4613 40.4639C29.54 40.4124 29.6283 40.3775 29.7209 40.3614C29.8136 40.3453 29.9085 40.3482 30 40.3701Z"
        fill={color}
      />
      <path
        d="M20.0001 40.37H19.9201L19.2501 36.66C19.0752 36.0652 18.7271 35.536 18.2501 35.14C17.8701 34.8 17.0301 34.14 16.6101 33.87C15.6919 33.243 14.6117 32.8956 13.5001 32.87H13.3301L10.0001 30.53C9.8725 30.4394 9.72774 30.3759 9.57471 30.3432C9.42168 30.3105 9.26358 30.3094 9.11011 30.34C8.95708 30.3666 8.81095 30.4237 8.6804 30.5079C8.54985 30.592 8.43753 30.7016 8.35011 30.83C8.2896 30.9252 8.24564 31.03 8.22011 31.14C8.15032 31.3715 8.15032 31.6184 8.22011 31.85V31.92C8.29526 32.1447 8.43857 32.3405 8.63011 32.48L9.00011 32.7L12.7101 35.28L12.3301 35.83L8.26011 33C8.12535 32.8919 8.00444 32.7676 7.90011 32.63C7.70591 32.3997 7.5719 32.1248 7.51011 31.83C7.47511 31.6416 7.47511 31.4484 7.51011 31.26L5.35011 23.55C5.29044 23.2383 5.10942 22.9632 4.84686 22.785C4.58431 22.6069 4.26174 22.5403 3.95011 22.6C3.63848 22.6596 3.36332 22.8407 3.18516 23.1032C3.007 23.3658 2.94044 23.6883 3.00011 24L4.82011 34C4.9167 34.509 5.20709 34.9607 5.63011 35.26L12.3201 39.91L12.6601 41.76H12.5901C12.4115 41.794 12.2536 41.8971 12.1506 42.0469C12.0476 42.1967 12.0079 42.3811 12.0401 42.56L12.7501 46.47C12.7657 46.5603 12.7992 46.6466 12.8486 46.7239C12.8979 46.8011 12.9622 46.8678 13.0376 46.9199C13.113 46.972 13.1981 47.0086 13.2878 47.0275C13.3775 47.0464 13.4701 47.0473 13.5601 47.03L21.0001 45.64C21.0896 45.6232 21.1748 45.5889 21.2509 45.539C21.327 45.4891 21.3925 45.4247 21.4437 45.3494C21.4948 45.2741 21.5305 45.1895 21.5488 45.1003C21.567 45.0112 21.5675 44.9193 21.5501 44.83L20.8401 40.92C20.8236 40.8274 20.7884 40.7392 20.7366 40.6607C20.6847 40.5823 20.6174 40.5152 20.5388 40.4637C20.4601 40.4122 20.3718 40.3773 20.2791 40.3612C20.1865 40.3451 20.0916 40.3481 20.0001 40.37Z"
        fill={color}
      />
    </svg>
  );
};

IconSpeedAssistance.defaultProps = {
  color: 'black',
};

IconSpeedAssistance.propTypes = {
  color: string,
  className: string,
};

export default IconSpeedAssistance;
