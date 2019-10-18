import RadioOption from './RadioOption';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('RadioOption', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <RadioOption id={31} onChange={() => console.log('testen')}>
        Test
      </RadioOption>,
    );
    expect(wrapper.find('StyledInput').props().id).toEqual(31);
  });

  it('when checked, style changes', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <RadioOption
          checked
          name="check"
          handleChange={() => console.log('test')}
        >
          Test
        </RadioOption>
      </ThemeProvider>,
    );
    expect(wrapper).toHaveStyleRule('border-color', Theme().colors.toggle);
    expect(wrapper.find('span').at(1)).toHaveStyleRule(
      'border-color',
      Theme().colors.toggle,
    );
  });
});
