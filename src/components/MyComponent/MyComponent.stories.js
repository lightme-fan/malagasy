import * as React from 'react'
import { getStorybook, storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import MyComponent from './Mycomponent'

storiesOf('My Component', module)
    .addDecorator((getStory) => <View>{getStory()}</View>)
    .add('Fanilo', () => <MyComponent />)