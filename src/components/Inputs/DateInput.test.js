import { DateInput } from '.';
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

describe('DateInput', () => {
  it('returns value when input changes', () => {
    const onChange = jest.fn();

    const wrapper = mountWithTheme(
      <DateInput onChange={onChange} name="date" touched={true}>
        test
      </DateInput>,
    );

    const day = wrapper.find('#day').at(1);
    const month = wrapper.find('#month').at(1);
    const year = wrapper.find('#year').at(1);

    expect(onChange.mock.calls.length).toBe(1);

    act(() => {
      day
        .props()
        .onChange({ persist: () => {}, target: { value: '08', id: 'day' } });
      month
        .props()
        .onChange({ persist: () => {}, target: { value: '03', id: 'month' } });
      year
        .props()
        .onChange({ persist: () => {}, target: { value: '1996', id: 'year' } });
    });

    const calledOnChange = onChange.mock.calls[1];

    expect(calledOnChange[0]).toStrictEqual({
      name: 'date',
      value: '08/03/1996',
    });
  });

  it('has default border color on validation', () => {
    const wrapper = mountWithTheme(<DateInput name="date">Test</DateInput>);

    // check if borders have default color when not touched yet
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.ui.outline,
    );
  });

  it('has bad border color when touched and has error', () => {
    // Check if border is red when errors and touched
    const wrapper = mountWithTheme(
      <DateInput name="date" error="incorrect" touched={true}>
        Test
      </DateInput>,
    );
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.status.error,
    );
  });

  it('has good border color when touched but no error', () => {
    // Check if border is green when no errors but touched
    const wrapper = mountWithTheme(
      <DateInput name="date" touched={true}>
        Test
      </DateInput>,
    );
    expect(wrapper.find('Input')).toHaveStyleRule(
      'border-color',
      theme.status.succes,
    );
  });

  it('Good or bad icons show at right time', () => {
    const wrapper = mountWithTheme(<DateInput name="date">Test</DateInput>);

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
      <DateInput max={12} name="date">
        Test
      </DateInput>,
    );

    expect(wrapper.find('Container').props().max).toEqual(12);
  });
});
