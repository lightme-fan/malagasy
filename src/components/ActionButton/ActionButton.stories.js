import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SafeAreaView, View} from 'react-native';

import {ActionButton} from './ActionButton';

storiesOf('Action button', module)
  .add('Learn', () => (
    <ActionButton
      text={'Learn'}
      textStyle={'#06B6D4'}
      onPress={() => alert('Learn words')}
    />
  ))
  .add('Pick', () => (
    <ActionButton
      text={'Pick'}
      textStyle={'#06B6D4'}
      onPress={() => alert('Pick a word')}
    />
  ))
  .add('Correct', () => (
    <ActionButton
      text={'Correct'}
      textStyle={'#06D440'}
      onPress={() => alert("It's correvt")}
    />
  ))
  .add('Wrong', () => (
    <ActionButton
      text={'Wrong'}
      textStyle={'#D4068E'}
      onPress={() => alert('Wrong answer')}
    />
  ));
