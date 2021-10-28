import React from 'react';
import { string, number } from 'prop-types';

const IconShrinkScreen = ({ className, color, size }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28.084 23.25h9.438a1.382 1.382 0 100-2.762h-6.123L42.402 9.486a1.381 1.381 0 10-1.934-1.934L29.466 18.555v-6.123a1.381 1.381 0 10-2.763 0v9.437a1.381 1.381 0 001.381 1.382zM7.464 42.628a1.381 1.381 0 001.933-.046l10.91-11.141.047 6.123a1.38 1.38 0 102.762-.046l-.138-9.438a1.381 1.381 0 00-1.381-1.38l-9.438.137a1.381 1.381 0 10.046 2.762l6.123-.091-10.864 11.14a1.381 1.381 0 000 1.98z"
        fill={color}
      />
    </svg>
  );
};

IconShrinkScreen.defaultProps = {
  color: 'black',
  size: 30,
};

IconShrinkScreen.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconShrinkScreen;
