import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconprospect = ({ activeTheme, inactiveTheme, active }) => {
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
      height="58"
      fill="none"
      viewBox="0 0 58 58"
    >
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M57 7.533V1h-6.533M7.533 1H1v6.533m0 42.934V57h6.533M57 50.467V57h-6.533M29 33.755c8.187 0 14.824 6.637 14.824 14.823v4.942H14.177v-4.942c0-8.186 6.636-14.823 14.823-14.823v0zM19.26 20.34v0a8.522 8.522 0 008.523 8.522h2.434a8.522 8.522 0 008.522-8.522v0M37.235 43.637v9.882m-16.47 0v-9.882"
      ></path>
      <path
        fill={theme.secondary}
        d="M30.534 4.627c-4.916-.71-8.035 2.072-8.98 3.552-1.576.296-4.728 2.22-4.728 7.549 0 5.328 1.89 6.069 2.836 5.772v-4.2a4 4 0 012.195-3.57l3.95-1.998a4.384 4.384 0 004.195 3.108h3.534a5.034 5.034 0 015.034 5.034v1.627c7.09-9.326-1.89-15.986-8.036-16.874z"
      ></path>
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.862 9.511v0a8.006 8.006 0 007.545 5.329h.99a5.174 5.174 0 015.173 5.174V21.5c7.09-9.325-1.89-15.985-8.036-16.873-4.916-.71-8.035 2.072-8.98 3.552-1.576.296-4.728 2.22-4.728 7.549 0 5.328 1.89 6.069 2.836 5.772v-4.2a4 4 0 012.195-3.57l3.95-1.998"
      ></path>
    </svg>
  );
};

LargeIconprospect.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconprospect;
