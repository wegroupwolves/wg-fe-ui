import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import LoadingBar from './LoadingBar'
import { arrayOf, number, string } from 'prop-types';


const Status = styled.span`
    display: ${({ active }) => active ? 'inline' : 'none'};
    font-family: Lato;
    font-size: 14px;
    font-weight: ${({ active }) => 
      active
      ? 'bold' : 'initial' };
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #646464;
    margin-top: 1.76vh;
    @media (max-width: 1200px) {
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
  )
};

const ProgressBar = ({ activeId, className, stages }) => {
  return (
    <div className={className}>
      <LoadingBar stages={stages} activeId={activeId} height='7px' />
      {stages.map((stage,i) => (
        <ClaimStatus key={stage.id} stage={stage} stages={stages} active={activeId === stage.id} counter={i+1} />
      ))}
    </div>
  );
};

const StyledProgressBar = styled(ProgressBar)`
  display: flex;
  justify-content: space-around;
  margin: 4vh auto .55vh;
  position: relative;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

ProgressBar.defaultProps = {
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

ProgressBar.propTypes = {
  activeId: number,
  stages: arrayOf({
    key: string,
    name: string,
    id: number
  })
}

export default StyledProgressBar;
