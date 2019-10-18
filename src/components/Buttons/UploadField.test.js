import { UploadField } from '.';
import { mount } from 'enzyme';
import React from 'react';
import Theme from '../../constants/theme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { act } from 'react-dom/test-utils';

describe('UploadField', () => {
  it('When rendered should have default value of 52vw of width', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <UploadField onClick={() => {}} />
      </ThemeProvider>,
    );
    expect(wrapper.find('StyledButton')).toHaveStyleRule('width', '52vw');
  });

  it('When dragged element enter, property withFile equals to true', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <UploadField onClick={() => {}} />
      </ThemeProvider>,
    );
    const e = {
      preventDefault: Function.prototype,
    };
    act(() => {
      wrapper
        .find('StyledButton')
        .props()
        .onDragEnter(e);
    });

    setTimeout(() => {
      expect(wrapper.find('StyledButton').props().withFile).toEqual(true);
    });
  });

  it('When dragged element leave, property withFile equals to false', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <UploadField onClick={() => {}} />
      </ThemeProvider>,
    );
    const e = {
      preventDefault: Function.prototype,
    };
    act(() => {
      wrapper
        .find('StyledButton')
        .props()
        .onDragLeave(e);
    });
    expect(wrapper.find('StyledButton').props().withFile).toEqual(false);
  });

  it('When dragged element drops, property withFile equals to true', () => {
    const e = {
      dataTransfer: { files: [{}] },
      preventDefault: Function.prototype,
      stopPropagation: Function.prototype,
    };
    const onClick = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <UploadField onClick={onClick} />
      </ThemeProvider>,
    );
    act(() => {
      wrapper
        .find('StyledButton')
        .props()
        .onDrop(e);
    });

    setTimeout(() => {
      expect(wrapper.find('StyledButton').props().withFile).toEqual(false);
      expect(onClick).toHaveBeenCalledWith(e.dataTransfer);
    });
  });
});
