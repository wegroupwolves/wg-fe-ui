import { SearchSelectInput } from '.';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from '../..';
import { orange } from '../../themes';
import { act } from 'react-dom/test-utils';
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
    let testValue = { name: '', value: '' };
    const wrapper = mountWithTheme(
      <SearchSelectInput
        name="test"
        onSelected={({ value }) => {
          (testValue.name = 'test'), (testValue.value = value);
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
    act(() => {
      wrapper
        .find('Select')
        .instance()
        .selectOption({ label: 'Option 1', value: 'option1' });
    });
    // if simulate is complete, onSelected should be triggered
    expect(wrapper.props().name).toEqual('test');
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
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().disabled,
    ).toEqual(false);

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
  it('returns value and name of selected option', () => {
    const testValue = { name: '', value: '' };
    const wrapper = mountWithTheme(
      <SearchSelectInput
        async
        name="testAsync"
        onSelected={({ value }) => {
          (testValue.name = 'testAsync'), (testValue.value = value);
        }}
        loadOptions={() => [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      >
        Test
      </SearchSelectInput>,
    );

    // simulate selecting the first option
    act(() => {
      wrapper
        .find('Select')
        .instance()
        .selectOption({ label: 'Option 1', value: 'option1' });
    });

    // if simulate is complete, onSelected should be triggered
    expect(testValue.value).toEqual('option1');
    expect(testValue.name).toEqual('testAsync');
  });

  it('returns values and names of selected options', () => {
    const testValues = [];
    const wrapper = mountWithTheme(
      <SearchSelectInput
        isMulti
        name="tags"
        onSelected={({ value }) => testValues.push(...value)}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
          { value: 'option4', label: 'Option 4' },
        ]}
      >
        Test
      </SearchSelectInput>,
    );

    const select = wrapper.find('Select').instance();

    // simulate selecting the first option
    act(() => {
      select.selectOption({ label: 'Option 1', value: 'option1' });
      select.selectOption({ label: 'Option 2', value: 'option2' });
    });

    // if simulate is complete, onSelected should be triggered
    expect(testValues).toEqual([
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]);
  });

  it('returns values and names of selected options', () => {
    const testValues = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ];
    const values = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    const wrapper = mountWithTheme(
      <SearchSelectInput
        isMulti
        name="tags"
        value={values}
        onSelected={({ value }) => {
          testValues.push(...value);
        }}
        options={testValues}
      >
        Test
      </SearchSelectInput>,
    );

    // simulate selecting the first option
    act(() => {
      testValues.splice(0, 2);
    });

    // if simulate is complete, onSelected should be triggered
    expect(wrapper.find('Select').props().options).toEqual([
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ]);
  });
});
