import DisplayTable from './DisplayTable';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('DisplayTable', () => {
  it('can add clickable highlight to value', () => {
    let value = 0;
    const wrapper = mount(
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
    const wrapper = mount(
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
