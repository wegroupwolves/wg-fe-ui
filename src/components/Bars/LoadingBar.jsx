import React from 'react';
import styled from 'styled-components';
import { string, object, number } from 'prop-types';

const ProgressTrack = styled.div`
  position: absolute;
  width: 100%;
  min-width: 574px;
  height: ${({ height }) => height || '5px'};
  background-color: ${({ background, theme }) =>
    background || theme.ui.backgroundLight};
  @media (max-width: 768px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: ${({ height }) => height || '5px'};
    background-color: ${({ filledColor, theme }) =>
      filledColor || theme.brand.primary};
    width: ${({ len, activeId }) => (len ? `${activeId * (100 / len)}%` : 0)};
    transition: width 1s ease-in-out;
  }
`;

const LoadingBar = ({
  activeId,
  background,
  height,
  stagesLength,
  ...otherProps
}) => {
  const currentId = activeId - 1;
  const len = stagesLength - 1;
  return (
    <ProgressTrack
      height={height}
      activeId={currentId}
      background={background}
      len={len}
      {...otherProps}
    />
  );
};

LoadingBar.defaultProps = {
  activeId: 1,
  background: '',
  height: '7px',
  otherProps: {},
};

LoadingBar.propTypes = {
  activeId: number,
  background: string,
  otherProps: object,
  stagesLength: number,
  height: string,
};

export default LoadingBar;
