import ImageSelectBar from './ImageSelectBar';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from './../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('ImageSelectBar', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <ImageSelectBar id={31} onChange={() => console.log('testen')}>
        Test
      </ImageSelectBar>,
    );
    expect(wrapper.props().id).toEqual(31);
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBar
          checked
          name="check"
          handleChange={() => console.log('test')}
        >
          Test
        </ImageSelectBar>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('border-color', Theme().colors.toggle);
  });
  it('styles when checkbox', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBar type="checkbox">Test</ImageSelectBar>
      </ThemeProvider>,
    );
    expect(wrapper.find('span').at(1)).toHaveStyleRule('border-radius', '3px');
  });
  it('styles when checkbox', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <ImageSelectBar type="radio">Test</ImageSelectBar>
      </ThemeProvider>,
    );
    expect(wrapper.find('span').at(1)).toHaveStyleRule('border-radius', '10px');
  });
});
