import { FileBox } from '.';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('FileBox', () => {
  it('when file wasnt passed or equal to 0, should display be none', () => {
    const file = { name: '', size: 0, source: '' };
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FileBox {...file} loaded={0}>
          Testje
        </FileBox>
      </ThemeProvider>,
    );

    expect(wrapper.find('Box')).toHaveStyleRule('display', 'none');
  });

  it('when file was passed, should display be flex ', () => {
    const file = { name: '', size: 100, source: '' };
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FileBox {...file} loaded={0}>
          Testje
        </FileBox>
      </ThemeProvider>,
    );

    expect(wrapper.find('Box')).toHaveStyleRule('display', 'flex');
  });

  it('when function passed to onClose property, should be called ', () => {
    const file = { name: '', size: 100, source: '' };
    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <FileBox {...file} loaded={0} onClose={onClose}>
          Testje
        </FileBox>
      </ThemeProvider>,
    );

    wrapper
      .find(FileBox)
      .props()
      .onClose();

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
