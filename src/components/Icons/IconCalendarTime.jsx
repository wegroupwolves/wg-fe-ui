import * as React from 'react';
import { string, number } from 'prop-types';

const SvgComponent = ({ className, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 8a2 2 0 10-4 0v1h-3.09C8.81 9 7 11.952 7 14.625v21.75C7 39.048 8.81 42 11.91 42h12.187a13.899 13.899 0 01-1.374-4H11.909c-.09 0-.278-.04-.497-.313-.223-.278-.412-.735-.412-1.312V22.728h19.758A13.95 13.95 0 0136.5 21.5c2.346 0 4.558.577 6.5 1.597v-8.472C43 11.952 41.19 9 38.09 9H35V8a2 2 0 10-4 0v1H19V8zm12 7v-2H19v2a2 2 0 11-4 0v-2h-3.09c-.09 0-.279.04-.498.313-.223.278-.412.735-.412 1.312v4.103h28v-4.103c0-.577-.19-1.034-.412-1.312-.22-.273-.408-.313-.497-.313H35v2a2 2 0 11-4 0z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5 27a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM24 35.5C24 28.596 29.596 23 36.5 23S49 28.596 49 35.5 43.404 48 36.5 48 24 42.404 24 35.5z"
        fill={color}
      />
      <path
        d="M36.154 29.5c-.926 0-1.654.766-1.654 1.684v5.724c0 .63.346 1.212.905 1.502l3.692 1.907a1.64 1.64 0 002.228-.748 1.699 1.699 0 00-.73-2.255l-2.787-1.44v-4.69c0-.918-.729-1.684-1.654-1.684z"
        fill={color}
      />
    </svg>
  );
};

SvgComponent.defaultProps = {
  color: 'black',
  size: 30,
};

SvgComponent.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default SvgComponent;
