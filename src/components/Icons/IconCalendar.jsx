import React from 'react';
import { string, number } from 'prop-types';

const IconCalendar = ({ className, color, size }) => {
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
        d="M17 6a2 2 0 012 2v1h12V8a2 2 0 114 0v1h3.09c3.1 0 4.91 2.952 4.91 5.625v21.75C43 39.048 41.19 42 38.09 42H11.91C8.81 42 7 39.048 7 36.375v-21.75C7 11.952 8.81 9 11.91 9H15V8a2 2 0 012-2zm14 7v2a2 2 0 104 0v-2h3.09c.09 0 .279.04.498.313.223.278.412.735.412 1.312v4.103H11v-4.103c0-.577.19-1.034.412-1.312.22-.273.408-.313.497-.313H15v2a2 2 0 104 0v-2h12zm8 9.728v13.647c0 .577-.19 1.034-.412 1.312-.22.273-.408.313-.497.313H11.909c-.09 0-.278-.04-.497-.313-.223-.278-.412-.735-.412-1.312V22.728h28z"
        fill={color}
      />
    </svg>
  );
};

IconCalendar.defaultProps = {
  color: 'black',
  size: 30,
};

IconCalendar.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconCalendar;
