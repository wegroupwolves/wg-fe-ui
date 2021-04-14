import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconCar = ({ activeTheme, inactiveTheme, active }) => {
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
      height="33"
      fill="none"
      viewBox="0 0 58 33"
    >
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.986 26.846h51.295c.372.003.732-.142 1.01-.405s.454-.626.495-1.02l1.204-11.166a1.696 1.696 0 00-.054-.643 1.634 1.634 0 00-.289-.568 1.524 1.524 0 00-.476-.4 1.436 1.436 0 00-.587-.168l-13.472-.84-6.178-9.92a1.54 1.54 0 00-.57-.541A1.431 1.431 0 0034.618 1l-19.683.861a1.45 1.45 0 00-.85.324 1.601 1.601 0 00-.523.784l-2.956 9.749-8.228.742c-.39.035-.75.23-1.007.543-.257.313-.39.72-.369 1.134l.497 10.2c.022.405.188.786.464 1.066s.642.438 1.023.442v0z"
      ></path>
      <path
        fill={theme.secondary}
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.787 31.535c2.74 0 4.961-2.23 4.961-4.983 0-2.751-2.22-4.982-4.96-4.982-2.74 0-4.962 2.23-4.962 4.982 0 2.752 2.222 4.983 4.961 4.983zM46.695 31.535c2.74 0 4.96-2.23 4.96-4.983 0-2.751-2.22-4.982-4.96-4.982-2.74 0-4.961 2.23-4.961 4.982 0 2.752 2.22 4.983 4.96 4.983z"
      ></path>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.787 31.535c2.74 0 4.961-2.23 4.961-4.983 0-2.751-2.22-4.982-4.96-4.982-2.74 0-4.962 2.23-4.962 4.982 0 2.752 2.222 4.983 4.961 4.983zM46.695 31.535c2.74 0 4.96-2.23 4.96-4.983 0-2.751-2.22-4.982-4.96-4.982-2.74 0-4.961 2.23-4.961 4.982 0 2.752 2.22 4.983 4.96 4.983z"
      ></path>
      <path
        fill={theme.primary}
        d="M10.787 28.794a2.238 2.238 0 002.233-2.243c0-1.238-1-2.242-2.233-2.242a2.238 2.238 0 00-2.233 2.242c0 1.239 1 2.243 2.233 2.243zM46.695 28.794a2.238 2.238 0 002.233-2.243c0-1.238-1-2.242-2.233-2.242a2.238 2.238 0 00-2.233 2.242c0 1.239 1 2.243 2.233 2.243z"
      ></path>
      <path
        fill={theme.secondary}
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27.923 6.383h5.963c.108 0 .213.033.302.096.09.063.16.152.201.257l2.108 5.313a.604.604 0 01-.05.539.556.556 0 01-.195.188.522.522 0 01-.256.068h-8.073V6.383zM23.615 6.383h-5.691a.523.523 0 00-.331.12.578.578 0 00-.192.31l-1.307 5.313a.608.608 0 00.097.496.55.55 0 00.19.164.515.515 0 00.239.058h6.995V6.383z"
      ></path>
    </svg>
  );
};

LargeIconCar.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconCar;
