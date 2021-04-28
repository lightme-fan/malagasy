import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {View, StyleSheet} from 'react-native';

import List from './List';
import DATA from '../../data/categories.json';

storiesOf('List', module).add('List categories', () => (
  <View>
    {DATA.categories.map(item => (
      <List
        categoryName={item.name.en}
        categoryId={item.id}
        actionText={'Learn'}
        actionStyle={'#06B6D4'}
        onPressButton={() => alert('Clicked button')}
      />
    ))}
  </View>
));
