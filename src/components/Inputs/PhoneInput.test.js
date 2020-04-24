import { PhoneInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
const theme = orange();
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { act } from 'react-dom/test-utils';

// eslint-disable-next-line
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

describe('PhoneInput', () => {
  // it('style changes when disabled', () => {
  //   const wrapper = mountWithTheme(
  //     <PhoneInput name="telephonenr">Name</PhoneInput>,
  //   );
  //   expect(wrapper.find(`.react-tel-input input[type='text']`)).toHaveStyleRule(
  //     'background-color',
  //     'white',
  //   );

  //   wrapper.setProps({
  //     children: (
  //       <PhoneInput disabled name="telephonenr">
  //         name
  //       </PhoneInput>
  //     ),
  //   });
  //   expect(wrapper.find('.react-tel-input input')).toHaveStyleRule(
  //     'background-color',
  //     '#F0F1F3',
  //   );
  // });

  it('returns value when input changes', () => {
    let ctrlName = 'fakeName';
    let ctrlValue = '+324';

    const wrapper = mountWithTheme(
      <PhoneInput
        handleChange={(name, value) => {
          ctrlName = name;
          ctrlValue = value;
        }}
        name="test"
      >
        test
      </PhoneInput>,
    );

    expect(ctrlValue).toEqual('+324');
    expect(ctrlName).toEqual('fakeName');

    const input = wrapper.find('input');

    act(() => {
      input
        .props()
        .onChange({ persist: () => {}, target: { value: '+32474123123' } });
    });
    setTimeout(() => {
      expect(input.props().value).toEqual('+32474123123');
      expect(input.props().name).toEqual('test');
    });
  });

  it('returns touched value when input is touched', () => {
    let ctrlName = 'noTest';
    let ctrlTouched = false;
    const wrapper = mountWithTheme(
      <PhoneInput
        name="test"
        setFieldTouched={(name, value) => {
          ctrlTouched = value;
          ctrlName = name;
        }}
      >
        Test
      </PhoneInput>,
    );

    // simulate an onblur event and test if variables are changed by setFieldTouched
    wrapper.find('input').simulate('blur');
    expect(ctrlTouched).toEqual(true);
    expect(ctrlName).toEqual('test');
  });

  // it('has different border color on validation', () => {
  //   const wrapper = mountWithTheme(<PhoneInput name="test">Test</PhoneInput>);

  //   // check if borders have default color when not touched yet
  //   expect(wrapper.find('input')).toHaveStyleRule(
  //     'border-color',
  //     theme.ui.outline,
  //   );

  //   // Check if border is red when errors and touched
  //   wrapper.setProps({
  //     children: (
  //       <PhoneInput error="incorrect" touched={true} name="test">
  //         Test
  //       </PhoneInput>
  //     ),
  //   });
  //   expect(wrapper.find('input')).toHaveStyleRule(
  //     'border-color',
  //     theme.status.error,
  //   );

  //   // Check if border is green when no errors but touched
  //   wrapper.setProps({
  //     children: (
  //       <PhoneInput touched={true} name="test">
  //         Test
  //       </PhoneInput>
  //     ),
  //   });
  //   expect(wrapper.find('input')).toHaveStyleRule(
  //     'border-color',
  //     theme.status.succes,
  //   );
  // });

  it('Good or bad icons show at right time', () => {
    const wrapper = mountWithTheme(<PhoneInput name="test">Test</PhoneInput>);

    // check if icons don't exist
    expect(wrapper.exists('Errormark')).toEqual(false);
    expect(wrapper.exists('Checkmark')).toEqual(false);

    // check if errormark shows when errors
    wrapper.setProps({
      error: 'incorrect',
      touched: true,
    });
    expect(wrapper.exists('Errormark')).toEqual(true);
    expect(wrapper.exists('Checkmark')).toEqual(false);

    // check if checkmark shows when no errors but touched
    wrapper.setProps({ error: '', touched: true });
    expect(wrapper.exists('Checkmark')).toEqual(true);
    expect(wrapper.exists('Errormark')).toEqual(false);
  });

  it('otherProps adds props to input', () => {
    const wrapper = mountWithTheme(
      <PhoneInput max={12} name="test">
        Test
      </PhoneInput>,
    );

    expect(wrapper.find('input').props().max).toEqual(12);
  });
});
