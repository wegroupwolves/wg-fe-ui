import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import FilingIcon from './../Icons/Filing';
import { node, number, string, objectOf } from 'prop-types';

const backgroundColor = {
  done: key('colors.action'),
};

const borderColor = {
  active: key('colors.action'),
  disabled: key('colors.disabledGray'),
};

const iconColor = {
  done: '#FFFFFF',
  active: key('colors.action'),
  disabled: key('colors.disabledGray'),
};

/**
 * Checks actual stage status
 * @param {string} stage
 */

const getStatus = (activeId, stage) => {
  if (activeId === stage.id) {
    return 'active';
  } else if (stage.id < activeId) {
    return 'done';
  } else {
    return 'disabled';
  }
};

const Status = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: ${({ status }) => (status !== 'active' ? 'none' : 'flex')};
    justify-content: center;
    width: auto;
  }
  &::after {
    content: '${({ name }) => name || ''}';
    display: block;
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    top: 5.76vh;
    font-size: calc(9px + 0.26vw);
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 1.8vh;
    color: #A29C95;
    width: 5vw;
  }
`;

const StyledIcon = styled.div`
  background-color: ${({ status }) => backgroundColor[status] || '#FFFFFF'};
  display: flex;
  border-radius: 50%;
  width: 40px;
  height: 39px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: ${({ status }) => (status !== 'done' ? '2.26px solid' : 'none')};
  border-color: ${({ status }) => borderColor[status] || 'transparent'};
  path {
    fill: ${({ status }) => iconColor[status] || '#FFFFFF'};
    stroke: ${({ status }) => iconColor[status] || '#FFFFFF'};
  }
`;

StyledIcon.displayName = 'StyledIcon';

const TrackingStep = ({ activeId, stage }) => {
  const status = getStatus(activeId, stage);
  return (
    <Status status={status} name={stage.name}>
      <StyledIcon status={status}>{stage.icon}</StyledIcon>
    </Status>
  );
};

const StyledTrackingStep = styled(TrackingStep)`
  display: flex;
  justify-content: space-around;
  margin: 4vh auto 0.55vh;
  position: relative;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

StyledTrackingStep.displayName = 'TrackingStep';

TrackingStep.defaultProps = {
  activeId: 1,
  stage: { key: 'filing', name: 'filing', icon: <FilingIcon />, id: 1 },
};

TrackingStep.propTypes = {
  activeId: number,
  stage: objectOf({
    key: string,
    name: string,
    icon: node,
    id: number,
  }),
};

export default StyledTrackingStep;
