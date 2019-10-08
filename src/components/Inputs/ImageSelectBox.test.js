import React from 'react';
import ImageSelectBox from './ImageSelectBox';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from '../..';
import Theme from '../../constants/theme';
import PlaneIcon from './../Icons/Plane';

describe('ImageSelectBox', () => {
  it('when normal should get color of normal property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBox value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      Theme().colors.normal,
    );
  });

  it('when selected should get color of selected property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBox selected="plane" value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      Theme().colors.selected,
    );
  });

  it('when inactive should get color of inactive property from Theme', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBox selected="car" value="plane" image={<PlaneIcon />} />
      </ThemeProvider>,
    );

    expect(wrapper.find('RadioButton')).toHaveStyleRule(
      'background-color',
      Theme().colors.inactive,
    );
  });
});
