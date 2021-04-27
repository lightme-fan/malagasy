import React from 'react';
import {storiesOf} from '@storybook/react-native';

import List from './List';
import DATA from '../../data/categories.json';

storiesOf('List', module).add('List categories', () => (
  <List
    data={DATA.categories}
    actionText={'Learn'}
    actionStyle={'#06B6D4'}
    onPressButton={() => alert('Clicked button')}
  />
));
