import Uploader from './Uploader';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

describe('FileBox', () => {
  it('when file wasnt passed or equal to 0, should display be none', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Uploader.FileBox loaded={0}>Testje</Uploader.FileBox>
      </ThemeProvider>,
    );
    expect(wrapper.exists('Box')).toEqual(false);
  });

  it('when file was passed, should display be flex ', () => {
    const file = { name: '', size: 100, source: '' };
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Uploader.FileBox {...file} loaded={0}>
          Testje
        </Uploader.FileBox>
      </ThemeProvider>,
    );

    expect(wrapper.exists('Box')).toEqual(true);
  });

  it('when function passed to onClose property, should be called ', () => {
    const file = { name: '', size: 100, source: '' };
    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Uploader.FileBox {...file} loaded={0} onClose={onClose}>
          Testje
        </Uploader.FileBox>
      </ThemeProvider>,
    );

    wrapper
      .find(Uploader.FileBox)
      .props()
      .onClose();

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
