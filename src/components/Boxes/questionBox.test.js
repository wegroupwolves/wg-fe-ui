import { QuestionBox } from '.';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../../.storybook/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('Checkbox', () => {
  it('can pass extra props', () => {
    const wrapper = shallow(
      <QuestionBox lol={'test'} >Testje</QuestionBox>,
    );
    expect(wrapper.props().lol).toEqual('test');
  });
  it('returns value when option is clicked', () => {
    let answer;
    const wrapper = mount(
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
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <QuestionBox option1="1" option2="2">
          test
        </QuestionBox>
      </ThemeProvider>,
    );

    // check if color default is action
    expect(wrapper.find('.option1')).toHaveStyleRule(
      'background-color',
      Theme().colors.action,
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
      Theme().colors.disabled,
    );
  });
});
