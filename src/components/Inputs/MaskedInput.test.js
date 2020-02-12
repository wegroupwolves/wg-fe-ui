import React from 'react';
import { MaskedInput } from '.';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
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

describe('MaskedInput', () => {
  it('should call onChange with value without mask placed', () => {
    const onChange = jest.fn(val => val);
    const wrapper = mountWithTheme(
      <MaskedInput onChange={onChange} name="test">
        test
      </MaskedInput>,
    );
    act(() => {
      wrapper.props().onChange('56789766');
    });
    expect(onChange).toHaveBeenCalledWith('56789766');
  });

  it('should pass formatted value to TextInput', () => {
    const wrapper = mountWithTheme(
      <MaskedInput
        mask="+(_ _) _ _ _-_ _ _-_ _"
        maskChar="_"
        value="6778965443"
        onChange={() => { }}
        name="test"
      >
        test
      </MaskedInput>,
    );
    setTimeout(() => {
      expect(wrapper.find('TextInput').value).toEqual('+(67)789-654-43');
    });
  });

  it('otherProps adds props to input', () => {
    const wrapper = mountWithTheme(
      <MaskedInput max={12} name="test">
        Test
      </MaskedInput>,
    );

    expect(wrapper.find('StyledInput').props().max).toEqual(12);
  });
});
