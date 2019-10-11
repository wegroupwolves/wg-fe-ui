import { SearchInput } from '.';
import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('SearchInput', () => {
  it('when changes should invoke proper handler with correct argument', () => {
    let val = '';
    const event = { target: { name: 'means', value: 'spam' } };
    const onChange = jest.fn();
    const wrapper = shallow(<SearchInput onChange={onChange} text={val} />);

    wrapper.find('Input').simulate('change', event);
    expect(onChange).toHaveBeenCalledWith(event.target.value);
  });

  it('when value passed to text property it is passed to input value', () => {
    const wrapper = shallow(<SearchInput onChange={() => {}} text="spam" />);

    expect(wrapper.find('Input').props().value).toEqual('spam');
  });
});
