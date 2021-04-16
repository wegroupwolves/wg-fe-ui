import React from 'react';
import { object } from 'prop-types';

const IllustrationComputer = ({ theme }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="94"
      fill="none"
      viewBox="0 0 122 94"
    >
      <path
        fill={theme.primary[50]}
        d="M74.622 0H47.467C30.088 0 16 14.07 16 31.424V62.12c0 17.355 14.088 31.424 31.467 31.424h27.155c17.379 0 31.467-14.069 31.467-31.424V31.425C106.089 14.068 92.001 0 74.622 0z"
      ></path>
      <rect
        width="2"
        height="8"
        x="34"
        y="62"
        fill={theme.primary[500]}
        rx="1"
      ></rect>
      <rect
        width="2"
        height="8"
        x="31"
        y="67"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-90 31 67)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="28.639"
        y="23.811"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 28.639 23.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="23.811"
        y="25.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 23.81 25.018)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="83.639"
        y="9.811"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 83.639 9.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="78.811"
        y="11.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 78.81 11.018)"
      ></rect>
      <circle cx="86.5" cy="66.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="95" cy="37" r="2" fill={theme.primary[500]}></circle>
      <circle cx="51.5" cy="14.5" r="1.5" fill={theme.primary[500]}></circle>
      <path
        stroke={theme.primary[100]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 80.769h120"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M82.13 22H39.87C36.583 22 34 24.583 34 27.87v25.826c0 3.287 2.583 5.87 5.87 5.87h13.617c.704.704 1.526 1.525 1.526 2.23 0 .704-.587 1.643-1.526 2.465h-5.4c-.704 0-1.174.47-1.174 1.174v4.695c0 .705.47 1.174 1.174 1.174h25.826c.704 0 1.174-.47 1.174-1.174v-4.695c0-.705-.47-1.174-1.174-1.174h-5.4c-.94-.822-1.526-1.761-1.526-2.465 0-.705.822-1.526 1.526-2.23H82.13c3.287 0 5.87-2.583 5.87-5.87v-19.84c0-.704-.47-1.173-1.174-1.173s-1.174.47-1.174 1.173v19.84c0 1.995-1.526 3.521-3.522 3.521H39.87c-1.996 0-3.522-1.526-3.522-3.521V27.87c0-1.996 1.526-3.522 3.522-3.522h42.26c1.996 0 3.522 1.526 3.522 3.522v2.113c0 .704.47 1.174 1.174 1.174S88 30.687 88 29.983V27.87c0-3.287-2.583-5.87-5.87-5.87zm-9.39 46.957H49.26v-2.348h23.48v2.348zm-7.396-4.696h-8.805c.47-.704.822-1.526.822-2.465 0-.822-.352-1.526-.822-2.23h8.687c-.47.704-.822 1.408-.822 2.23.235.939.47 1.76.94 2.465z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M39.87 36.557c-.705 0-1.174.47-1.174 1.174v13.617c0 1.996 1.526 3.522 3.521 3.522h37.566c1.995 0 3.521-1.526 3.521-3.522v-21.13c0-1.996-1.526-3.522-3.522-3.522H42.218c-1.995 0-3.521 1.526-3.521 3.521v2.7c0 .705.47 1.175 1.174 1.175s1.173-.47 1.173-1.175v-2.7c0-.704.47-1.173 1.174-1.173h37.566c.704 0 1.173.47 1.173 1.174v21.13c0 .704-.47 1.174-1.174 1.174H42.218c-.704 0-1.174-.47-1.174-1.174V37.731c0-.587-.47-1.174-1.173-1.174z"
      ></path>
    </svg>
  );
};

IllustrationComputer.propTypes = {
  theme: object,
};

export default IllustrationComputer;
