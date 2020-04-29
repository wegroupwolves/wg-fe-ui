import React from 'react';
import { number, bool } from 'prop-types';
import styled from 'styled-components';

const PieProgressIndicator = ({ percentage, big }) => {
  const calculatedPercentage = percentage * 1.58;

  return (
    <Wrapper size={big}>
      <svg width="106" height="106">
        <OuterCircle
          r="25"
          cx="53"
          cy="53"
          percentage={calculatedPercentage}
        ></OuterCircle>
        <BorderCircle r="50" cx="53" cy="53"></BorderCircle>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transform: ${({ size }) =>
    size ? 'rotate(-90deg)' : 'rotate(-90deg) scale(0.18)'};
`;

const OuterCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme }) => theme.brand.primary};
  stroke-width: 50;
  stroke-dasharray: ${({ percentage }) => `${percentage} 158`};
`;

const BorderCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme }) => theme.brand.primary};
  stroke-width: 5;
`;

PieProgressIndicator.propTypes = {
  /** The percentage that should be displayed. */
  percentage: number.isRequired,
  /** Set big to true to show a bigger version of the indicator. */
  big: bool,
};

export default PieProgressIndicator;
