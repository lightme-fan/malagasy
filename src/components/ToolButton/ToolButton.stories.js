import React from 'react'
import ToolButton from './ToolButton'
import { storiesOf } from '@storybook/react-native';
import AddToolButton from '../../Svg/AddToolButton'
import SeenButton from '../../Svg/SeenButton'
import LearntButton from '../../Svg/LearntButton'
import BackButton from '../../Svg/BackButton'
import NightModeButton from '../../Svg/NightModeButton'

storiesOf('Tool buttons', module)
    .add('Add', () => <ToolButton onPress={() => alert('Clicked button')}><AddToolButton /></ToolButton>)
    .add('Seen', () => <ToolButton onPress={() => alert('Clicked button')}><SeenButton /></ToolButton>)
    .add('Learnt', () => <ToolButton onPress={() => alert('Clicked button')}><LearntButton /></ToolButton>)
    .add('Back', () => <ToolButton onPress={() => alert('Clicked button')}><BackButton /></ToolButton>)
    .add('Night mode', () => <ToolButton onPress={() => alert('Clicked button')}><NightModeButton /></ToolButton>)