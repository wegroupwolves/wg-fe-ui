import React from 'react';
import TrackingBar from './TrackingBar';
import 'jest-styled-components';
import { mount, shallow } from 'enzyme';
import Theme from '../../constants/theme';
import { ThemeProvider } from 'styled-components';
import OpenedIcon from './../Icons/Opened';
import FilingIcon from './../Icons/Filing';
import LoupeIcon from './../Icons/Loupe';
import UploadingIcon from './../Icons/Uploading';

const stages = [
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
];

describe('TrackingBar', () => {
  it('when rendered, component should have all children rendered', () => {
    const wrapper = shallow(<TrackingBar stages={stages} />);

    expect(wrapper.find('LoadingBar').exists()).toEqual(true);
    expect(wrapper.find('TrackingStep').exists()).toEqual(true);
  });

  it('when correct stages passed, should their length equal to number of TrackingStep components', () => {
    const wrapper = shallow(<TrackingBar stages={stages} />);

    expect(wrapper.find('TrackingStep').length).toEqual(stages.length);
  });
});
