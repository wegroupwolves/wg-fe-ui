import { DateInput } from '.';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('DateInput', () => {
  it('returns value when input changes', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DateInput onChange={onChange} name="date">
        test
      </DateInput>,
    );

    const input = wrapper.find('[data-test-id="day"]');

    console.log(input.debug());

    input.props().onChange({ target: '2' });

    expect(onChange).toBeCalledWith('2');
  });

  it('has different border color on validation', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <DateInput name="date">Test</DateInput>
      </ThemeProvider>,
    );

    // check if borders have default color when not touched yet
    expect(wrapper.find('label[htmlFor="date"]')).toHaveStyleRule(
      'border-color',
      Theme().colors['outline'],
    );

    // Check if border is red when errors and touched
    wrapper.setProps({
      children: (
        <DateInput
          errors={{ date: 'incorrect' }}
          touched={{ date: true }}
          name="date"
        >
          Test
        </DateInput>
      ),
    });
    expect(wrapper.find('label[htmlFor="date"]')).toHaveStyleRule(
      'border-color',
      Theme().colors['bad'],
    );

    // Check if border is green when no errors but touched
    wrapper.setProps({
      children: (
        <DateInput touched={{ date: true }} name="date">
          Test
        </DateInput>
      ),
    });
    expect(wrapper.find('label[htmlFor="date"]')).toHaveStyleRule(
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
      errors: { date: 'incorrect' },
      touched: { date: true },
    });
    expect(wrapper.exists('Errormark')).toEqual(true);
    expect(wrapper.exists('Checkmark')).toEqual(false);

    // check if checkmark shows when no errors but touched
    wrapper.setProps({ errors: {}, touched: { date: true } });
    expect(wrapper.exists('Checkmark')).toEqual(true);
    expect(wrapper.exists('Errormark')).toEqual(false);
  });

  it('otherProps adds props to input', () => {
    const wrapper = mount(
      <DateInput max={12} name="date" type="text">
        Test
      </DateInput>,
    );

    expect(wrapper.find('div').props().max).toEqual(12);
  });
});
