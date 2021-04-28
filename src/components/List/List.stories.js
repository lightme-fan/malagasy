import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View, StyleSheet} from 'react-native';

import List from './List';
import ListItem from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import DATA from '../../data/categories.json';

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

function DisplayData({actionText, actionStyle, onPressButton}) {
  return (
    <View>
      {DATA.categories.map((item, index) => (
        <ListItem
          category={item.name.en}
          key={item.id}
          style={styles.listItem}
          borderWidth={1}
          borderBottomWidth={0.4}
          borderColor={'#E5E5E5'}
          multiline={true}>
          <ActionButton
            text={actionText}
            textStyle={actionStyle}
            onPress={onPressButton}
          />
        </ListItem>
      ))}
    </View>
  );
}

storiesOf('List', module).add('List categories', () => (
  <List>
    <DisplayData
      actionText={'Learn'}
      actionStyle={'#06B6D4'}
      onPressButton={() => alert('Clicked button')}
    />
  </List>
));
