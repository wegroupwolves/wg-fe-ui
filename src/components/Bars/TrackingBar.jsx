import React from 'react';
import styled from 'styled-components';
import LoadingBar from './LoadingBar';
import TrackingStep from './TrackingStep';
import { arrayOf, string, object } from 'prop-types';

const getActiveId = (active, stages) => {
  return stages ? stages.findIndex(item => item.key === active) + 1 : 0;
};

const TrackingBar = ({
  active,
  background,
  filledColor,
  height,
  stages,
  className,
}) => {
  const activeId = getActiveId(active, stages);
  return (
    <StyledTrackingBar className={className}>
      <LoadingBar
        stagesLength={stages.length}
        activeId={activeId}
        background={background}
        filledColor={filledColor}
        height={height}
      />
      {stages.map(stage => (
        <TrackingStep key={stage.id} stage={stage} activeId={activeId} />
      ))}
    </StyledTrackingBar>
  );
};

const StyledTrackingBar = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts};
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin: 4vh auto 0.55vh;
  position: relative;
  @media (max-width: 768px) {
    margin: 0;
    width: initial;
  }
`;

TrackingBar.defaultProps = {
  active: 'data_analysis',
  background: '#D3D4D8',
  height: '2px',
  stages: [],
};

TrackingBar.propTypes = {
  active: string,
  background: string,
  filledColor: string,
  stages: arrayOf(object),
  height: string,
  className: string,
};

export default TrackingBar;
