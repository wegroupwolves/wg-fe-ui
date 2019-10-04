import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';


const ProgressTrack = styled.div`
  position: absolute;
  width: 100%;
  min-width: 574px;
  height: ${({ height }) => height || '5px'};
  background-color: ${key('colors.disabled')};
  @media (max-width: 768px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: ${({ height }) => height || '5px'};
    background-color: ${key('colors.action')};
    width: ${({ step }) => `${step}vw` || 0};
  }
`;

const LoadingBar = ({ activeId, height, offset, stages, stepWidth }) => {
    let step = stepWidth;
    if(stepWidth) {
      if(activeId === 1) step = offset;
      else step= (activeId -1) * (stepWidth + offset);
    } else {
      step = activeId * (100/stages.length);
    } 
  return (
      <ProgressTrack height={height} step={step} />
  );
};

LoadingBar.defaultProps = {
  activeId: 1,
  stages: [
    { 
      key: 'start', 
      name: 'start', 
      id: 1 
    },
    {
      key: 'middle',
      name: 'middle',
      id: 2
    },
    {
      key: 'end',
      name: 'end',
      id: 3
    }
  ]
}

export default LoadingBar;
