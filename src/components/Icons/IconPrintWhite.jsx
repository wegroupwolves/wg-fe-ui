import React from 'react';
import { string, number, oneOfType } from 'prop-types';

const IconPrintWhite = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 15 16"
    >
      <path
        d="M14.2736 3.27619H12.2397V0.8C12.2397 0.380952 11.9128 0.0380952 11.5133 0.0380952L3.48668 0C3.30508 0 3.12349 0.0761905 2.97821 0.228571C2.83293 0.380952 2.76029 0.571429 2.76029 0.761905V3.27619H0.726392C0.326877 3.27619 0 3.61905 0 4.0381V11.6952C0 12.1143 0.326877 12.4571 0.726392 12.4571H2.76029V15.2381C2.76029 15.6571 3.08717 16 3.48668 16H11.477C11.8765 16 12.2034 15.6571 12.2034 15.2381V12.419H14.2373C14.6368 12.419 14.9637 12.0762 14.9637 11.6571V4.0381C15 3.61905 14.6731 3.27619 14.2736 3.27619ZM4.21308 1.52381L10.7506 1.5619V3.27619H4.21308V1.52381ZM10.7506 14.4762H4.21308V9.52381H10.7506V14.4762ZM13.5472 10.9333H12.2397V8.8C12.2397 8.38095 11.9128 8.0381 11.5133 8.0381H3.523C3.12349 8.0381 2.79661 8.38095 2.79661 8.8V10.9333H1.45278V4.8H3.48668H11.477H13.5109V10.9333H13.5472Z"
        fill={color}
      />
    </svg>
  );
};

IconPrintWhite.defaultProps = {
  color: 'black',
  size: 30,
};

IconPrintWhite.propTypes = {
  color: string,
  className: string,
  size: oneOfType([string, number]),
};

export default IconPrintWhite;
