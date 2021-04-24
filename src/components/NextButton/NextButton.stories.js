import React from 'react'
import { storiesOf } from '@storybook/react-native';
import NextButton from './NextButton';

storiesOf('Next button', module)
    .add('Clcikable', () => <NextButton disabled={false}/> )
    .add('disaled', () => <NextButton disabled={true} /> )