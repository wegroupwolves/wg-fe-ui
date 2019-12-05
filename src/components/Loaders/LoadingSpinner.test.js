import LoadingSpinner from './LoadingSpinner';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
const theme = orange();
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

describe('LoadingSpinner', () => {
  it('should render the LoadingSpinner', () => {
    const wrapper = mountWithTheme(<LoadingSpinner />);
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('should have the correct styling', () => {
    const wrapper = mountWithTheme(<LoadingSpinner />);
    expect(wrapper.find('circle')).toHaveStyleRule(
      'stroke',
      theme.brand.primary,
    );
  });
});
