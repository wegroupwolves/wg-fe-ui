import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconBullseye = ({ activeTheme, inactiveTheme, active }) => {
  const theme = active
    ? {
        primary: activeTheme[500],
        secondary: activeTheme[200],
        tertiary: activeTheme[50],
      }
    : {
        primary: inactiveTheme[200],
        secondary: inactiveTheme[100],
        tertiary: inactiveTheme[50],
      };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="60"
      fill="none"
      viewBox="0 0 59 60"
    >
      <circle
        cx="23.465"
        cy="35.614"
        r="22.465"
        fill={theme.tertiary}
        stroke={theme.primary}
        strokeWidth="2"
      ></circle>
      <circle
        cx="23.465"
        cy="36.062"
        r="12.319"
        fill={theme.secondary}
        stroke={theme.primary}
        strokeWidth="2"
      ></circle>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M49.864 9.662L23.87 35.655M49.864 9.664V1l-5.776 5.776v8.664"
      ></path>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M49.864 9.662h7.942l-5.776 5.776h-7.942"
      ></path>
    </svg>
  );
};

LargeIconBullseye.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconBullseye;
