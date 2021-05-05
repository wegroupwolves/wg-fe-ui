import React from 'react';
import { object } from 'prop-types';

const IllustrationPet = ({ theme }) => {
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
        d="M56.585 33.97a3.44 3.44 0 00-.83-3.79l-3.17-3.12a4.59 4.59 0 00-6.32 0l-3.26 3.08a3.48 3.48 0 002.46 6c1.42 0 2.5-.72 4-.71 1.5.01 2.65.63 4 .7a3.4 3.4 0 003.12-2.16zm-1.86-.74a1.42 1.42 0 01-1.36.92 20.773 20.773 0 00-4-.71c-1.59 0-2.68.61-4 .72a1.46 1.46 0 01-1-2.52l3.22-3.13a2.6 2.6 0 013.58 0l3.25 3.09a1.4 1.4 0 01.35 1.59l-.04.04zM57.835 22.37c-3.53-.63-4.73 6.24-1.54 6.91 3.55.61 4.72-6.24 1.54-6.91zm-.19 3.6c-.13.56-.46 1.25-.91 1.38-.11 0-.47-.63-.25-1.64.13-.55.46-1.25.91-1.37.12 0 .47.63.25 1.63zM40.255 28.52c2.17 2.14 4.73-.32 4-3.26-.43-1.94-1.88-3.21-3.3-2.89-2.56.66-2.3 4.6-.7 6.15zm.88-3.87c.09-.26.2-.33.21-.33.01 0 .69.39.92 1.37.23.98-.14 1.61-.25 1.64-.82-.3-1.17-1.91-.88-2.68z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M46.465 25.72c1.48 0 2.68-1.37 2.91-3.21.65 4.67 5.86 4 5.88-.66.02-4.66-5.23-5.33-5.88-.66-.66-4.68-5.87-4-5.88.66 0 2.17 1.3 3.87 2.97 3.87zm5.82-5.75c1.26.16 1.26 3.59 0 3.75-1.25-.16-1.25-3.59 0-3.75zm-5.82 0c1.25.16 1.25 3.59 0 3.75-1.26-.16-1.26-3.59 0-3.75zM79.046 45.89a3.44 3.44 0 00-.83-3.79l-3.26-3.08a4.59 4.59 0 00-6.32 0l-3.26 3.08a3.48 3.48 0 002.46 6c1.42 0 2.51-.72 4-.71 1.49.01 2.65.62 4 .7a3.4 3.4 0 003.21-2.2zm-1.85-.74a1.45 1.45 0 01-1.37.92 20.515 20.515 0 00-4-.71c-1.59 0-2.68.61-4 .72a1.459 1.459 0 01-1-2.53l3.25-3.08a2.6 2.6 0 013.58 0l3.25 3.08a1.44 1.44 0 01.29 1.6zM77.055 39.62c1.1 2.9 4.45 1.64 5-1.28 1-4.59-4-5.68-5.06-1.12a4.4 4.4 0 00.06 2.4zm1.85-2c.22-.93.74-1.39.92-1.38.18.01.46.63.24 1.64-.22 1.01-.82 1.41-.91 1.37-.36-.28-.37-1.04-.25-1.6v-.03zM64.435 41.28c1.75 0 2.65-1.95 2.2-4.06-.55-3-3.88-4.16-5-1.29-.79 1.98.72 5.46 2.8 5.35zm-.85-4.68c.09-.23.19-.32.22-.33.03-.01.69.4.91 1.38.22.98-.14 1.61-.25 1.63-.11.02-.7-.42-.91-1.37a2.49 2.49 0 01.03-1.31z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M68.885 37.68c1.49 0 2.68-1.37 2.91-3.22.66 4.67 5.87 4 5.88-.66.01-4.66-5.23-5.33-5.88-.66-.65-4.67-5.86-4-5.88.66 0 2.17 1.31 3.88 2.97 3.88zm5.82-5.71c1.26.16 1.26 3.59 0 3.75-1.25-.2-1.25-3.63 0-3.75zm-5.82 0c1.25.16 1.25 3.59 0 3.75-1.3-.2-1.3-3.63 0-3.75zM52.585 54.97a4.59 4.59 0 00-6.32 0l-3.26 3.08a3.48 3.48 0 002.46 6c1.42 0 2.5-.72 4-.71 1.5.01 2.65.63 4 .71a3.48 3.48 0 002.42-6l-3.3-3.08zm2.23 6.13a1.41 1.41 0 01-1.36.92 20.788 20.788 0 00-4-.71c-1.59 0-2.68.61-4 .72a1.46 1.46 0 01-1-2.52l3.13-3.1a2.62 2.62 0 013.58 0l3.25 3.09a1.4 1.4 0 01.35 1.59l.05.01zM57.835 50.27c-3.41-.59-4.87 6-1.54 6.91 3.54.61 4.72-6.21 1.54-6.91zm-.19 3.58c-.12.55-.47 1.26-.91 1.38a2.28 2.28 0 01.66-3c.12.01.47.62.25 1.62z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M49.375 49.09c-.66-4.67-5.87-4-5.88.66-.01 4.66 5.22 5.33 5.88.66.65 4.67 5.86 4 5.88-.66.02-4.66-5.23-5.33-5.88-.66zm-2.91 2.53c-1.26-.16-1.26-3.59 0-3.75 1.25.16 1.25 3.59 0 3.75zm6.79-1.87c-.1 2.46-1.84 2.46-1.93 0 .09-2.46 1.83-2.46 1.93 0z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M42.445 57.18c1.64-.37 2.15-2.45 1.77-4-.55-3-3.89-4.15-5-1.28-.84 2.07.89 5.85 3.23 5.28zm-1.34-3.33a1.85 1.85 0 01.24-1.63c.15 0 .69.4.92 1.37.12.55.1 1.35-.25 1.64-.12.01-.69-.38-.91-1.38zM74.956 66.97a4.59 4.59 0 00-6.32 0l-3.26 3a3.48 3.48 0 002.46 6c1.42 0 2.51-.72 4-.71 1.49.01 2.65.62 4 .7a3.47 3.47 0 002.42-6l-3.3-2.99zm2.24 6.13a1.45 1.45 0 01-1.37.92 20.515 20.515 0 00-4-.71c-1.59 0-2.68.61-4 .72a1.459 1.459 0 01-1-2.53l3.25-3.08a2.6 2.6 0 013.58 0l3.25 3.08a1.44 1.44 0 01.29 1.55v.05zM80.255 62.22c-3.18-.74-5 6-1.53 6.92 3.39.65 4.86-6.17 1.53-6.92zm-.19 3.59c-.22 1-.82 1.4-.91 1.37-.36-.3-.37-1.07-.25-1.63.22-1 .8-1.41.92-1.38.12.03.46.63.24 1.64z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M71.795 61.04c-.65-4.67-5.86-4-5.88.66-.02 4.66 5.23 5.33 5.88.66.66 4.67 5.87 4 5.88-.66.01-4.66-5.23-5.33-5.88-.66zm-2.91 2.54c-1.3-.16-1.3-3.61 0-3.75 1.25.14 1.25 3.59 0 3.75zm6.79-1.88c-.1 2.46-1.83 2.46-1.93 0 .1-2.46 1.84-2.46 1.93 0z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M64.876 69.14c1.42-.32 2.19-2.08 1.76-4-.55-3-3.88-4.15-5-1.29-.84 2.12.89 5.85 3.24 5.29zm-1.35-3.33a1.88 1.88 0 01.25-1.64c.14 0 .69.4.91 1.38.22.98-.14 1.61-.25 1.63-.11.02-.7-.42-.91-1.37z"
      ></path>
      <rect
        width="2"
        height="8"
        x="79"
        y="20"
        fill={theme.primary[500]}
        rx="1"
      ></rect>
      <rect
        width="2"
        height="8"
        x="76"
        y="25"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-90 76 25)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="54.639"
        y="69.811"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 54.639 69.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="49.81"
        y="71.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 49.81 71.018)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="29.639"
        y="35.81"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 29.639 35.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="24.811"
        y="37.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 24.81 37.018)"
      ></rect>
      <circle cx="88.5" cy="61.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="38" cy="14" r="2" fill={theme.primary[500]}></circle>
      <circle cx="95.5" cy="39.5" r="1.5" fill={theme.primary[500]}></circle>
    </svg>
  );
};

IllustrationPet.propTypes = {
  theme: object,
};

export default IllustrationPet;
