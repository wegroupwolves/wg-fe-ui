import React from 'react';
import { string } from 'prop-types';

const IconSemiDetached = ({ color, secondaryColor, size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 25 25"
    >
      <path
        fill={secondaryColor}
        d="M17.773 9.285l-1.779-1.194V5.412a.5.5 0 00-.5-.5h-1.999a.5.5 0 00-.5.5v.67l-2.224-1.5a.5.5 0 00-.55 0L3.226 9.275a.5.5 0 00-.225.42V20a.5.5 0 00.5.5h2.998v-4.998a.5.5 0 01.5-.5h2.499a.5.5 0 01.5.5V20.5h7.496a.5.5 0 00.5-.5V9.705a.5.5 0 00-.22-.42z"
      ></path>
      <path
        fill={color}
        d="M21.771 9.285l-1.779-1.194V5.412a.5.5 0 00-.5-.5h-1.999a.5.5 0 00-.5.5v.67l-2.223-1.5a.5.5 0 00-.55 0L7.223 9.275a.5.5 0 00-.225.42V20a.5.5 0 00.5.5h2.998v-4.998a.5.5 0 01.5-.5h2.499a.5.5 0 01.5.5V20.5h7.496a.5.5 0 00.5-.5V9.705a.499.499 0 00-.22-.42z"
      ></path>
    </svg>
  );
};

IconSemiDetached.defaultProps = {
  color: 'black',
  secondaryColor: 'darkgrey',
  size: 30,
};

IconSemiDetached.propTypes = {
  color: string,
  secondaryColor: string,
  className: string,
  size: string,
};

export default IconSemiDetached;
