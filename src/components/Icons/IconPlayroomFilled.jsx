import React from 'react';
import { string, number } from 'prop-types';

const IconPlayroomFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Playroom</title>
      <path
        d="M40.69 25.77C41.89 23.03 38.65 20.36 36.89 19.15C36.63 19 36.78 18.53 37.07 18.58C41.07 19.18 43.95 22.46 43.95 24.9C44 28 42.0083 27.0325 40.8124 26.1488C40.7705 26.1241 40.7353 26.0896 40.7097 26.0483C40.6841 26.007 40.669 25.96 40.6655 25.9116C40.6621 25.8631 40.6705 25.8145 40.69 25.77Z"
        fill={color}
      />
      <path
        d="M5.09001 36.41C10.96 42.47 20.39 44.67 28.52 43.77C33.96 43.17 43.62 41.23 45.6 34.9C46.18 33.06 43.29 32.27 42.71 34.11C40.94 39.77 29.71 40.93 25.22 40.99C18.93 41.09 11.71 38.93 7.22001 34.29C5.87001 32.9 3.75001 35 5.09001 36.41Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 24.48C37.8382 25.8555 38.0027 27.2498 38.48 28.55C39.38 31 40.12 34.89 39.47 35.54C38.9992 36.0108 38.2976 34.7505 37.4678 33.2598C37.1519 32.6923 36.8174 32.0915 36.47 31.54C35.69 30.31 33.56 28.38 32.11 28.2L28.86 27.79C27.2707 27.5901 25.6639 27.57 24.07 27.73L19.4 28.2C18.2216 28.3157 17.7801 28.9122 17.0667 29.8763C16.7933 30.2457 16.48 30.669 16.07 31.14C15.4855 31.8114 14.9103 32.6388 14.3852 33.3942C13.5807 34.5516 12.8936 35.54 12.47 35.54C11.47 35.54 10.47 33.54 14.47 27.54C16.35 24.72 16.24 22.57 15.6 21.07C15.4574 20.7581 15.249 20.4808 14.9892 20.2569C14.7294 20.033 14.4242 19.868 14.0947 19.773C13.7652 19.678 13.419 19.6554 13.0799 19.7067C12.7408 19.7579 12.4168 19.8819 12.13 20.07C10.6955 20.8211 9.02748 20.9929 7.47001 20.55C2.47001 19.55 10.47 10.55 10.47 10.55L9.00001 9.08001C8.93455 9.01096 8.88776 8.92637 8.86406 8.83423C8.84035 8.74209 8.84052 8.64542 8.86453 8.55336C8.88855 8.4613 8.93563 8.37687 9.00132 8.30805C9.06702 8.23922 9.14916 8.18828 9.24001 8.16001C10.6229 7.69101 12.0812 7.48414 13.54 7.55001C18.22 7.01001 19.47 11.55 19.71 14.55C19.7905 15.6342 20.2769 16.6482 21.0721 17.3897C21.2556 17.5608 21.4524 17.7144 21.66 17.8497V20.07L21.66 20.071C21.6629 21.4596 22.2158 22.7905 23.1977 23.7723C24.1795 24.7542 25.5104 25.3071 26.899 25.31H27.411C28.8004 25.3071 30.1321 24.7547 31.1155 23.7733C32.0989 22.792 32.6542 21.4614 32.66 20.0721L32.66 20.07V18.5508C37.8579 18.6128 38.2974 22.1309 38 24.48ZM10.8267 15.5572C11.0733 15.722 11.3633 15.81 11.66 15.81C12.0578 15.81 12.4394 15.652 12.7207 15.3707C13.002 15.0894 13.16 14.7078 13.16 14.31C13.16 14.0133 13.072 13.7233 12.9072 13.4767C12.7424 13.23 12.5081 13.0377 12.234 12.9242C11.9599 12.8107 11.6583 12.781 11.3674 12.8388C11.0764 12.8967 10.8091 13.0396 10.5993 13.2493C10.3896 13.4591 10.2467 13.7264 10.1888 14.0174C10.131 14.3083 10.1607 14.6099 10.2742 14.884C10.3877 15.1581 10.58 15.3924 10.8267 15.5572Z"
        fill={color}
      />
      <path
        d="M31.66 18.55H24C23.5407 18.5481 23.0887 18.473 22.66 18.331V20.0695C22.6625 21.1933 23.1101 22.2705 23.9048 23.0652C24.6995 23.8599 25.7767 24.3075 26.9006 24.31H27.4094C28.5344 24.3075 29.6128 23.8601 30.4091 23.0655C31.2053 22.2709 31.655 21.1938 31.66 20.069V18.55Z"
        fill={color}
      />
    </svg>
  );
};

IconPlayroomFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconPlayroomFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPlayroomFilled;
