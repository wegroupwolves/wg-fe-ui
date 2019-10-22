import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import { QuestionBox, Uploader, DownloadBox } from '../src';

const propsObject = [{ none: null, id: { id: 'add' } }];

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
    const supported = [
      { type: 'image', extension: 'jpeg' },
      { type: 'image', extension: 'png' },
    ];
    return <Uploader supported={supported} multiple={true} />;
  })
  .add('DownloadBox', () => (
     <DownloadBox 
        otherProps={select('otherProps', ...propsObject)} 
        href={text('href', 'href')} 
        thumbnail={text('thumbnail', 'iejiji')} 
        filename={text('fileName', 'fileName')}
      /> 
  ));

const StyledQuestionBox = styled(QuestionBox)`
  width: 85%;
`;

StyledQuestionBox.displayName = 'QuestionBox';
