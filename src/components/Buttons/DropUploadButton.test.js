import { DropUploadButton } from '.';
import { mount } from 'enzyme';
import React from 'react';
import Theme from './../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

describe('DropUploadButton', () => {
  it('When rendered should have default value of 52vw of width', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <DropUploadButton onChange={() => {}} onClick={() => {}} />
      </ThemeProvider>,
    );
    expect(wrapper.find('StyledButton')).toHaveStyleRule('width', '52vw');
  });
});
