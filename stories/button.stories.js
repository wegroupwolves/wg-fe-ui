import React, { useState } from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import buttonIcon from './assets/buttonIcon.svg';
import { ReactComponent as BackArrow } from './assets/back-arrow.svg';
import {
  ActionButton,
  EditActionButton,
  AddEntityButton,
  BackButton,
  UploadField,
  ToggleButton,
  TertiaryButton,
  AddRemoveButton,
  RoundedButton,
  IconActionChevronRight,
  IconActionPlus,
  DashedButton,
  ButtonGroup,
  IconLinkBlock,
  IconHistoryFilled,
} from '../src/';

addParameters({
  options: {
    panelPosition: 'right',
  },
});

const buttonLevels = ['primary', 'secondary', 'white', 'default'];
const ToggleButtonLevels = ['active', 'non-active'];
const iconObject = { none: null, House: buttonIcon };
const svg = { none: null, back_arrow: <BackArrow /> };
const propsObject = [{ none: null, id: { id: 'add' } }];

storiesOf('Low level blocks/Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))

  .add('ActionButton', () => {
    return (
      <ActionButton
        onClick={action('button clicked')}
        fullwidth={boolean('Fullwidth', false)}
        disabled={boolean('Disabled', false)}
        icon={select('Icon', iconObject)}
        level={select('Level', buttonLevels, 'primary')}
        otherProps={select('otherProps', ...propsObject)}
        tooltipText={text('Tooltip text')}
      >
        {text('Label', 'Pay')}
      </ActionButton>
    );
  })

  .add('EditActionButton', () => {
    return (
      <EditActionButton onClick={action('button clicked')}>
        Edit
      </EditActionButton>
    );
  })

  .add('AddEntityButton', () => {
    const onClick = () => console.log('resource: ');

    return (
      <AddEntityButton
        onClick={onClick}
        name={text('Label', 'Add entity')}
        fullwidth={boolean('Full width?', false)}
      />
    );
  })

  .add('BackButton', () => {
    const iconName = select('Icon', Object.keys(svg), 'back_arrow');
    return (
      <BackButton
        onClick={action('button clicked')}
        name="Overview"
        icon={svg[iconName]}
        otherProps={select('otherProps', ...propsObject)}
      />
    );
  })

  .add('UploadField', () => {
    const onClick = value => console.log('value: ', value);
    return <UploadField onClick={onClick} />;
  })

  .add('ToggleButton', () => {
    return (
      <ToggleButton
        onClick={action('button clicked')}
        fullwidth={boolean('Fullwidth', false)}
        disabled={boolean('Disabled', false)}
        icon={select('Icon', iconObject)}
        level={select('Level', ToggleButtonLevels, 'active')}
        otherProps={select('otherProps', ...propsObject)}
      >
        {text('Label', 'Add')}
      </ToggleButton>
    );
  })

  .add('TertiaryButton', () => {
    return (
      <TertiaryButton
        label={text('Label', 'Cancel')}
        disabled={boolean('Disabled?', false)}
      ></TertiaryButton>
    );
  })

  .add('AddRemoveButton', () => {
    const [isAdded, setIsAdded] = useState(false);
    return (
      <AddRemoveButton
        added={isAdded}
        onClick={() => {
          setIsAdded(!isAdded);
        }}
      ></AddRemoveButton>
    );
  })

  .add('RoundedButton', () => {
    return (
      <RoundedButton
        icon={<IconActionChevronRight size={20} />}
        type={select(
          'Button type',
          {
            Default: 'default',
            Primary: 'primary',
            Success: 'success',
            Warning: 'warning',
            Danger: 'danger',
          },
          'default',
        )}
      />
    );
  })

  .add('DashedButton', () => {
    return (
      <DashedButtonWrapper>
        <DashedButton
          button={
            <RoundedButton
              type="primary"
              icon={<IconActionPlus size={35} />}
              iconType="fill"
              size="large"
            ></RoundedButton>
          }
          label="Een nieuwe wagen tariferen"
          onClick={() => {
            alert('The button was clicked');
          }}
          styleName={select('Style of button?', {
            Normal: 'normal',
            Faded: 'faded',
          })}
        >
          You can also pass children.
        </DashedButton>
      </DashedButtonWrapper>
    );
  })

  .add('ButtonGroup', () => {
    return (
      <ButtonGroupContainer>
        <ButtonGroup>
          <ActionButton level="white" fullwidth>
            First button
          </ActionButton>

          <ActionButton level="white" fullwidth>
            Second button
          </ActionButton>

          <ActionButton level="white" fullwidth>
            Third button
          </ActionButton>
        </ButtonGroup>
      </ButtonGroupContainer>
    );
  })

  .add('IconLinkBlock', () => {
    return (
      <IconLinkBlockWrapper>
        <IconLinkBlock
          icon={<IconHistoryFilled size={50} />}
          iconType="fill"
          info={text('Info', 'Example of text block')}
          label={text('Label', 'Hyperlink')}
          onClick={e => {
            console.log(e);
          }}
          active={boolean('Is active?', false)}
          disabled={boolean('Is disabled?', false)}
        ></IconLinkBlock>
      </IconLinkBlockWrapper>
    );
  });

const DashedButtonWrapper = styled.div`
  width: 320px;
  height: 320px;
`;

const ButtonGroupContainer = styled.div`
  width: 37rem;
`;

const IconLinkBlockWrapper = styled.div`
  width: 14rem;
`;
