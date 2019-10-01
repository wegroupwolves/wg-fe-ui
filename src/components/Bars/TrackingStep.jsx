import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import FilingIcon from './../Icons/Filing'
import { node, number, string, objectOf } from 'prop-types';

const backgroundColor = {
    done: '#FF8000',
}

const borderColor = {
    active: '#FF8000',
    disabled: '#D3D4D8'
}

const iconColor = {
    done: '#FFFFFF',
    active: '#FF8000',
    disabled: '#D3D4D8'
}

/**
 * Checks actual stage status
 * @param {string} stage
 */

const getStatus = (active, stage, stages = null) => {
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

const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    display: ${({ status }) =>
      status !== 'active' ? 'none' : 'flex'};
    width: auto;
    flex-direction: row;
  }
  &::after {
    content: '${({ name }) => name || ''}';
    display: block;
    position: absolute;
    top: 5.76vh;
    font-size: calc(9px + 0.26vw);
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 1.8vh;
    color: #A29C95;
    @media (max-width: 1200px) {
    margin-top: 0;
    margin-left: 2vw;
    text-align: justify;
    }
    width: 5vw;
  }
`;

const StyledIcon = styled.div`
  background-color: ${({ status}) => backgroundColor[status] || '#FFFFFF'};
  display: flex;
  border-radius: 50%;
  width: 40px;
  height: 39px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    background-color: ${({ status }) =>
      backgroundColor[status] || '#FFFFFF' };
    border: ${({ status }) =>
      `2.26px solid ${borderColor[status]}` || 'none'};
  }
  path {
    fill: #D3D4D8;
    stroke: #D3D4D8;
    @media (min-width: 1200px) {
      fill: ${({ status }) =>
        iconColor[status] || '#FFFFFF' };
      fill: ${({ status }) =>
        iconColor[status] || '#FFFFFF' }; 
      stroke: ${({ status }) =>
        iconColor[status] || '#FFFFFF' };
    }
  }
`;


const TrackingStep = ({ active, stage, stages }) => {
    const status = getStatus(active, stage, stages);
    console.log('status: ', status);
    return (
    <Status status={status} name={stage.name}>
        <StyledIcon status={status}>
            {stage.icon}
        </StyledIcon>
    </Status>
  );
};

const StyledTrackingStep = styled(TrackingStep)`
  display: flex;
  justify-content: space-around;
  margin: 4vh auto .55vh;
  position: relative;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

StyledTrackingStep.displayName = 'TrackingStep'

TrackingStep.defaultProps = {
  active: 'filling',
  stage: { key: 'filing', name: 'filing', icon: <FilingIcon />, id: 1 },
    
}

TrackingStep.propTypes = {
  active: string,
  stage: objectOf({
    key: string,
    name: string,
    icon: node,
    id: number
  })
}

export default StyledTrackingStep;
