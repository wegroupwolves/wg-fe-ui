import { DateInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('DateInput', () => {
  it('returns value when input changes', () => {
    const onChange = jest.fn();

    const wrapper = mount(
      <DateInput onChange={onChange} name="date" touched={true}>
        test
      </DateInput>,
    );

    const day = wrapper.find('[data-test-id="day"]').at(1);
    const month = wrapper.find('[data-test-id="month"]').at(1);
    const year = wrapper.find('[data-test-id="year"]').at(1);

    expect(onChange.mock.calls.length).toBe(0);

    act(() => {
      day.props().onChange({ target: { value: '8', id: 'day' } });
      month.props().onChange({ target: { value: '3', id: 'month' } });
      year.props().onChange({ target: { value: '1996', id: 'year' } });
    });

    const calledOnChange = onChange.mock.calls[0];

    expect(calledOnChange[0]).toBe(`date`);
    expect(calledOnChange[1]).toHaveProperty('day', '8');
    expect(calledOnChange[1]).toHaveProperty('month', '3');
    expect(calledOnChange[1]).toHaveProperty('year', '1996');
  });

  it('has default border color on validation', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <DateInput name="date">Test</DateInput>
      </ThemeProvider>,
    );

    // check if borders have default color when not touched yet
    expect(wrapper.find('div[htmlFor="date"]')).toHaveStyleRule(
      'border-color',
      Theme().colors['outline'],
    );
  });

  it('has bad border color when touched and has error', () => {
    // Check if border is red when errors and touched
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <DateInput name="date" error="incorrect" touched={true}>
          Test
        </DateInput>
      </ThemeProvider>,
    );
    expect(wrapper.find('div[htmlFor="date"]')).toHaveStyleRule(
      'border-color',
      Theme().colors['bad'],
    );
  });

  it('has good border color when touched but no error', () => {
    // Check if border is green when no errors but touched
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <DateInput name="date" touched={true}>
          Test
        </DateInput>
      </ThemeProvider>,
    );
    expect(wrapper.find('div[htmlFor="date"]')).toHaveStyleRule(
      'border-color',
      Theme().colors['good'],
    );
  });

  it('Good or bad icons show at right time', () => {
    const wrapper = mount(<DateInput name="date">Test</DateInput>);

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
      <DateInput max={12} name="date">
        Test
      </DateInput>,
    );

    expect(wrapper.find('Container').props().max).toEqual(12);
  });
});
