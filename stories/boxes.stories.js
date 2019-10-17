import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { QuestionBox, Uploader } from '../src';

storiesOf('Mid level blocks/Boxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('QuestionBox', () => (
    <StyledQuestionBox
      option1="Ja"
      option2="Nee"
      response={answer => console.log(answer)}
      disabled={boolean('disabled', false)}
    >
      Is this a Question?
    </StyledQuestionBox>
  ))
  .add('Uploader', () => {
    // const [files, setFiles] = useState([]);
    return <Uploader multiple={true} />;
  });

const StyledQuestionBox = styled(QuestionBox)`
  width: 85%;
`;

StyledQuestionBox.displayName = 'QuestionBox';
