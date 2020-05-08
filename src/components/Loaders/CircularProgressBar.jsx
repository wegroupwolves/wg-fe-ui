import React from 'react';
import { number, node, bool } from 'prop-types';
import styled from 'styled-components';

const CircularProgressBar = ({
  children,
  currentItems,
  maxItems,
  relative,
}) => {
  const calculatedPercentage = (currentItems * 100) / maxItems;

  return (
    <Wrapper percentage={calculatedPercentage} relative={relative}>
      <svg>
        <circle cx="140" cy="140" r="140"></circle>
        <circle cx="140" cy="140" r="140"></circle>
      </svg>

      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: ${({ relative }) => (relative ? 'relative' : 'absolute')};
  top: ${({ relative }) => (relative ? '' : '50%')};
  left: ${({ relative }) => (relative ? '' : '50%')};
  transform: ${({ relative }) => (relative ? '' : 'translate(-50%, -50%)')};
  z-index: ${({ relative }) => (relative ? '' : '9999')};

  svg {
    position: relative;
    width: 290px;
    height: 290px;
    transform: rotate(-90deg);

    circle {
      width: 300px;
      height: 300px;
      fill: none;
      stroke-width: 10;
      stroke: black;
      transform: translate(5px, 5px);
      stroke-dasharray: 880;
      stroke-dashoffset: 880;

      &:nth-child(1) {
        stroke-dashoffset: 0;
        stroke: #f0f1f3;
      }

      &:nth-child(2) {
        stroke-dashoffset: ${({ percentage }) =>
          `calc(880 - (880 * ${percentage}) / 100)`};
        stroke: ${({ theme }) => theme.brand.primary};
      }
    }
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

CircularProgressBar.propTypes = {
  /** Children shall be displayed inside the circle. */
  children: node,
  /** Current progress of the progressbar. */
  currentItems: number.isRequired,
  /** Max items of the progressbar. */
  maxItems: number.isRequired,
  relative: bool,
};

export default CircularProgressBar;
