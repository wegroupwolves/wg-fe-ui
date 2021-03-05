import React from 'react';
import styled from 'styled-components';
import { string, number, object, arrayOf } from 'prop-types';
import LoadingBar from './LoadingBar';

const Status = styled.span`
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'initial')};
  line-height: 120%;
  text-align: center;
  text-transform: capitalize;
  color: #646464;
  margin-top: 1.8vh;
  @media (max-width: 768px) {
    display: ${({ active }) => (active ? 'inline' : 'none')};
    margin-top: 0;
    margin-left: 2vw;
    text-align: justify;
  }
`;

const ClaimStatus = ({ className, active, counter, stage }) => {
  return (
    <Status className={className} active={active}>
      {counter}. {stage.name}
    </Status>
  );
};

const ProgressBar = ({
  activeId,
  background,
  filledColor,
  className,
  height,
  stages,
  stepsLength,
  ...otherProps
}) => {
  return (
    <StyledProgressBar {...otherProps} className={className}>
      <LoadingBar
        stagesLength={stepsLength || stages.length}
        activeId={activeId}
        background={background}
        filledColor={filledColor}
        height={height}
      />
      {stages.map((stage, i) => (
        <ClaimStatus
          key={stage.id}
          stage={stage}
          stages={stages}
          active={activeId === stage.id}
          counter={i + 1}
        />
      ))}
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4vh auto 0.55vh;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0;
    width: initial;
  }
`;

ProgressBar.defaultProps = {
  activeId: 1,
  height: '7px',
  otherProps: {},
  stages: [
    {
      key: 'start',
      name: 'start',
      id: 1,
    },
    {
      key: 'middle',
      name: 'middle',
      id: 2,
    },
    {
      key: 'end',
      name: 'end',
      id: 3,
    },
  ],
};

ProgressBar.propTypes = {
  activeId: number,
  background: string,
  className: string,
  filledColor: string,
  height: string,
  otherProps: object,
  stages: arrayOf(object),
  stepsLength: number,
};

export default ProgressBar;
