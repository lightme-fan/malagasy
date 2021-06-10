import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {ActionButton} from '../ActionButton/ActionButton';
import {ListItem} from '../ListItem/ListItem';

const styles = StyleSheet.create({
  listItem: {
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});
// This is quite useless at the moment
export const List = ({children}) => {
  return <SafeAreaView style={styles.listItem}>{children}</SafeAreaView>;
};
