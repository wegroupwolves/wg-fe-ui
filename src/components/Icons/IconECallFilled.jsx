import React from 'react';
import { string, number } from 'prop-types';

const IconECallFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      
      <path
        d="M33.25 38.54L26.89 32.78C26.7891 32.6954 26.6617 32.649 26.53 32.649C26.3983 32.649 26.2709 32.6954 26.17 32.78L23.56 34.78C23.1575 35.0745 22.6596 35.208 22.1638 35.1543C21.668 35.1007 21.2101 34.8638 20.88 34.49L18.93 32.15C16.7078 29.4867 15.1089 26.3606 14.25 23L13.49 20.07C13.3679 19.5862 13.4411 19.0737 13.6937 18.6433C13.9463 18.213 14.358 17.8993 14.84 17.77L18.04 16.89C18.1651 16.8572 18.2742 16.7807 18.3476 16.6742C18.421 16.5678 18.4538 16.4386 18.44 16.31L17.5 7.89C17.4863 7.77339 17.4349 7.66442 17.3537 7.57961C17.2725 7.4948 17.1659 7.43877 17.05 7.42C15.8729 7.14586 14.6686 7.00497 13.46 7C12.3853 7.32931 11.3718 7.83266 10.46 8.49C9.08 9.49 6.6 12.65 7.03 18.81C7.41 24.28 10.57 30.56 10.57 30.56C10.57 30.56 13.84 36.79 18.1 40.34C22.88 44.34 26.97 44.25 28.57 43.72C29.6489 43.4013 30.6641 42.8971 31.57 42.23C32.2886 41.2755 32.8958 40.2422 33.38 39.15C33.4241 39.0474 33.4353 38.9336 33.412 38.8243C33.3887 38.7151 33.3321 38.6157 33.25 38.54Z"
        fill={color}
      />
      <path
        d="M44 9H26C25.7348 9 25.4804 9.10536 25.2929 9.29289C25.1054 9.48043 25 9.73478 25 10V24C25 24.2652 25.1054 24.5196 25.2929 24.7071C25.4804 24.8946 25.7348 25 26 25H29V31.5C28.9989 31.61 29.0341 31.7172 29.1002 31.8052C29.1662 31.8931 29.2594 31.9568 29.3654 31.9864C29.4713 32.016 29.584 32.0099 29.6861 31.969C29.7882 31.928 29.8739 31.8546 29.93 31.76L34 25H44C44.2652 25 44.5196 24.8946 44.7071 24.7071C44.8946 24.5196 45 24.2652 45 24V10C45 9.73478 44.8946 9.48043 44.7071 9.29289C44.5196 9.10536 44.2652 9 44 9ZM35 22C34.8022 22 34.6089 21.9414 34.4444 21.8315C34.28 21.7216 34.1518 21.5654 34.0761 21.3827C34.0004 21.2 33.9806 20.9989 34.0192 20.8049C34.0578 20.6109 34.153 20.4327 34.2929 20.2929C34.4327 20.153 34.6109 20.0578 34.8049 20.0192C34.9989 19.9806 35.2 20.0004 35.3827 20.0761C35.5654 20.1518 35.7216 20.28 35.8315 20.4444C35.9414 20.6089 36 20.8022 36 21C36 21.2652 35.8946 21.5196 35.7071 21.7071C35.5196 21.8946 35.2652 22 35 22ZM36 16.52C36.0149 16.7531 36.0149 16.9869 36 17.22L35.78 18.87C35.7708 18.9079 35.749 18.9414 35.718 18.9651C35.6871 18.9888 35.6489 19.0011 35.61 19H34.44C34.4015 18.9994 34.3642 18.9864 34.3336 18.963C34.303 18.9396 34.2807 18.907 34.27 18.87L34.05 17.22C34.0348 16.9836 34.0348 16.7464 34.05 16.51V12.15C34.0513 12.129 34.0567 12.1084 34.0659 12.0895C34.0752 12.0705 34.0881 12.0536 34.1038 12.0397C34.1196 12.0258 34.138 12.0151 34.158 12.0083C34.1779 12.0015 34.199 11.9986 34.22 12H35.88C35.901 11.9986 35.9221 12.0015 35.942 12.0083C35.962 12.0151 35.9804 12.0258 35.9962 12.0397C36.0119 12.0536 36.0248 12.0705 36.0341 12.0895C36.0433 12.1084 36.0487 12.129 36.05 12.15L36 16.52Z"
        fill={color}
      />
    </svg>
  );
};

IconECallFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconECallFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconECallFilled;
