import DisplayTable from './DisplayTable';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { orange } from '../../../themes';
const theme = orange();

// eslint-disable-next-line
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

describe('DisplayTable', () => {
  it('can add clickable highlight to value', () => {
    let value = 0;
    const wrapper = mountWithTheme(
      <DisplayTable>
        <DisplayTable.Row>
          <DisplayTable.Value toggled={() => value++} highlight="highlight">
            Value
          </DisplayTable.Value>
        </DisplayTable.Row>
      </DisplayTable>,
    );

    // Check if highlight displays text
    expect(wrapper.find('span').text()).toEqual('highlight');

    // Check if toggled function triggers when highlight clicked
    wrapper.find('span').simulate('click');
    expect(value).toEqual(1);
  });

  it('contains necesarry children components', () => {
    const wrapper = mountWithTheme(
      <DisplayTable>
        <DisplayTable.Row>
          <DisplayTable.Key>Key</DisplayTable.Key>
          <DisplayTable.Value>Value</DisplayTable.Value>
        </DisplayTable.Row>
      </DisplayTable>,
    );

    expect(wrapper.find('tbody').exists()).toEqual(true);
    expect(wrapper.find('th').exists()).toEqual(true);
    expect(wrapper.find('td').exists()).toEqual(true);
  });
});
