import { Checkbox } from '.';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../../.storybook/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('Checkbox', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <Checkbox
        name="test"
        otherProps={{ id: '31' }}
        onChange={() => console.log('testen')}
      >
        Testje
      </Checkbox>,
    );
    expect(wrapper.props().id).toEqual('31');
  });

  it('changes style when disabled', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Checkbox disabled name="check" onChange={() => console.log('test')}>
          Testje2
        </Checkbox>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('color', Theme().colors.disabled);
    expect(wrapper.find('div')).toHaveStyleRule(
      'border',
      '0.1rem solid #CCCCCC',
    );
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Checkbox checked name="check" onChange={() => console.log('test')}>
          Testje2
        </Checkbox>
      </ThemeProvider>,
    );
    expect(wrapper.find('div')).toHaveStyleRule(
      'background-color',
      Theme().colors.action,
    );
  });
});
