import FlightSelectBar from './FlightSelectBar';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('FlightSelectBar', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <FlightSelectBar id={31} onChange={() => console.log('testen')}>
        Test
      </FlightSelectBar>,
    );
    expect(wrapper.props().id).toEqual(31);
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlightSelectBar
          checked
          name="check"
          handleChange={() => console.log('test')}
        >
          Test
        </FlightSelectBar>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('border-color', Theme().colors.toggle);
    expect(wrapper.find('span').at(0)).toHaveStyleRule(
      'border-color',
      Theme().colors.toggle,
    );
  });
  it('can pass label and data', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FlightSelectBar
          checked
          name="check"
          handleChange={() => console.log('test')}
        >
          <FlightSelectBar.FlightData label="label" data="data" />
        </FlightSelectBar>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('border-color', Theme().colors.toggle);
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
