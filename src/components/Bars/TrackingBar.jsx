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


const TrackingBar = ({ active, className, height, stages }) => {
  return (
    <div className={className}>
      <LoadingBar stages={stages} active={active} height='2px' offset={2.08} stepWidth={14.2857} />
      {stages.map(stage => (
        <TrackingStep key={stage.id} stages={stages} stage={stage} active={active} />
      ))}
    </div>
  );
};

const StyledTrackingBar = styled(TrackingBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4vh auto .55vh;
  position: relative;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

StyledTrackingBar.displayName = 'TrackingBar'

TrackingBar.defaultProps = {
  active: 'data_analysis',
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
  stages: arrayOf({
    key: string,
    name: string,
    icon: node,
    id: number
  })
}

export default StyledTrackingBar;
