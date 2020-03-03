import React from 'react';
import { string } from 'prop-types';

const IconSmsFilled = ({ className, color }) => {
  return (
    <svg
      id="icons"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <title>SMS</title>
      <path
        d="M35 16V10C35 9.46957 34.7893 8.96086 34.4142 8.58579C34.0391 8.21071 33.5304 8 33 8H15C14.4696 8 13.9609 8.21071 13.5858 8.58579C13.2107 8.96086 13 9.46957 13 10V43C13 43.5304 13.2107 44.0391 13.5858 44.4142C13.9609 44.7893 14.4696 45 15 45H33C33.5304 45 34.0391 44.7893 34.4142 44.4142C34.7893 44.0391 35 43.5304 35 43V35H31V37H17V12H31V16H35ZM24 39C24.3956 39 24.7822 39.1173 25.1111 39.3371C25.44 39.5568 25.6964 39.8692 25.8478 40.2346C25.9991 40.6001 26.0387 41.0022 25.9616 41.3902C25.8844 41.7781 25.6939 42.1345 25.4142 42.4142C25.1345 42.6939 24.7781 42.8844 24.3902 42.9616C24.0022 43.0387 23.6001 42.9991 23.2346 42.8478C22.8692 42.6964 22.5568 42.44 22.3371 42.1111C22.1173 41.7822 22 41.3956 22 41C22 40.4696 22.2107 39.9609 22.5858 39.5858C22.9609 39.2107 23.4696 39 24 39Z"
        fill={color}
      />
      <path
        d="M21 19V32C21 32.2652 21.1054 32.5196 21.2929 32.7071C21.4804 32.8946 21.7348 33 22 33H40C40.2652 33 40.5196 32.8946 40.7071 32.7071C40.8946 32.5196 41 32.2652 41 32V19C41 18.7348 40.8946 18.4804 40.7071 18.2929C40.5196 18.1054 40.2652 18 40 18H22C21.7348 18 21.4804 18.1054 21.2929 18.2929C21.1054 18.4804 21 18.7348 21 19ZM34.88 21L31.28 24.53C31.1875 24.6157 31.0661 24.6634 30.94 24.6634C30.8139 24.6634 30.6925 24.6157 30.6 24.53L26.6 20.98L34.88 21ZM38 30H24V22.66L30.35 28.37C30.5355 28.5444 30.7804 28.6415 31.035 28.6415C31.2896 28.6415 31.5345 28.5444 31.72 28.37L38 22.12V30Z"
        fill={color}
      />
    </svg>
  );
};

IconSmsFilled.defaultProps = {
  color: 'black',
};

IconSmsFilled.propTypes = {
  color: string,
  className: string,
};

export default IconSmsFilled;
