import { SearchInput } from '.';
import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('SearchInput', () => {
  it('when changes should invoke proper handler with correct argument', () => {
    let val = '';
    const event = { target: { name: 'search', value: 'spam' } };
    const onChange = jest.fn();
    const wrapper = shallow(<SearchInput onChange={onChange} text={val} />);

    wrapper.simulate('change', event);
    expect(onChange).toHaveBeenCalledWith(event);
  });

  it('when value passed to text property it is passed to input value', () => {
    const wrapper = shallow(<SearchInput onChange={() => {}} text="spam" />);

    expect(wrapper.props().value).toEqual('spam');
  });
});
