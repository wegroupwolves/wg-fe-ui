import React from 'react';
import { object } from 'prop-types';

const IllustrationDrone = ({ theme }) => {
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
        d="M75.874 40.251c-1.71 0-3.379-.478-4.827-1.382a1.116 1.116 0 011.183-1.894 6.872 6.872 0 003.644 1.044 6.9 6.9 0 006.893-6.893 6.9 6.9 0 00-6.892-6.893 6.9 6.9 0 00-6.622 8.817l5.661-2.923a1.117 1.117 0 011.488 1.535l-1.154 2.072a1.117 1.117 0 01-2.042-.213l-4.032 2.082a1.117 1.117 0 01-1.517-.506 9.044 9.044 0 01-.908-3.972c0-5.031 4.094-9.125 9.126-9.125C80.906 22 85 26.094 85 31.126c0 5.031-4.094 9.125-9.126 9.125zM46.126 40.252c-5.032 0-9.126-4.094-9.126-9.126 0-5.031 4.094-9.125 9.126-9.125 5.031 0 9.125 4.094 9.125 9.125 0 1.413-.316 2.77-.938 4.032a1.116 1.116 0 01-1.544.481l-.622-.346a1.116 1.116 0 01.554-2.092 6.9 6.9 0 00-6.575-8.968 6.9 6.9 0 00-6.893 6.893 6.9 6.9 0 006.893 6.893c.795 0 1.584-.138 2.327-.404l-3.327-6.444a1.116 1.116 0 011.535-1.487l1.695.944a1.116 1.116 0 01.008 1.946l2.612 5.06a1.116 1.116 0 01-.454 1.49 9.135 9.135 0 01-4.396 1.128zM75.875 70c-5.032 0-9.126-4.094-9.126-9.126 0-1.533.389-3.051 1.125-4.39a1.116 1.116 0 011.52-.437l2.883 1.605-1.593-3.086a1.116 1.116 0 01.406-1.463 9.106 9.106 0 014.785-1.355 1.116 1.116 0 010 2.233c-.933 0-1.849.188-2.697.549l2.78 5.384a1.117 1.117 0 01-1.535 1.487l-5.052-2.813a6.9 6.9 0 006.504 9.179 6.9 6.9 0 006.893-6.893 6.87 6.87 0 00-3.184-5.81 1.116 1.116 0 011.203-1.881A9.093 9.093 0 0185 60.874C85 65.906 80.906 70 75.875 70zM46.126 70C41.094 70 37 65.906 37 60.874c0-5.032 4.094-9.126 9.126-9.126a9.07 9.07 0 013.569.726 1.116 1.116 0 11-.874 2.054 6.9 6.9 0 00-9.588 6.346 6.9 6.9 0 006.893 6.893 6.9 6.9 0 006.893-6.893c0-1.079-.249-2.127-.725-3.078l-6.124 3.162a1.116 1.116 0 01-1.487-1.535l1-1.795a1.116 1.116 0 011.976.049l4.544-2.346a1.116 1.116 0 011.43.356 9.073 9.073 0 011.618 5.187c0 5.032-4.094 9.126-9.125 9.126z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M74.852 61.32c-.404 0-.794-.22-.992-.604l-5.187-10.045a10.624 10.624 0 01-1.179-4.853c0-1.797.462-3.577 1.336-5.146l3.822-6.865-6.98 3.604a10.624 10.624 0 01-4.854 1.18c-1.797 0-3.576-.462-5.146-1.337l-6.865-3.821.006.01 3.599 6.97a10.626 10.626 0 011.178 4.854c0 1.797-.462 3.576-1.336 5.146l-3.821 6.864 6.98-3.604a10.625 10.625 0 014.854-1.179c1.796 0 3.576.462 5.146 1.336l5.438 3.028a1.116 1.116 0 01-1.086 1.95l-5.438-3.027a8.368 8.368 0 00-4.06-1.054c-1.327 0-2.65.322-3.83.93L46.17 60.958a1.116 1.116 0 01-1.487-1.535l5.62-10.096a8.367 8.367 0 001.055-4.06c0-1.327-.322-2.65-.93-3.83l-3.599-6.97a1.116 1.116 0 01.916-1.625l-.535-.298a1.116 1.116 0 111.086-1.951l8.462 4.711a8.367 8.367 0 004.06 1.054 8.38 8.38 0 003.829-.93l10.267-5.301a1.117 1.117 0 011.488 1.535L70.78 41.758a8.367 8.367 0 00-1.054 4.06c0 1.326.322 2.65.93 3.829l5.187 10.045a1.117 1.117 0 01-.992 1.629zM79.307 31.098c-.616 0-1.116-.5-1.116-1.117 0-.646-.526-1.172-1.172-1.172a1.116 1.116 0 010-2.232 3.408 3.408 0 013.404 3.404c0 .617-.5 1.117-1.116 1.117zM42.693 31.098c-.617 0-1.116-.5-1.116-1.117a3.408 3.408 0 013.404-3.404 1.116 1.116 0 110 2.232c-.646 0-1.172.526-1.172 1.172 0 .617-.5 1.117-1.116 1.117zM77.019 65.423a1.116 1.116 0 010-2.232c.646 0 1.172-.526 1.172-1.172a1.116 1.116 0 012.233 0 3.409 3.409 0 01-3.405 3.404zM44.981 65.423a3.408 3.408 0 01-3.404-3.404 1.116 1.116 0 112.232 0c0 .646.526 1.172 1.172 1.172a1.116 1.116 0 010 2.232z"
      ></path>
      <path
        fill={theme.primary[500]}
        d="M60.428 49.405a3.981 3.981 0 01-3.977-3.977 3.981 3.981 0 013.977-3.977 3.981 3.981 0 013.976 3.977 3.981 3.981 0 01-3.976 3.977zm0-5.721c-.962 0-1.744.782-1.744 1.744s.782 1.744 1.744 1.744c.961 0 1.744-.782 1.744-1.744s-.783-1.744-1.744-1.744zM63.79 67.768c-.616 0-1.116-.5-1.116-1.117v-7.813a1.116 1.116 0 012.233 0v7.813c0 .617-.5 1.117-1.116 1.117zM58.21 71.116c-.617 0-1.117-.5-1.117-1.116v-8.93a1.116 1.116 0 012.233 0V70c0 .617-.5 1.116-1.117 1.116z"
      ></path>
      <rect
        width="2"
        height="8"
        x="33"
        y="70"
        fill={theme.primary[500]}
        rx="1"
      ></rect>
      <rect
        width="2"
        height="8"
        x="30"
        y="75"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-90 30 75)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="94.639"
        y="59.81"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 94.639 59.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="89.811"
        y="61.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 89.81 61.018)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="40.639"
        y="10.81"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 40.639 10.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="35.81"
        y="12.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 35.81 12.018)"
      ></rect>
      <circle cx="89.5" cy="48.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="28" cy="44" r="2" fill={theme.primary[500]}></circle>
      <circle cx="90.5" cy="20.5" r="1.5" fill={theme.primary[500]}></circle>
    </svg>
  );
};

IllustrationDrone.propTypes = {
  theme: object,
};

export default IllustrationDrone;
