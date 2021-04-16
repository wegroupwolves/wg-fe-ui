import React from 'react';
import { object } from 'prop-types';

const IllustrationSingleFamily = ({ theme }) => {
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
        fill={theme.primary[600]}
        d="M51.995 59.5h2.451V26.76l-3.075-4.468H50.29c-3.075 0-3.892 2.242-3.916 3.363v14.581c0 2.287 1.97 3.099 2.955 3.22.44 4.755 1.345 14.422 1.441 15.037.144.768.529 1.009 1.225 1.009z"
      ></path>
      <path
        fill={theme.primary[600]}
        d="M56.862 59.5h-2.45V26.76l3.075-4.468h1.08c3.075 0 3.892 2.242 3.916 3.363v14.581c0 2.287-1.97 3.099-2.954 3.22-.44 4.755-1.346 14.422-1.442 15.037-.144.768-.528 1.009-1.225 1.009z"
      ></path>
      <circle
        cx="54.429"
        cy="16.243"
        r="4.997"
        fill={theme.primary[600]}
      ></circle>
      <circle
        cx="64.382"
        cy="31.606"
        r="3.536"
        fill={theme.primary[500]}
      ></circle>
      <path
        fill={theme.primary[500]}
        d="M64.44 36.656V59.5h-1.201c-.577 0-.753-.4-.769-.601-.224-1.922-.701-5.967-.816-6.774-.116-.807-.497-.993-.673-.985h-1.105c-.711 0-.729-.593-.649-.889l2.21-11.338-.672 1.417-2.474 5.261c-.817 1.681-2.863.597-2.138-.985 1.129-2.466 3.42-7.48 3.555-7.807.168-.408.937-1.826 1.946-1.033.807.634 2.193.857 2.786.889zM64.44 36.656V59.5h1.201c.577 0 .753-.4.769-.601.224-1.922.701-5.967.817-6.774.115-.807.496-.993.672-.985h1.105c.711 0 .729-.593.649-.889l-2.21-11.338.672 1.417 2.475 5.261c.816 1.681 2.862.597 2.138-.985-1.13-2.466-3.421-7.48-3.556-7.807-.168-.408-.937-1.826-1.945-1.033-.808.634-2.195.857-2.787.889zM38.325 49.547l.96 9.776c.065.313.318.937.817.937H42V34.941h-3.675c-.36 0-2.09.145-2.09 2.09v10.45c0 1.614 1.393 2.05 2.09 2.066zM45.675 49.547l-.96 9.776c-.065.313-.318.937-.817.937H42V34.941h3.675c.36 0 2.09.145 2.09 2.09v10.45c0 1.614-1.393 2.05-2.09 2.066z"
      ></path>
      <circle cx="42" cy="30.502" r="3.536" fill={theme.primary[500]}></circle>
      <circle cx="32.535" cy="52.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="43.5" cy="9.746" r="1.5" fill={theme.primary[500]}></circle>
      <circle cx="71.357" cy="21.047" r="1" fill={theme.primary[500]}></circle>
      <rect
        width="2"
        height="8"
        x="34.657"
        y="18.878"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(45 34.657 18.878)"
      ></rect>
      <rect
        width="2"
        height="8"
        x="29"
        y="20.292"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-45 29 20.292)"
      ></rect>
      <rect
        width="1.5"
        height="6"
        x="78.25"
        y="37.895"
        fill={theme.primary[500]}
        rx="0.75"
      ></rect>
      <rect
        width="1.5"
        height="6"
        x="76"
        y="41.645"
        fill={theme.primary[500]}
        rx="0.75"
        transform="rotate(-90 76 41.645)"
      ></rect>
    </svg>
  );
};

IllustrationSingleFamily.propTypes = {
  theme: object,
};

export default IllustrationSingleFamily;
