import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import ActionButton from '../ActionButton/ActionButton';
import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

const List = ({data, actionText, actionStyle, onPressButton}) => {
  return (
    <SafeAreaView style={styles.container}>
      {data.map((item, index) => (
        <ListItem
          category={item.name.en}
          key={item.id}
          style={styles.listItem}
          borderWidth={1}
          borderBottomWidth={0.4}
          borderColor={'#E5E5E5'}
          multiline={true}>
          <ActionButton
            text={actionText}
            textStyle={actionStyle}
            onPress={onPressButton}
          />
        </ListItem>
      ))}
    </SafeAreaView>
  );
};

export default List;
