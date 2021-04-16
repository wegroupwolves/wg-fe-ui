import React from 'react';
import { object } from 'prop-types';

const IllustrationJewelry = ({ theme }) => {
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
      <path
        stroke={theme.primary[100]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 80.769h120"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M50.587 35.304l-6.6 8.742a1.2 1.2 0 00.09 1.552l16.055 16.804a1.198 1.198 0 001.736 0l16.056-16.804a1.2 1.2 0 00.09-1.552l-6.6-8.742a1.2 1.2 0 00-.958-.477H51.545c-.377 0-.732.177-.958.477zM61.9 45.67h5.45L61.9 57.515V45.669zm-1.8 11.794L54.673 45.67H60.1v11.794zm1.8-13.594v-5.472l4.854 5.472H61.9zm-1.8 0h-4.834l4.834-5.466v5.466zm-7.408 1.8l4.856 10.553L47.464 45.67h5.228zm16.64 0h5.205L64.498 56.175l4.834-10.506zm-6.065-8.442h6.058l-1.102 5.587-4.956-5.587zM53.8 42.81l-1.1-5.583h6.038l-4.938 5.583zm-2.67-4.24l1.044 5.3h-5.046l4.001-5.3zm23.744 5.3H69.85l1.04-5.276 3.983 5.275zM39.912 47.9a.9.9 0 100-1.8H34.9a.9.9 0 100 1.8h5.012zM87.1 46.1h-5.012a.9.9 0 100 1.8H87.1a.9.9 0 100-1.8zM43.18 27.909a.9.9 0 10-1.272 1.272l3.544 3.544a.897.897 0 001.273 0 .9.9 0 000-1.272l-3.545-3.544zM76.548 61.274a.9.9 0 10-1.273 1.273l3.544 3.544a.897.897 0 001.274 0 .9.9 0 000-1.272l-3.545-3.545zM61.9 25.912V20.9a.9.9 0 10-1.8 0v5.012a.9.9 0 101.8 0zM61 67.188a.9.9 0 00-.9.9V73.1a.9.9 0 101.8 0v-5.012a.9.9 0 00-.9-.9zM80.092 27.909a.9.9 0 00-1.273 0l-3.544 3.544a.9.9 0 101.273 1.272l3.545-3.544a.9.9 0 00-.001-1.272zM41.908 66.091a.897.897 0 001.273 0l3.544-3.544a.9.9 0 10-1.272-1.273l-3.545 3.545a.899.899 0 000 1.272z"
      ></path>
      <rect
        width="2"
        height="8"
        x="92"
        y="33"
        fill={theme.primary[500]}
        rx="1"
      ></rect>
      <rect
        width="2"
        height="8"
        x="89"
        y="38"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-90 89 38)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="31.639"
        y="52.81"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 31.639 52.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="26.811"
        y="54.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 26.81 54.018)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="76.639"
        y="9.811"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 76.639 9.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="71.811"
        y="11.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 71.81 11.018)"
      ></rect>
      <circle cx="73.5" cy="73.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="45" cy="19" r="2" fill={theme.primary[500]}></circle>
      <circle cx="34.5" cy="38.5" r="1.5" fill={theme.primary[500]}></circle>
    </svg>
  );
};

IllustrationJewelry.propTypes = {
  theme: object,
};

export default IllustrationJewelry;
