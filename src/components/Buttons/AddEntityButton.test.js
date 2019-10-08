import { AddEntityButton } from '.';
import { mount } from 'enzyme';
import React from 'react';
import Theme from './../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('AddEntityButton', () => {
  it('When rendered should have default value of 5.8vw of width', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <AddEntityButton onChange={() => {}} onClick={() => {}} />
      </ThemeProvider>,
    );
    expect(wrapper.find('StyledButton')).toHaveStyleRule('width', '52vw');
  });
});
