import React from 'react';
import { string } from 'prop-types';

const IconAttached = ({ color, secondaryColor, size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      className={className}
    >
      <path
        fill={secondaryColor}
        d="M15.773 9.285l-1.779-1.194V5.412a.5.5 0 00-.5-.5h-1.999a.5.5 0 00-.5.5v.67l-2.224-1.5a.5.5 0 00-.55 0L1.226 9.275a.5.5 0 00-.225.42V20a.5.5 0 00.5.5h2.998v-4.998a.5.5 0 01.5-.5h2.499a.5.5 0 01.5.5V20.5h7.496a.5.5 0 00.5-.5V9.705a.5.5 0 00-.22-.42z"
      ></path>
      <path
        fill={secondaryColor}
        d="M23.582 9.285l-1.78-1.194V5.412a.5.5 0 00-.5-.5h-1.998a.5.5 0 00-.5.5v.67l-2.224-1.5a.5.5 0 00-.55 0L9.033 9.275a.5.5 0 00-.224.42V20a.5.5 0 00.5.5h2.998v-4.998a.5.5 0 01.5-.5h2.499a.5.5 0 01.5.5V20.5h7.496a.5.5 0 00.5-.5V9.705a.499.499 0 00-.22-.42z"
      ></path>
      <path
        fill={color}
        d="M19.771 9.285l-1.779-1.194V5.412a.5.5 0 00-.5-.5h-1.999a.5.5 0 00-.5.5v.67l-2.224-1.5a.5.5 0 00-.55 0L5.224 9.275a.5.5 0 00-.225.42V20a.5.5 0 00.5.5h2.998v-4.998a.5.5 0 01.5-.5h2.499a.5.5 0 01.5.5V20.5h7.496a.5.5 0 00.5-.5V9.705a.5.5 0 00-.22-.42z"
      ></path>
    </svg>
  );
};

IconAttached.defaultProps = {
  color: 'black',
  secondaryColor: 'darkgrey',
  size: 30,
};

IconAttached.propTypes = {
  color: string,
  secondaryColor: string,
  className: string,
  size: string,
};

export default IconAttached;
