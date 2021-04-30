import React, {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import {PhraseTextarea} from './PhraseTextarea';

function EditableTextare() {
  const [inputValue, setInputValue] = useState('');

  return (
    <PhraseTextarea
      value={inputValue}
      editable={true}
      onChange={event => setInputValue(event.value)}
    />
  );
}

storiesOf('Phrase', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Editable', () => <EditableTextare />)
  .add('Uneditable', () => (
    <PhraseTextarea value={"Roa ambin'ny folo"} editable={false} />
  ))
  .add('Long phrase', () => (
    <PhraseTextarea
      value={
        'long long long long long long long long long long long long long long long long long long long long '
      }
      editable={false}
    />
  ));
