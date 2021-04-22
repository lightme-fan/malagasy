
import React, { useState } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextarea from './PhraseTextarea';
import useValidateInput from '../../../util/useHandleInput'

function TextareaWrapper() {
  const { inputValue, handleInputValue } = useValidateInput()
  alert(inputValue)
  return (
    <View>
      <PhraseTextarea 
        placeholder="Enter here" 
        value={inputValue} 
        onChange={(event) => handleInputValue(event)} 
      /> 
      <PhraseTextarea 
        placeholder="Enter here" 
        value={inputValue}
      />
    </View>
  )
}

storiesOf('Phrase', module)
.addDecorator(story => <View>{story()}</View>)
.add('Textarea', () => <TextareaWrapper />)
