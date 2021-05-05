import React from 'react';
import { object } from 'prop-types';

const IllustrationPerson = ({ theme }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="70"
      fill="none"
      viewBox="0 0 112 70"
    >
      <path
        fill={theme.primary[50]}
        d="M64.458.867H44.4c-12.837 0-23.243 10.378-23.243 23.18v22.64c0 12.803 10.406 23.18 23.243 23.18h20.058c12.837 0 23.243-10.378 23.243-23.18v-22.64C87.7 11.244 77.295.866 64.458.866z"
      ></path>
      <path
        stroke={theme.primary[100]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.34 60.443h109.32"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M51.995 59.5h2.451V26.76l-3.075-4.468H50.29c-3.075 0-3.892 2.242-3.916 3.363v14.581c0 2.287 1.97 3.099 2.955 3.22.44 4.755 1.345 14.422 1.441 15.037.144.768.529 1.009 1.225 1.009z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M56.862 59.5h-2.45V26.76l3.075-4.468h1.08c3.075 0 3.892 2.242 3.916 3.363v14.581c0 2.287-1.97 3.099-2.954 3.22-.44 4.755-1.346 14.422-1.442 15.037-.144.768-.528 1.009-1.225 1.009z"
      ></path>
      <circle
        cx="54.429"
        cy="16.243"
        r="4.997"
        fill={theme.primary[500]}
      ></circle>
      <circle cx="78.5" cy="35.367" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="31.5" cy="26.5" r="1.5" fill={theme.primary[500]}></circle>
      <circle cx="42" cy="41.895" r="1" fill={theme.primary[500]}></circle>
      <rect
        width="2"
        height="8"
        x="74.965"
        y="12.046"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(45 74.965 12.046)"
      ></rect>
      <rect
        width="2"
        height="8"
        x="69.308"
        y="13.46"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-45 69.308 13.46)"
      ></rect>
      <rect
        width="1.5"
        height="6"
        x="33.75"
        y="46"
        fill={theme.primary[500]}
        rx="0.75"
      ></rect>
      <rect
        width="1.5"
        height="6"
        x="31.5"
        y="49.75"
        fill={theme.primary[500]}
        rx="0.75"
        transform="rotate(-90 31.5 49.75)"
      ></rect>
    </svg>
  );
};

IllustrationPerson.propTypes = {
  theme: object,
};

export default IllustrationPerson;
