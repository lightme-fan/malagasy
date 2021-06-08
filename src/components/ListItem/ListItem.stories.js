import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {ListItem} from './ListItem';
import {View} from 'react-native';
// You are not passing all the props that list item expects. I can't see the action button in the story
storiesOf('List item', module).add('Item', () => (
  <View>
    <ListItem
      categoryName={'All'}
      actionText={'Learn'}
      actionStyle={'#06B6D4'}
    />
    <ListItem
      categoryName={'Food'}
      actionText={'Pick'}
      actionStyle={'#06B6D4'}
    />
  </View>
));
