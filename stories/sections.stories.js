import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Section } from '../src';

const ColoredBackground = styled.div`
  background-color: #f0f1f3;
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
  });

ColoredBackground.displayName = 'ColoredBackground';
