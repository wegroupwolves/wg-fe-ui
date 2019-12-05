import React from 'react';
import LoadingBar from './LoadingBar';
import 'jest-styled-components';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { orange } from '../../themes';
const theme = orange();

// eslint-disable-next-line
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

describe('LoadingBar', () => {
  it('when rendered, component should have correct style', () => {
    const wrapper = mountWithTheme(<LoadingBar />);

    expect(wrapper).toHaveStyleRule(
      'background-color',
      theme.ui.backgroundLight,
    );
  });

  it('when background hex passed, should background-color be equal to it', () => {
    const wrapper = mountWithTheme(<LoadingBar background="#B8B7F6" />);

    expect(wrapper).toHaveStyleRule('background-color', '#B8B7F6');
  });

  it('when height passed, height property of component should be equal to it', () => {
    const wrapper = mountWithTheme(<LoadingBar height="3px" />);

    expect(wrapper).toHaveStyleRule('height', '3px');
  });
});
