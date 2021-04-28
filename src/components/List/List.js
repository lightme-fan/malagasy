import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import ListItem from '../ListItem/ListItem';

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
const List = ({
  categoryName,
  categoryId,
  actionText,
  actionStyle,
  onPressButton,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListItem
        category={categoryName}
        key={categoryId}
        style={styles.listItem}>
        <ActionButton
          text={actionText}
          textStyle={actionStyle}
          onPress={onPressButton}
        />
      </ListItem>
    </SafeAreaView>
  );
};

export default List;
