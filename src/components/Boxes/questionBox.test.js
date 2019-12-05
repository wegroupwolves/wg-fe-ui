import { QuestionBox } from '.';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

const theme = orange();

// eslint-disable-next-line
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

describe('QuestionBox', () => {
  it('can pass extra props', () => {
    const wrapper = mountWithTheme(
      <QuestionBox lol={'test'}>Testje</QuestionBox>,
    );
    expect(wrapper.props().lol).toEqual('test');
  });
  it('returns value when option is clicked', () => {
    let answer;
    const wrapper = mountWithTheme(
      <QuestionBox option1="1" option2="2" response={res => (answer = res)}>
        Testje
      </QuestionBox>,
    );

    // simulate click on option1
    wrapper
      .find('.option1')
      .first()
      .simulate('click');
    // test if answer changed to the value
    expect(answer).toEqual('1');

    // simulate click on option2
    wrapper
      .find('.option2')
      .first()
      .simulate('click');
    // test if answer changed to the value
    expect(answer).toEqual('2');
  });
  it('style changes when disabled', () => {
    const wrapper = mountWithTheme(
      <ThemeProvider theme={theme}>
        <QuestionBox option1="1" option2="2">
          test
        </QuestionBox>
      </ThemeProvider>,
    );

    // check if color default is action
    expect(wrapper.find('.option1')).toHaveStyleRule(
      'background-color',
      theme.brand.primary,
    );

    // add prop disabled to questionBox
    wrapper.setProps({
      children: (
        <QuestionBox disabled option1="1" option2="2">
          test
        </QuestionBox>
      ),
    });

    // check if bg color is disabled
    expect(wrapper.find('.option1')).toHaveStyleRule(
      'background-color',
      theme.ui.disabled,
    );
  });
});
