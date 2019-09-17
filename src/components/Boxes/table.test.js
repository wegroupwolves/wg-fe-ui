import { Table } from '.';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('Checkbox', () => {
  it('can add clickable highlight to value', () => {
    let value = 0;
    const wrapper = mount(
      <Table>
        <Table.Row>
          <Table.Value toggled={() => value++} highlight="highlight">
            Value
          </Table.Value>
        </Table.Row>
      </Table>,
    );

    // Check if highlight displays text
    expect(wrapper.find('span').text()).toEqual('highlight');

    // Check if toggled function triggers when highlight clicked
    wrapper.find('span').simulate('click');
    expect(value).toEqual(1);
  });

  it('contains necesarry table components', () => {
    const wrapper = mount(
      <Table>
        <Table.Row>
          <Table.Key>Key</Table.Key>
          <Table.Value>Value</Table.Value>
        </Table.Row>
      </Table>,
    );

    expect(wrapper.find('tbody').exists()).toEqual(true);
    expect(wrapper.find('th').exists()).toEqual(true);
    expect(wrapper.find('td').exists()).toEqual(true);
  });
});
