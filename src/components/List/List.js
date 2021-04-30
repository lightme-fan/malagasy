import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Pressable} from 'react-native';

import {ActionButton} from '../ActionButton/ActionButton';
import {ListItem} from '../ListItem/ListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

export const List = ({
  categoryName,
  categoryId,
  actionText,
  actionStyle,
  onPressButton,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPressButton}>
      <ListItem category={categoryName} style={styles.listItem}>
        <ActionButton text={actionText} textStyle={actionStyle} />
      </ListItem>
    </Pressable>
  );
};
