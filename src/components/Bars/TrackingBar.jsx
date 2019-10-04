import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import ApprovedIcon from './../Icons/Approved'
import OpenedIcon from './../Icons/Opened'
import FilingIcon from './../Icons/Filing'
import LoupeIcon from './../Icons/Loupe'
import PlaneIcon from './../Icons/Plane'
import PayIcon from './../Icons/Pay'
import UploadingIcon from './../Icons/Uploading'
import LoadingBar from './LoadingBar'
import TrackingStep from './TrackingStep'
import { arrayOf, node, number, string } from 'prop-types';

const getActiveId = (active, stages) => {
  return stages ? stages.findIndex(item => item.key === active) + 1 : 0;
}

const TrackingBar = ({ active, background, className, height, stages }) => {
  const activeId = getActiveId(active, stages);
  return (
    <div className={className}>
      <LoadingBar stages={stages.length} activeId={activeId} background={background} height={height} offset={2.08} stepWidth={14.2857} />
      {stages.map(stage => (
        <TrackingStep key={stage.id} stage={stage} activeId={activeId} />
      ))}
    </div>
  );
};

const StyledTrackingBar = styled(TrackingBar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 4vh auto .55vh;
  position: relative;
  @media (max-width: 768px) {
    margin: 0;
    width: initial;
  }
`;

StyledTrackingBar.displayName = 'TrackingBar'

TrackingBar.defaultProps = {
  active: 'data_analysis',
  background: key('colors.disabledGray'),
  height: '2px',
  stages: [
    { 
      key: 'filing', 
      name: 'filing', 
      icon: <FilingIcon />, 
      id: 1 
    },
    {
      key: 'uploading_documents',
      name: 'uploading documents',
      icon: <UploadingIcon />,
      id: 2
    },
    {
      key: 'data_analysis',
      name: 'data analysis',
      icon: <LoupeIcon />,
      id: 3
    },
    {
      key: 'claim_opened',
      name: 'claim opened',
      icon: <OpenedIcon />,
      id: 4
    },
    {
      key: 'air_carrier_processing',
      name: 'air carrier processing',
      icon: <PlaneIcon />,
      id: 5
    },
    {
      key: 'approved',
      name: 'approved',
      icon: <ApprovedIcon />,
      id: 6
    },
    {
      key: 'payout',
      name: 'payout',
      icon: <PayIcon />,
      id: 7
    }
  ]
}

TrackingBar.propTypes = {
  active: string,
  background: string,
  stages: arrayOf({
    key: string,
    name: string,
    icon: node,
    id: number
  })
}

export default StyledTrackingBar;
