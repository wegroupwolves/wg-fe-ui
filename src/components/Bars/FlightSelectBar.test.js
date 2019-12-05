import FlightSelectBar from './FlightSelectBar';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

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

describe('FlightSelectBar', () => {
  it('can pass extra props', () => {
    const wrapper = mountWithTheme(
      <FlightSelectBar id={31} onChange={() => console.log('testen')}>
        Test
      </FlightSelectBar>,
    );
    expect(wrapper.props().id).toEqual(31);
  });

  it('when checked, style changes', () => {
    const wrapper = mountWithTheme(
      <FlightSelectBar
        checked
        name="check"
        handleChange={() => console.log('test')}
      >
        Test
      </FlightSelectBar>,
    );
    expect(wrapper).toHaveStyleRule('border-color', theme.brand.light);
    expect(wrapper.find('span').at(0)).toHaveStyleRule(
      'border-color',
      theme.brand.secondary,
    );
  });
  it('can pass label and data', () => {
    const wrapper = mountWithTheme(
      <FlightSelectBar
        checked
        name="check"
        handleChange={() => console.log('test')}
      >
        <FlightSelectBar.FlightData label="label" data="data" />
      </FlightSelectBar>,
    );
    expect(wrapper).toHaveStyleRule('border-color', theme.brand.secondary);
    expect(
      wrapper
        .find('span')
        .at(0)
        .text(),
    ).toEqual('label');
    expect(
      wrapper
        .find('span')
        .at(1)
        .text(),
    ).toEqual('data');
  });
});
