import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {ActionButton} from '../ActionButton/ActionButton';
import {ListItem} from './ListItem';
import {View} from 'react-native';

function Item({categoryName, actionText, style, onPressButton}) {
  return (
    <ListItem category={categoryName}>
      <ActionButton
        text={actionText}
        textStyle={style}
        onPress={onPressButton}
      />
    </ListItem>
  );
}

storiesOf('List item', module).add('Item', () => (
  <View>
    <Item
      categoryName={'All'}
      actionText={'Learn'}
      style={'#06B6D4'}
      onPressButton={() => alert('Clicked to learn words')}
    />
    <Item
      categoryName={'Food'}
      actionText={'Pick'}
      style={'#06B6D4'}
      onPressButton={() => alert('Pick a words')}
    />
  </View>
));
