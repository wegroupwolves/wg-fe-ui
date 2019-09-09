import { TextInput } from ".";
import { shallow,  mount} from 'enzyme';
import React from 'react';
import Theme from '../../../.storybook/theme';
import 'jest-styled-components';

import { ThemeProvider } from "styled-components";

describe('TextInput', () => {
 it('style changes when disabled', () => {
  const wrapper = mount(
   <ThemeProvider theme={Theme}>
     <TextInput type='text' name="firstname">Name</TextInput>
   </ThemeProvider>
  );
  expect(wrapper.find('input')).toHaveStyleRule('background-color', 'white');

  wrapper.setProps({children: <TextInput disabled type="text" name="firstname">name</TextInput>})
   expect(wrapper.find('input')).toHaveStyleRule('background-color', Theme().colors['bg-disabled']);
 });

 it('returns value when input changes', () => {
   let ctrlName = 'fakeName';
   let ctrlValue = 'Ruben';

   const wrapper = mount(<TextInput setFieldValue={(name, value) => {ctrlName = name; ctrlValue = value} } name='test' type='text' >test</TextInput>)

   expect(ctrlValue).toEqual('Ruben');
   expect(ctrlName).toEqual('fakeName');
   
   wrapper.find('input').simulate('change', { target: { value: 'Maxime'}});
   expect(ctrlValue).toEqual('Maxime');
   expect(ctrlName).toEqual('test');
  


 });
});