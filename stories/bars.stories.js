import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { BackButton, SearchInput, ToolBar } from './../src'

const COMPONENT_CHOICES = {
    none: null,
    back_button: <BackButton />,
    search_input: <SearchInput />
  };

storiesOf('Mid level blocks/Bars', module)
    .addDecorator(withKnobs())
    .addDecorator(withInfo({ inline: true }))
    .add('ToolBar', () => {
        const componentName = select('Child component', Object.keys(COMPONENT_CHOICES),'search_input');
        return (
        <ToolBar>
            {COMPONENT_CHOICES[componentName]}
        </ToolBar>
        )
    })