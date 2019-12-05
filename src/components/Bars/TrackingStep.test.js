import React from 'react';
import 'jest-styled-components';
import TrackingStep from './TrackingStep';
import FilingIcon from './../Icons/Filing';
import LoupeIcon from './../Icons/Loupe';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { orange } from '../../themes';
const theme = orange();

describe('TrackingStep', () => {
  it('when step having status "current, should just get correct style', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TrackingStep />
      </ThemeProvider>,
    );

    // console.log('Theme: ', wrapper.find(StyledIcon).childAt(0).debug());
    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'background-color',
      '#FFFFFF',
    );
    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'border-color',
      theme.brand.primary,
    );
  });

  it('when step having status "done", should get action color', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TrackingStep
          activeId={2}
          stage={{ key: 'filing', name: 'filing', icon: <FilingIcon />, id: 1 }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'background-color',
      theme.brand.primary,
    );
    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'border-color',
      'transparent',
    );
  });

  it('when step having status "awaiting", should get white background', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TrackingStep
          activeId={2}
          stage={{
            key: 'data_analysis',
            name: 'data analysis',
            icon: <LoupeIcon />,
            id: 3,
          }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'background-color',
      '#FFFFFF',
    );
    expect(wrapper.find('StyledIcon')).toHaveStyleRule(
      'border-color',
      theme.ui.disabled,
    );
  });
});
