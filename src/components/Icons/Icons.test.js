import * as Icons from './index';
import { mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

describe('Icons', () => {
  // Execute all tests on all icons
  Object.keys(Icons).forEach(IconKey => {
    const Element = Icons[IconKey];

    it(`${IconKey} color passing`, () => {
      // is default color black
      const wrapper = mount(<Element />);
      expect(wrapper.prop('color')).toEqual('black');

      // can pass a custom color
      const wrapper2 = mount(<Element color="purple" />);
      expect(wrapper2.prop('color')).toEqual('purple');

      // undefined color gives default color
      const wrapper3 = mount(<Element color={undefined} />);
      expect(wrapper3.prop('color')).toEqual('black');
    });

    it(`${IconKey} ClassName passing`, () => {
      // passes className to svg
      const wrapper = mount(<Element className="test" />);
      expect(wrapper.find('svg').hasClass('test')).toEqual(true);
    });
  });
});
