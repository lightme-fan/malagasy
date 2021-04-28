import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 20,
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 16,
    lineHeight: 19,
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
