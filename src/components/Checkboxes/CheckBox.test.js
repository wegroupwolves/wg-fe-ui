import CheckBox from './CheckBox';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
const theme = orange();
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('CheckBox', () => {
  it('can pass extra props', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CheckBox name="test" id={31} onChange={() => console.log('testen')}>
          Testje
        </CheckBox>
      </ThemeProvider>,
    );
    expect(wrapper.find('CheckBox').props().id).toEqual(31);
  });

  it('changes style when disabled', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CheckBox disabled name="check" onChange={() => console.log('test')}>
          Testje2
        </CheckBox>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('color', theme.ui.disabled);
    expect(wrapper.find('div')).toHaveStyleRule(
      'border',
      '0.1rem solid #CCCCCC',
    );
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CheckBox checked name="check" onChange={() => console.log('test')}>
          Testje2
        </CheckBox>
      </ThemeProvider>,
    );
    expect(wrapper.find('div')).toHaveStyleRule(
      'background-color',
      theme.brand.primary,
    );
  });
});
