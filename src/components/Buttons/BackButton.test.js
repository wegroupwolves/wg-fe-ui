import { BackButton } from '.';
import { shallow, mount } from 'enzyme';
import React from 'react';
import BackArrow from './../Icons/BackArrow';
import Theme from '../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('BackButton', () => {
  it('When clicked, button should invoke onClick function', () => {
    let value = 1;

    const wrapper = shallow(
      <BackButton name="Back" onClick={() => value--}></BackButton>,
    );
    wrapper.simulate('click');
    expect(value).toEqual(0);
  });

  it('When rendered, component should have correct style', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <BackButton name="Back" icon={<BackArrow />} />
      </ThemeProvider>,
    );

    const child = wrapper.childAt(0);
    expect(child).toHaveStyleRule('background-color', 'initial');
    expect(child).toHaveStyleRule('color', Theme().colors.highlight);
  });
});
