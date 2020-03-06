import React from 'react';
import { string } from 'prop-types';

const IconBikeFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Bike</title>
      <path
        d="M39 24C38.0627 24.0021 37.1315 24.1505 36.24 24.44L31.55 16H34C34.3978 16 34.7794 15.842 35.0607 15.5607C35.342 15.2794 35.5 14.8978 35.5 14.5C35.5 14.1022 35.342 13.7206 35.0607 13.4393C34.7794 13.158 34.3978 13 34 13H29C28.7387 13.0001 28.4819 13.0684 28.2551 13.1982C28.0283 13.3281 27.8394 13.5149 27.707 13.7402C27.5747 13.9656 27.5035 14.2215 27.5005 14.4829C27.4975 14.7442 27.5628 15.0017 27.69 15.23L30.06 19.5H19.13L18.28 18H18.5C18.8978 18 19.2794 17.842 19.5607 17.5607C19.842 17.2794 20 16.8978 20 16.5C20 16.1022 19.842 15.7206 19.5607 15.4393C19.2794 15.158 18.8978 15 18.5 15H13.5C13.1022 15 12.7206 15.158 12.4393 15.4393C12.158 15.7206 12 16.1022 12 16.5C12 16.8978 12.158 17.2794 12.4393 17.5607C12.7206 17.842 13.1022 18 13.5 18H14.84L16.49 20.93L14.28 24.62C13.2339 24.214 12.1221 24.0038 11 24C9.28392 23.9992 7.60339 24.4891 6.15651 25.4118C4.70963 26.3346 3.55672 27.6518 2.83369 29.2081C2.11067 30.7644 1.84767 32.495 2.07569 34.1959C2.30372 35.8967 3.01327 37.497 4.12069 38.8079C5.22812 40.1188 6.68725 41.0858 8.32609 41.5949C9.96493 42.104 11.7151 42.1339 13.3704 41.6811C15.0257 41.2283 16.517 40.3118 17.6686 39.0394C18.8202 37.7671 19.584 36.1921 19.87 34.5H25C25.1262 34.5146 25.2538 34.5146 25.38 34.5C25.5021 34.4681 25.6196 34.4211 25.73 34.36C25.828 34.3048 25.9187 34.2376 26 34.16L26.07 34.09C26.12 34.03 26.18 33.97 26.23 33.9L32.57 24L33.57 25.82C31.8664 27.1076 30.6761 28.959 30.2118 31.0434C29.7476 33.1278 30.0396 35.3094 31.0358 37.1983C32.0319 39.0872 33.6672 40.5603 35.6496 41.3545C37.6319 42.1487 39.832 42.2121 41.8568 41.5334C43.8815 40.8548 45.599 39.4783 46.7023 37.6499C47.8056 35.8215 48.2228 33.6604 47.8794 31.5527C47.536 29.445 46.4544 27.5281 44.8277 26.1445C43.2011 24.7609 41.1355 24.0008 39 24ZM30 22.5L25.12 30.09L20.81 22.5H30ZM18.18 23.94L22.43 31.5H19.87C19.5229 29.4276 18.4616 27.542 16.87 26.17L18.18 23.94ZM15.34 28.68C16.1156 29.4603 16.6681 30.434 16.94 31.5H13.65L15.34 28.68ZM11 39.13C9.37423 39.13 7.81504 38.4842 6.66544 37.3346C5.51584 36.185 4.87 34.6258 4.87 33C4.87 31.3742 5.51584 29.815 6.66544 28.6654C7.81504 27.5158 9.37423 26.87 11 26.87C11.5996 26.8686 12.1961 26.9562 12.77 27.13L9.71001 32.23C9.5794 32.4602 9.51075 32.7203 9.51075 32.985C9.51075 33.2497 9.5794 33.5098 9.71001 33.74C9.84039 33.9679 10.028 34.1579 10.2542 34.2911C10.4804 34.4244 10.7375 34.4964 11 34.5H16.94C16.6062 35.8226 15.8408 36.9962 14.7649 37.8348C13.689 38.6734 12.3641 39.1292 11 39.13ZM39 39.13C37.7521 39.1265 36.5351 38.7422 35.5115 38.0285C34.4879 37.3148 33.7064 36.3057 33.2716 35.136C32.8368 33.9664 32.7693 32.6919 33.0782 31.4828C33.387 30.2738 34.0575 29.1878 35 28.37L37.7 33.23C37.8284 33.4626 38.0166 33.6566 38.2452 33.792C38.4737 33.9274 38.7343 33.9992 39 34C39.2557 34.0012 39.5073 33.9358 39.73 33.81C40.0668 33.6166 40.3154 33.3001 40.4236 32.927C40.5318 32.554 40.4911 32.1536 40.31 31.81L37.67 27C38.1069 26.9058 38.5532 26.8622 39 26.87C40.6258 26.87 42.185 27.5158 43.3346 28.6654C44.4842 29.815 45.13 31.3742 45.13 33C45.13 34.6258 44.4842 36.185 43.3346 37.3346C42.185 38.4842 40.6258 39.13 39 39.13Z"
        fill={color}
      />
    </svg>
  );
};

IconBikeFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconBikeFilled.propTypes = {
  color: string,
  className: string,
};

export default IconBikeFilled;
