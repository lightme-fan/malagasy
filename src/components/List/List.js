import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  View,
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

export const List = ({children}) => {
  return <SafeAreaView style={styles.listItem}>{children}</SafeAreaView>;
};
