import { TimeInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
const theme = orange();
import { act } from 'react-dom/test-utils';
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

describe('TimeInput', () => {
  it('returns value when input changes', () => {
    const onChange = jest.fn();

    const wrapper = mountWithTheme(
      <TimeInput
        is12HourFormat={false}
        onChange={onChange}
        name="time"
        touched={true}
      >
        test
      </TimeInput>,
    );

    const hour = wrapper.find('SingleInputTime').at(0);
    const minute = wrapper.find('SingleInputTime').at(1);
    const second = wrapper.find('SingleInputTime').at(2);

    expect(onChange.mock.calls.length).toBe(0);

    act(() => {
      hour
        .props()
        .onChange({ persist: () => {}, target: { value: '08', id: 'hour' } });
      minute
        .props()
        .onChange({ persist: () => {}, target: { value: '03', id: 'minute' } });
      second
        .props()
        .onChange({ persist: () => {}, target: { value: '12', id: 'second' } });
    });

    const calledOnChange = onChange.mock.calls[0];

    expect(calledOnChange[0]).toStrictEqual({
      name: 'time',
      value: '08:03:12',
    });
  });

  it('has default border color on validation', () => {
    const wrapper = mountWithTheme(<TimeInput name="time">Test</TimeInput>);

    // check if borders have default color when not touched yet
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.ui.outline,
    );
  });

  it('has bad border color when touched and has error', () => {
    // Check if border is red when errors and touched
    const wrapper = mountWithTheme(
      <TimeInput name="time" error="incorrect" touched={true}>
        Test
      </TimeInput>,
    );
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.status.error,
    );
  });

  it('has good border color when touched but no error', () => {
    // Check if border is green when no errors but touched
    const wrapper = mountWithTheme(
      <TimeInput name="time" touched={true}>
        Test
      </TimeInput>,
    );
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.status.succes,
    );
  });

  it('Good or bad icons show at right time', () => {
    const wrapper = mountWithTheme(<TimeInput name="date">Test</TimeInput>);

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
      <TimeInput max={12} name="time">
        Test
      </TimeInput>,
    );

    expect(wrapper.find('Container').props().max).toEqual(12);
  });
});
