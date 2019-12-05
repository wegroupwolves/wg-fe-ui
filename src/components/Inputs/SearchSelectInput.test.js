import { SearchSelectInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from '../..';
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

describe('SearchSelectInput', () => {
  it('returns value and name of selected option', () => {
    let testValue = { name: null, value: null };
    const wrapper = mountWithTheme(
      <SearchSelectInput
        name="test"
        onSelected={({ name, value }) => {
          (testValue.name = name), (testValue.value = value);
        }}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      >
        Test
      </SearchSelectInput>,
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

    // if simulate is complete, onSelected should be triggered
    expect(testValue.value).toEqual('option1');
    expect(testValue.name).toEqual('test');
  });
  it('placeholder should be loading when enabled', () => {
    const wrapper = mountWithTheme(
      <SearchSelectInput
        name="test"
        loading={true}
        onSelected={(name, value) => console.log(name, value)}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      >
        Test
      </SearchSelectInput>,
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
    const wrapper = mountWithTheme(
      <SearchSelectInput
        name="test"
        onSelected={(name, value) => console.log(name, value)}
        options={[]}
      >
        Test
      </SearchSelectInput>,
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
    const wrapper = mountWithTheme(
      <ThemeProvider theme={theme}>
        <SearchSelectInput
          name="test"
          onSelected={(name, value) => console.log(name, value)}
          options={[]}
        >
          Test
        </SearchSelectInput>
      </ThemeProvider>,
    );

    // check if input prop disabled is false by default
    expect(wrapper.find('input').props().disabled).toEqual(false);

    // check if label is sub-title color
    expect(wrapper.find('label')).toHaveStyleRule('color', theme.typo.subTitle);

    // set props to disabled
    wrapper.setProps({
      children: (
        <SearchSelectInput
          name="test"
          onSelected={(name, value) => console.log(name, value)}
          options={[]}
          disabled
        >
          Test
        </SearchSelectInput>
      ),
    });

    // check if label color changed to disabled
    expect(wrapper.find('label')).toHaveStyleRule('color', theme.ui.disabled);

    // check if input prop disabled is true
    expect(wrapper.find('input').props().disabled).toEqual(true);
  });
  it('otherProps adds props to input', () => {
    const wrapper = mountWithTheme(
      <SearchSelectInput
        name="test"
        onSelected={(name, value) => console.log(name, value)}
        options={[]}
        id={12}
      >
        Test
      </SearchSelectInput>,
    );

    expect(wrapper.find('Select').props().id).toEqual(12);
  });
});
