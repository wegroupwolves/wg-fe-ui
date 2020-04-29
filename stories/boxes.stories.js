import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import UploadIcon from './../src/components/Icons/Upload';
import PlusIcon from './../src/components/Icons/Plus';

import { QuestionBox, Uploader, DownloadBox, AccordionBox } from '../src';

const propsObject = [{ none: null, id: { id: 'add' } }];

storiesOf('Mid level blocks/Boxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('AccordionBox', () => {
    return (
      <AccordionBoxContainer>
        <AccordionBox>
          <AccordionBox.Header>
            <img
              src="https://via.placeholder.com/125x31?text=Logo"
              alt="Logo placeholder"
            />
          </AccordionBox.Header>

          <AccordionBox.Content>
            <AccordionBoxMockContent>
              This is the content
            </AccordionBoxMockContent>
          </AccordionBox.Content>
        </AccordionBox>
      </AccordionBoxContainer>
    );
  })
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
    const supported = {
      images: [
        { type: 'image', extension: 'jpeg' },
        { type: 'image', extension: 'png' },
      ],
      all: [],
      documents: [
        { type: 'application', extension: 'msword' },
        { type: 'application', extension: 'pdf' },
      ],
    };
    const ICONS = {
      upload: <UploadIcon />,
      plus: <PlusIcon />,
    };
    const labels = ['', 'upload or drop file here', 'upload file', 'drop file'];
    const componentName = select('icon', Object.keys(ICONS), 'upload');
    const ref = useRef();
    return (
      <Uploader
        ref={ref}
        supported={select('supported files', supported, supported['images'])}
        multiple={boolean('multiple', true)}
        icon={ICONS[componentName]}
        label={select('label', labels)}
      >
        {({ files, loaded, handleClose }) =>
          files.map((file, i) => (
            <StyledFile
              key={i}
              loaded={loaded[i]}
              name={file.name}
              size={file.size}
              source={file.data}
              onClose={handleClose}
            ></StyledFile>
          ))
        }
      </Uploader>
    );
  })
  .add('DownloadBox', () => (
    <DownloadBox
      otherProps={select('otherProps', ...propsObject)}
      href={text('href', 'href')}
      thumbnail={text('thumbnail', '')}
      filename={text('fileName', 'fileName')}
    />
  ));

const StyledQuestionBox = styled(QuestionBox)`
  width: 85%;
`;

const StyledFile = styled(Uploader.FileBox)`
  width: 30%;
  margin-right: 3%;
  margin-top: 45px;
`;

const AccordionBoxContainer = styled.div`
  width: 100%;
  padding: 0 4rem;
`;

const AccordionBoxMockContent = styled.div`
  background-color: ${({ theme }) => theme.brand.lightest};
  height: 20rem;
  padding: 1.2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.brand.primary};
`;

StyledQuestionBox.displayName = 'QuestionBox';
