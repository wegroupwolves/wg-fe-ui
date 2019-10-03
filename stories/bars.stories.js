import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { LoadingBar, ProgressBar } from './../src'


storiesOf('Low Level blocks/Bars', module)
    .addDecorator(withKnobs())
    .addDecorator(withInfo({ inline: true }))
    .add('LoadingBar', () => {
        return (
            <LoadingBar background="#AEAEAE" />
        )
    })


storiesOf('Mid Level blocks/Bars', module)
    .addDecorator(withKnobs())
    .addDecorator(withInfo({ inline: true }))
    .add('ProgressBar', () => {
        return (
            <ProgressBar background="#AEAEAE" />
        )
    })