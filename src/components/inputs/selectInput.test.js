import { SelectInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from '../..';
import Theme from '../../../.storybook/theme';

describe('SelectInput', () => {
  it('returns value and name of selected option', () => {
    let testValue = { name: null, value: null };
    const wrapper = mount(
      <SelectInput
        name="test"
        selected={(name, value) => {
          (testValue.name = name), (testValue.value = value);
        }}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      >
        Test
      </SelectInput>,
    );

    // simulate selecting the first option
    wrapper
      .find('.Select__control')
      .first()
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('.Select__control')
      .first()
      .simulate('keyDown', { key: 'Enter', keyCode: 13 });

    // if simulate is complete, selected should be triggered
    expect(testValue.value).toEqual('option1');
    expect(testValue.name).toEqual('test');
  });
  it('placeholder should be loading when enabled', () => {
    const wrapper = mount(
      <SelectInput
        name="test"
        loading={true}
        selected={(name, value) => console.log(name, value)}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      >
        Test
      </SelectInput>,
    );

    // see if text is changed to loading
    expect(
      wrapper
        .find('.Select__placeholder')
        .first()
        .text(),
    ).toEqual('Loading...');
  });
  it('when no options available, show message', () => {
    const wrapper = mount(
      <SelectInput
        name="test"
        selected={(name, value) => console.log(name, value)}
        options={[]}
      >
        Test
      </SelectInput>,
    );

    // simulate arrowdown to open option container
    wrapper
      .find('.Select__control')
      .first()
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    // look if message is in the option container
    expect(
      wrapper
        .find('.Select__menu-notice--no-options')
        .first()
        .text(),
    ).toEqual('No options');
  });
  it('when disabled style changes and input is disabled', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <SelectInput
          name="test"
          selected={(name, value) => console.log(name, value)}
          options={[]}
        >
          Test
        </SelectInput>
      </ThemeProvider>,
    );

    // check if input prop disabled is false by default
    expect(wrapper.find('input').props().disabled).toEqual(false);

    // check if label is sub-title color
    expect(wrapper.find('p')).toHaveStyleRule(
      'color',
      Theme().colors['sub-title'],
    );

    // set props to disabled
    wrapper.setProps({
      children: (
        <SelectInput
          name="test"
          selected={(name, value) => console.log(name, value)}
          options={[]}
          disabled
        >
          Test
        </SelectInput>
      ),
    });

    // check if label color changed to disabled
    expect(wrapper.find('p')).toHaveStyleRule(
      'color',
      Theme().colors['disabled'],
    );

    // check if input prop disabled is true
    expect(wrapper.find('input').props().disabled).toEqual(true);
  });
  it('otherProps adds props to input', () => {
    const wrapper = mount(
      <SelectInput
        name="test"
        selected={(name, value) => console.log(name, value)}
        options={[]}
        otherProps={{ id: 12 }}
      >
        Test
      </SelectInput>,
    );

    expect(wrapper.find('Select').props().id).toEqual(12);
  });
});
