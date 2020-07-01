import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  Title,
  SubTitle,
  Text,
  TextBold,
  Label,
  SubLabel,
  BorderedTitle,
  H1,
  H2,
  H3,
  H4,
  Body,
  DataBlock,
} from '../src/';

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
  ))
  .add('BorderedTitle', () => {
    return <BorderedTitle>Bordered title</BorderedTitle>;
  })
  .add('H1', () => {
    return <H1>{text('Text', 'This is an H1 title.')}</H1>;
  })
  .add('H2', () => {
    return <H2>{text('Text', 'This is an H2 title.')}</H2>;
  })
  .add('H3', () => {
    return <H3>{text('Text', 'This is an H3 title.')}</H3>;
  })
  .add('H4', () => {
    return (
      <H4 larger={boolean('Larger?', false)}>
        {text('Text', 'This is an H4 title.')}
      </H4>
    );
  })
  .add('Body', () => {
    return (
      <Body
        bold={boolean('Bold?', false)}
        italic={boolean('Italic?', false)}
        light={boolean('Light?', true)}
        smaller={boolean('Smaller?', false)}
      >
        {text('Text', 'This is some body text.')}
      </Body>
    );
  })
  .add('DataBlock', () => {
    return (
      <DataBlock>
        <Body light smaller>
          Test
        </Body>
        <H4 larger>Test</H4>
      </DataBlock>
    );
  });
