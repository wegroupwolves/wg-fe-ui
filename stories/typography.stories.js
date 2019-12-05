import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Title, SubTitle, Text, TextBold, Label, SubLabel } from '../src/';

const propsObject = [{ none: null, id: { id: 'add' } }];

storiesOf('Low level blocks/Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Title', () => (
    <Title
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'Title')}
    </Title>
  ))
  .add('SubTitle', () => (
    <SubTitle
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'SubTitle')}
    </SubTitle>
  ))
  .add('Text', () => (
    <Text
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'Text')}
    </Text>
  ))
  .add('TextBold', () => (
    <TextBold
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'TextBold')}
    </TextBold>
  ))
  .add('Label', () => (
    <Label
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'Label')}
    </Label>
  ))
  .add('SubLabel', () => (
    <SubLabel
      otherProps={select('otherProps', ...propsObject)}
      color={text('Color', '')}
    >
      {text('Label', 'SubLabel')}
    </SubLabel>
  ));
