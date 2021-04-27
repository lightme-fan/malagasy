import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});
const List = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default List;
