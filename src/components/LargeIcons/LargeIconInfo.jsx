import React from 'react';
import { object, bool } from 'prop-types';

const LargeIconInfo = ({ activeTheme, inactiveTheme, active }) => {
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
      width="44"
      height="46"
      fill="none"
      viewBox="0 0 44 46"
    >
      <path
        stroke={theme.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 22a3 3 0 013-3h22a3 3 0 013 3v14a3 3 0 01-3 3h-.5v6l-6-6H18a3 3 0 01-3-3V22z"
      ></path>
      <path
        fill={theme.secondary}
        fillRule="evenodd"
        d="M26 1a3 3 0 013 3v11H17a6 6 0 00-6 6l-5.5 6v-6H4a3 3 0 01-3-3V4a3 3 0 013-3h22z"
        clipRule="evenodd"
      ></path>
      <path
        fill={theme.primary}
        d="M29 15v.75a.75.75 0 00.75-.75H29zm-18 6l.553.507A.75.75 0 0011.75 21H11zm-5.5 6h-.75a.75.75 0 001.303.507L5.5 27zm0-6h.75a.75.75 0 00-.75-.75V21zM29.75 4A3.75 3.75 0 0026 .25v1.5A2.25 2.25 0 0128.25 4h1.5zm0 11V4h-1.5v11h1.5zM17 15.75h12v-1.5H17v1.5zM11.75 21c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0010.25 21h1.5zm-5.697 6.507l5.5-6-1.106-1.014-5.5 6 1.106 1.014zM4.75 21v6h1.5v-6h-1.5zm-.75.75h1.5v-1.5H4v1.5zM.25 18A3.75 3.75 0 004 21.75v-1.5A2.25 2.25 0 011.75 18H.25zm0-14v14h1.5V4H.25zM4 .25A3.75 3.75 0 00.25 4h1.5A2.25 2.25 0 014 1.75V.25zm22 0H4v1.5h22V.25zM30.896 24.68c0 .912-.72 1.632-1.632 1.632a1.7 1.7 0 01-1.68-1.68c.048-.912.768-1.632 1.68-1.632.912 0 1.632.768 1.632 1.68zM26.864 27.944c-.144 0-.336-.048-.528-.096a.61.61 0 01-.336-.432c.048-.192.144-.288.384-.336.144-.048.24-.048.384-.048h3.12c.384 0 .624.192.624.576 0 .336-.048.624-.096.96-.192 1.2-.432 2.352-.624 3.552-.048.384-.144.768-.192 1.152-.048.192 0 .384.048.576.048.24.24.384.48.336.24-.048.432-.096.624-.192.192-.048.336-.192.48-.24.24-.096.432.096.384.336a1.045 1.045 0 01-.24.384c-.576.576-1.296.96-2.16.96-.384 0-.816 0-1.2-.048-.672-.096-1.488-.912-1.392-1.776.096-.576.192-1.2.288-1.776a68.47 68.47 0 01.528-3.072v-.192c0-.432-.144-.576-.576-.624z"
      ></path>
    </svg>
  );
};

LargeIconInfo.propTypes = {
  activeTheme: object,
  inactiveTheme: object,
  active: bool,
};

export default LargeIconInfo;
