import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

const IconArrow = ({ className, color, size }) => {
  return (
    <Svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M 0.999687 7 L 13.000312 7 "
        transform="matrix(3.571429,0,0,3.571429,0,0)"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 7 0.999687 L 13.000312 7 L 7 13.000312 "
        transform="matrix(3.571429,0,0,3.571429,0,0)"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  padding: 0.5rem;
`;

IconArrow.defaultProps = {
  color: 'black',
  size: 30,
};

IconArrow.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconArrow;
