import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';


const ProgressTrack = styled.div`
  position: absolute;
  width: 100%;
  min-width: 574px;
  height: ${({ height }) => height || '5px'};
  background-color: #C4C4C4;
  @media (max-width: 1200px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: ${({ height }) => height || '5px'};
    background-color: #FF8000;
    width: ${({ step }) => `${step}vw` || 0};
  }
`;

const LoadingBar = ({ activeId, height, offset, stages, stepWidth }) => {
    let step = stepWidth;
    console.log('activeId: ', activeId);
    if(stepWidth) {
      if(activeId === 1) step = offset;
      else step= (activeId -1) * (stepWidth + offset);
    } else {
      step = activeId * (100/stages.length);
    } 
    console.log('step: ', step);
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
