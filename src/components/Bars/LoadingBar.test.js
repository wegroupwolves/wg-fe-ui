import React from 'react';
import LoadingBar from './LoadingBar';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Theme from '../../constants/theme';
import { ThemeProvider } from 'styled-components';

describe('LoadingBar', () => {
  it('when rendered, component should have correct style', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <LoadingBar />
      </ThemeProvider>,
    );

    expect(wrapper).toHaveStyleRule('background-color', Theme().colors.gray);
  });

  it('when background hex passed, should background-color be equal to it', () => {
    const wrapper = mount(<LoadingBar background="#B8B7F6" />);

    expect(wrapper).toHaveStyleRule('background-color', '#B8B7F6');
  });

  it('when height passed, height property of component should be equal to it', () => {
    const wrapper = mount(<LoadingBar height="3px" />);

    expect(wrapper).toHaveStyleRule('height', '3px');
  });
});
