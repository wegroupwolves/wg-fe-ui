import { AddEntityButton } from '.';
import { mount } from 'enzyme';
import React from 'react';
import { orange } from '../../themes';
const theme = orange();
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('AddEntityButton', () => {
  it('When rendered should have min width equal to 250px', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <AddEntityButton onClick={() => {}} name="Add Entity" />
      </ThemeProvider>,
    );
    expect(wrapper.find('StyledButton')).toHaveStyleRule('min-width', '25rem');
  });

  it('When clicked should invoke click Callback', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <AddEntityButton onClick={onClick} name="Add Entity" />
      </ThemeProvider>,
    );
    wrapper
      .find(AddEntityButton)
      .props()
      .onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
