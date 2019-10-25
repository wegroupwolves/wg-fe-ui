import { TextInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { act } from 'react-dom/test-utils';

describe('TextInput', () => {
  it('style changes when disabled', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <TextInput name="firstname">Name</TextInput>
      </ThemeProvider>,
    );
    expect(wrapper.find('StyledInput')).toHaveStyleRule(
      'background-color',
      'white',
    );

    wrapper.setProps({
      children: (
        <TextInput disabled name="firstname">
          name
        </TextInput>
      ),
    });
    expect(wrapper.find('input')).toHaveStyleRule(
      'background-color',
      Theme().colors.backDrop,
    );
  });

  it('return value when input changes', () => {
    let ctrlName = 'fakeName';
    let ctrlValue = 'Ruben';

    const wrapper = mount(
      <TextInput
        setFieldValue={(name, value) => {
          ctrlName = name;
          ctrlValue = value;
        }}
        name="test"
      >
        test
      </TextInput>,
    );

    expect(ctrlValue).toEqual('Ruben');
    expect(ctrlName).toEqual('fakeName');

    const input = wrapper.find('input');

    act(() => {
      input.props().onChange({ target: { value: 'WeGroup' } });
    });
    setTimeout(() => {
      expect(input.props().value).toEqual('WeGroup');
      expect(input.props().name).toEqual('test');
    });
  });
  it('returns touched value when input is touched', () => {
    let ctrlName = 'noTest';
    let ctrlTouched = false;
    const wrapper = mount(
      <TextInput
        name="test"
        setFieldTouched={(name, value) => {
          ctrlTouched = value;
          ctrlName = name;
        }}
      >
        Test
      </TextInput>,
    );

    // simulate an onblur event and test if variables are changed by setFieldTouched
    wrapper.find('input').simulate('blur');
    expect(ctrlTouched).toEqual(true);
    expect(ctrlName).toEqual('test');
  });

  it('has different border color on validation', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <TextInput name="test">Test</TextInput>
      </ThemeProvider>,
    );

    // check if borders have default color when not touched yet
    expect(wrapper.find('input')).toHaveStyleRule(
      'border-color',
      Theme().colors['outline'],
    );

    // Check if border is red when errors and touched
    wrapper.setProps({
      children: (
        <TextInput error="incorrect" touched={true} name="test">
          Test
        </TextInput>
      ),
    });
    expect(wrapper.find('input')).toHaveStyleRule(
      'border-color',
      Theme().colors['bad'],
    );

    // Check if border is green when no errors but touched
    wrapper.setProps({
      children: (
        <TextInput touched={true} name="test">
          Test
        </TextInput>
      ),
    });
    expect(wrapper.find('input')).toHaveStyleRule(
      'border-color',
      Theme().colors['good'],
    );
  });

  it('Good or bad icons show at right time', () => {
    const wrapper = mount(<TextInput name="test">Test</TextInput>);

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
    const wrapper = mount(
      <TextInput max={12} name="test">
        Test
      </TextInput>,
    );

    expect(wrapper.find('input').props().max).toEqual(12);
  });
});
