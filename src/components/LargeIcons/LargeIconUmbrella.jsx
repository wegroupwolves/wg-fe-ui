import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconUmbrella = ({ activeTheme, inactiveTheme, active }) => {
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
      width="58"
      height="54"
      fill="none"
      viewBox="0 0 58 54"
    >
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeWidth="2"
        d="M29 24.203V46.93c0 1.75 1.05 5.25 5.25 5.25s5.25-3.5 5.25-5.25"
      ></path>
      <path
        fill={theme.secondary}
        fillRule="evenodd"
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M57 27.586c-1.7-2.942-5.045-4.943-8.893-4.943-4.437 0-8.205 2.66-9.553 6.357-1.349-3.696-5.117-6.357-9.554-6.357s-8.205 2.66-9.554 6.357c-1.348-3.696-5.116-6.357-9.553-6.357-3.848 0-7.193 2.001-8.893 4.943C2.37 13.648 14.383 2.75 29 2.75s26.63 10.898 28 24.836z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeWidth="2"
        d="M31.592 3.96c5.704 6.505 6.741 24.84 6.741 24.84M26.408 3.96c-5.704 6.505-6.741 24.84-6.741 24.84M29 1v1.75"
      ></path>
    </svg>
  );
};

LargeIconUmbrella.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconUmbrella;
