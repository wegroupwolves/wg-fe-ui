import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import DraggableList from '../src/components/DraggableList/DraggableList';
import RiskObjectBar from '../src/components/Bars/RiskObjectBar';

storiesOf('Mid level blocks/Draggable', module)
  .addDecorator(withKnobs())
  .addDecorator(withInfo({ inline: true }))
  .add('DraggableList', () => {
    return (
      <DraggableList
        showHandle={boolean('Show handles?', true)}
        style="width: 100%;"
      >
        <RiskObjectBar isDragItem={boolean('Show handles?', true)}>
          <RiskObjectBar.RiskObjectBarData data="Driver's name" label="Name" />
          <RiskObjectBar.RiskObjectBarData
            data="03/11/1995"
            label="Date of birth"
          />
          <RiskObjectBar.RiskObjectBarData
            data="30/03/2019"
            label="License issued at"
          />
          <RiskObjectBar.RiskObjectBarData
            data="0"
            label="Claims last 5 years"
          />
        </RiskObjectBar>

        <RiskObjectBar isDragItem={boolean('Show handles?', true)}>
          <RiskObjectBar.RiskObjectBarData data="Driver's name" label="Name" />
          <RiskObjectBar.RiskObjectBarData
            data="03/11/1995"
            label="Date of birth"
          />
          <RiskObjectBar.RiskObjectBarData
            data="30/03/2019"
            label="License issued at"
          />
          <RiskObjectBar.RiskObjectBarData
            data="0"
            label="Claims last 5 years"
          />
        </RiskObjectBar>

        <RiskObjectBar isDragItem={boolean('Show handles?', true)}>
          <RiskObjectBar.RiskObjectBarData data="Driver's name" label="Name" />
          <RiskObjectBar.RiskObjectBarData
            data="03/11/1995"
            label="Date of birth"
          />
          <RiskObjectBar.RiskObjectBarData
            data="30/03/2019"
            label="License issued at"
          />
          <RiskObjectBar.RiskObjectBarData
            data="0"
            label="Claims last 5 years"
          />
        </RiskObjectBar>
      </DraggableList>
    );
  });
