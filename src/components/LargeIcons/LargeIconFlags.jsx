import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconFlags = ({ activeTheme, inactiveTheme, active }) => {
  const theme = active
    ? {
        primary: activeTheme[500],
        secondary: activeTheme[200],
      }
    : {
        primary: inactiveTheme[200],
        secondary: inactiveTheme[100],
      };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="37"
      fill="none"
      viewBox="0 0 58 37"
    >
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.577 35.26L43.826 1"
      ></path>
      <path
        fill={theme.secondary}
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M56.673 13.849l-7.953 11.72c-5.812 0-7.953-10.496-14.377-10.496l7.341-10.707c7.036 0 7.036 9.483 14.99 9.483z"
      ></path>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M37.423 35.26L14.174 1"
      ></path>
      <path
        fill={theme.secondary}
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.327 13.849l7.953 11.72c5.812 0 7.953-10.496 14.377-10.496L16.316 4.365c-7.036 0-7.036 9.483-14.99 9.483z"
      ></path>
    </svg>
  );
};

LargeIconFlags.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconFlags;
