import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { TextInput } from '../src';
import { switchStatement } from '@babel/types';


storiesOf('Low level blocks/Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true}))
  .add('TextInput', () => {

    let errors = {emailadres: text('Error', '')};
    let touched = {emailadres: boolean('Touched', false)};

    return (
      <StyledTextInput disabled={boolean('Disabled', false)} name="emailadres" type="email" placeholder="example@wegroup.be" errors={errors} touched={touched} >
        Email
      </StyledTextInput>
    )
  })
;

const StyledTextInput = styled(TextInput)`
  width: 27rem;
`;
