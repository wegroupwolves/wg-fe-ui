import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import {
  BackButton,
  SearchInput,
  ProgressBar,
  ToolBar,
  TrackingBar,
} from './../src';
import ApprovedIcon from './assets/Icons/Approved';
import OpenedIcon from './assets/Icons/Opened';
import FilingIcon from './assets/Icons/Filing';
import LoupeIcon from './assets/Icons/Loupe';
import PlaneIcon from './assets/Icons/Plane';
import PayIcon from './assets/Icons/Pay';
import UploadingIcon from './assets/Icons/Uploading';

const COMPONENT_CHOICES = {
  none: null,
  back_button: <BackButton />,
  search_input: <SearchInput onChange={action('onChange')} />,
};

storiesOf('Mid Level blocks/Bars', module)
  .addDecorator(withKnobs())
  .addDecorator(withInfo({ inline: true }))
  .add('ProgressBar', () => {
    return <StyledProgressBar background="#AEAEAE" />;
  })
  .add('ToolBar', () => {
    const componentName = select(
      'Child component',
      Object.keys(COMPONENT_CHOICES),
      'search_input',
    );
    return (
      <StyledToolBar onClick={action('clicked it')}>
        {COMPONENT_CHOICES[componentName]}
      </StyledToolBar>
    );
  })
  .add('TrackingBar', () => {
    return (
      <StyledTrackingBar
        stages={[
          {
            key: 'filing',
            name: 'filing',
            icon: <FilingIcon />,
            id: 1,
          },
          {
            key: 'uploading_documents',
            name: 'uploading documents',
            icon: <UploadingIcon />,
            id: 2,
          },
          {
            key: 'data_analysis',
            name: 'data analysis',
            icon: <LoupeIcon />,
            id: 3,
          },
          {
            key: 'claim_opened',
            name: 'claim opened',
            icon: <OpenedIcon />,
            id: 4,
          },
          {
            key: 'air_carrier_processing',
            name: 'air carrier processing',
            icon: <PlaneIcon />,
            id: 5,
          },
          {
            key: 'approved',
            name: 'approved',
            icon: <ApprovedIcon />,
            id: 6,
          },
          {
            key: 'payout',
            name: 'payout',
            icon: <PayIcon />,
            id: 7,
          },
        ]}
        background="#D3D4D8"
      />
    );
  });

const StyledTrackingBar = styled(TrackingBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;

StyledTrackingBar.displayName = 'TrackingBar';

const StyledToolBar = styled(ToolBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;
StyledToolBar.displayName = 'ToolBar';

const StyledProgressBar = styled(ProgressBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;

StyledProgressBar.displayName = 'ProgressBar';
