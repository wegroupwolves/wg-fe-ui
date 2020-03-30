import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Section } from '../src';
import Section_v2 from '../src/components/v2/Section/Section_v2';

const ColoredBackground = styled.div`
  background-color: #fbfbfb;
  width: 100%;

  & section {
    margin: 3rem;
  }
`;

const greyBackground = story => (
  <ColoredBackground>{story()}</ColoredBackground>
);

storiesOf('Mid level blocks/Sections', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(greyBackground)
  .add('Section', () => {
    return (
      <Section>
        <Section.Title>Title</Section.Title>
        <Section.Content background={boolean('background', true)}>
          This is content of the section.
        </Section.Content>
      </Section>
    );
  })
  .add('Section_v2', () => {
    return (
      <Section_v2>
        <Section_v2.Row
          border={boolean('First row border?', true)}
          size={select(
            'Amount of columns?',
            {
              One: 'one',
              Two: 'two',
              Three: 'three',
            },
            'three',
          )}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Section_v2.Row>

        <Section_v2.Row size="two">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Section_v2.Row>
      </Section_v2>
    );
  });

ColoredBackground.displayName = 'ColoredBackground';
