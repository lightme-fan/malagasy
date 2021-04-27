import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});

const ListItem = ({category, children}) => {
  return (
    <SafeAreaView style={styles.item}>
      <Text>{category}</Text>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default ListItem;
