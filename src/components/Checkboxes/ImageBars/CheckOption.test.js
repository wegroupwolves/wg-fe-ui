import CheckOption from './CheckOption';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('CheckOption', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <CheckOption id={31} onChange={() => console.log('testen')}>
        Test
      </CheckOption>,
    );
    expect(wrapper.props().id).toEqual(31);
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <CheckOption
          checked
          name="check"
          handleClick={() => console.log('test')}
          handleChange={() => console.log('test')}
        >
          Test
        </CheckOption>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('border-color', Theme().colors.toggle);
    expect(wrapper.find('span').at(1)).toHaveStyleRule(
      'background-color',
      Theme().colors.toggle,
    );
  });
});
