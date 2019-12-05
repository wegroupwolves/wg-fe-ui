import React from 'react';
import ImageSelectBox from './ImageSelectBox';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from '../..';
import { orange } from '../../themes';
const theme = orange();
import PlaneIcon from './../Icons/Plane';

describe('ImageSelectBox', () => {
  it('when normal should get color of normal property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ImageSelectBox value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      '#FFFFFF',
    );
  });

  it('when selected should get color of selected property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ImageSelectBox selected="plane" value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      theme.brand.lightest,
    );
  });

  it('when inactive should get color of inactive property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ImageSelectBox selected="car" value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      theme.ui.background,
    );
  });
});
