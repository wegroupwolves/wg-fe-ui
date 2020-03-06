import React from 'react';
import { string } from 'prop-types';

const IconActionPower = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Power</title>
      <path d="M27 11H23V22H27V11Z" fill={color} />
      <path
        d="M33.13 15.87L30.28 18.72C31.82 19.8356 32.9671 21.4104 33.5566 23.2184C34.1461 25.0264 34.1478 26.9747 33.5614 28.7837C32.975 30.5927 31.8307 32.1695 30.2926 33.2878C28.7545 34.4061 26.9017 35.0085 25 35.0085C23.0983 35.0085 21.2455 34.4061 19.7074 33.2878C18.1693 32.1695 17.025 30.5927 16.4386 28.7837C15.8522 26.9747 15.8539 25.0264 16.4434 23.2184C17.0329 21.4104 18.18 19.8356 19.72 18.72L16.87 15.87C14.7687 17.554 13.2423 19.8491 12.5015 22.438C11.7608 25.0269 11.8423 27.782 12.7347 30.3226C13.6272 32.8632 15.2866 35.064 17.4837 36.621C19.6808 38.1779 22.3072 39.0141 25 39.0141C27.6928 39.0141 30.3192 38.1779 32.5163 36.621C34.7134 35.064 36.3728 32.8632 37.2653 30.3226C38.1577 27.782 38.2392 25.0269 37.4985 22.438C36.7577 19.8491 35.2313 17.554 33.13 15.87Z"
        fill={color}
      />
    </svg>
  );
};

IconActionPower.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionPower.propTypes = {
  color: string,
  className: string,
};

export default IconActionPower;
