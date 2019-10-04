import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import { string, number, object, arrayOf } from 'prop-types';
import LoadingBar from './LoadingBar'


/**
 * Checks actual stage status
 * @param {string} stage
 */

const checkStatus = (active, stage, stages = null) => {
  if (!stages) return;
  const activeIndex = stages.findIndex(item => item.key === active);
  const stageIndex = stages.findIndex(item => item.key === stage.key);
  if (stageIndex === activeIndex) {
    return 'active';
  } else if (stageIndex < activeIndex) {
    return 'done';
  } else {
    return 'disabled';
  }
};

const Status = styled.span`
    font-family: Lato;
    font-size: 14px;
    font-weight: ${({ active, stage, stages }) => 
      checkStatus(active, stage, stages) === 'active'
      ? 'bold' : 'initial' };
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #646464;
    margin-top: 1.8vh;
    @media (max-width: 1200px) {
      margin-top: 0;
      margin-left: 2vw;
      text-align: justify;
    }
`;

export const ClaimStatus = ({ active, className, counter, stage, stages }) => (
  <Status className={className} active={active} stage={stage} stages={stages}>
    {counter}. {stage.name}
  </Status>
);

const ProgressBar = ({ active, background, className, height, stages, ...otherProps }) => {
  return (
    <div className={className} {...otherProps}>
      <LoadingBar stages={stages} active={active} background={background} height={height} />
      {stages.map((stage,i) => (
        <ClaimStatus key={stage.id} stage={stage} stages={stages} counter={i+1} active={active} />
      ))}
    </div>
  );
};

const StyledProgressBar = styled(ProgressBar)`
  display: flex;
  justify-content: space-around;
  grid-area: Bottom;
  margin: 4vh auto .55vh;
  position: relative;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

StyledProgressBar.displayName = 'ProgressBar'

ProgressBar.defaultProps = {
  active: 'middle',
  height: '7px',
  otherProps: {},
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

ProgressBar.propTypes = {
  active: string,
  height: string,
  otherProps: object,
  stages: arrayOf({
    key: string,
    name: string,
    id: number
  })
}

export default StyledProgressBar;
