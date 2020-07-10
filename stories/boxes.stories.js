import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  boolean,
  text,
  select,
  number,
} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import UploadIcon from './../src/components/Icons/Upload';
import PlusIcon from './../src/components/Icons/Plus';

// BOXES
import {
  QuestionBox,
  Uploader,
  DownloadBox,
  AccordionBox,
  RiskObjectSelector,
  RiskObjectDisplay,
  LinkBox,
  CodeBox,
  GuidedImage,
} from '../src';

// OTHER ELEMENTS
import {
  IconCarFilled,
  DataBlock,
  H4,
  Body,
  RoundedButton,
  IconActionClose,
} from '../src';

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

  .add('QuestionBox', () => {
    return (
      <StyledQuestionBox
        option1="Ja"
        option2="Nee"
        response={answer => console.log(answer)}
        disabled={boolean('disabled', false)}
      >
        Is this a Question?
      </StyledQuestionBox>
    );
  })

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

  .add('DownloadBox', () => {
    return (
      <DownloadBox
        otherProps={select('otherProps', ...propsObject)}
        href={text('href', 'href')}
        thumbnail={text('thumbnail', '')}
        filename={text('fileName', 'fileName')}
      />
    );
  })

  .add('RiskObjectSelector', () => {
    return (
      <RiskObjectSelector
        label={text('Label', 'Car')}
        amount={number('Amount', 2, { range: true, min: 0, max: 25, step: 1 })}
        active={boolean('Is active?', false)}
        size={select('Size?', { Square: 'square', Wide: 'wide' }, 'square')}
        onClick={event => {
          console.log(event);
        }}
      >
        <IconCarFilled size={50} />
      </RiskObjectSelector>
    );
  })

  .add('RiskObjectDisplay', () => {
    return (
      <RiskObjectDisplayWrapper>
        <RiskObjectDisplay
          icon={<IconCarFilled />}
          title="Bugatti Cheyron"
          onClick={event => {
            console.log(event);
          }}
          hoverContent="Niet tariferen"
          hoverButton={
            <RoundedButton
              icon={<IconActionClose size={40} />}
              type="danger"
              iconType="fill"
              size="large"
            />
          }
        >
          <DataBlock>
            <Body light smaller>
              License plate
            </Body>
            <H4 larger>-</H4>
          </DataBlock>

          <DataBlock>
            <Body light smaller>
              Power (kW)
            </Body>
            <H4 larger>365</H4>
          </DataBlock>

          <DataBlock>
            <Body light smaller>
              Catalogue value
            </Body>
            <H4 larger>&euro; 2.998.000</H4>
          </DataBlock>
        </RiskObjectDisplay>
      </RiskObjectDisplayWrapper>
    );
  })

  .add('LinkBox', () => {
    return (
      <RiskObjectDisplayWrapper>
        <LinkBox url={text('URL to be shown', 'https://click-to-copy-me.be')}>
          <Body tiny light>
            {text('Label', 'This is a bit of explanation about above URL.')}
          </Body>
        </LinkBox>
      </RiskObjectDisplayWrapper>
    );
  })

  .add('CodeBox', () => {
    return (
      <CodeBox canCopy={boolean('Can this be copied?', true)}>
        {`<a href=”https://campaign.wegroup.be/t8529LDsXDWm” target=”_blank”>Click here</a>`}
      </CodeBox>
    );
  })

  .add('GuidedImage', () => {
    const stepsForGuidedImage = [
      {
        offsetTop: '10px',
        offsetLeft: '10px',
        content: 'This is some content for the first step.',
      },
      {
        offsetTop: '50%',
        offsetLeft: '50%',
        content: 'This is some content for the second step.',
      },
    ];
    return (
      <GuidedImageContainer>
        <GuidedImage
          imageUrl="https://via.placeholder.com/1200x800?text=Placeholder+for+guided+image+component"
          caption="A caption is a piece of text that is displayed to explain a little more about the image"
          steps={stepsForGuidedImage}
        ></GuidedImage>
      </GuidedImageContainer>
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

const RiskObjectDisplayWrapper = styled.div`
  width: 320px;
`;

const GuidedImageContainer = styled.div`
  width: 85rem;
`;

StyledQuestionBox.displayName = 'QuestionBox';
