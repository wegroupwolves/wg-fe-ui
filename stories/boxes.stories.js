import React from 'react';
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
    const supported = [
      { type: 'image', extension: 'jpeg' },
      { type: 'image', extension: 'png' },
    ];
    return (
      <Uploader supported={supported}>
        {({ files, loaded, handleClose }) =>
          files.map((file, i) => (
            <StyledFile
              key={i}
              loaded={loaded[i]}
              name={file.name}
              size={file.size}
              source={file.img}
              onClose={handleClose}
            ></StyledFile>
          ))
        }
      </Uploader>
    );
  });

const StyledQuestionBox = styled(QuestionBox)`
  width: 85%;
`;

const StyledFile = styled(Uploader.FileBox)`
  width: 30%;
  margin-right: 3%;
  margin-top: 45px;
`;

StyledQuestionBox.displayName = 'QuestionBox';
