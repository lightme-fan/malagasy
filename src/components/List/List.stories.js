import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {List} from './List';
import DATA from '../../data/categories.json';
import {ListItem} from '../ListItem/ListItem';

storiesOf('List', module).add('List categories', () => (
  <List>
    {DATA.categories.map(item => { // The list component should do the mapping
      console.log(item.id);
      return (
        <ListItem
          categoryName={item.name.en}
          categoryId={`${item.id}${item.name.en}`}
          actionText={'Learn'}
          actionStyle={'#06B6D4'}
          onPressButton={() => alert('Clicked button')}
        />
      );
    })}
  </List>
));
