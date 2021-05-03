import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {ListItem} from './ListItem';
import {View} from 'react-native';

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
