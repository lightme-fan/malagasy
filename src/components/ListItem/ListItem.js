import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const ListItem = ({
  category,
  children,
  borderWidth,
  borderColor,
  borderBottomWidth,
}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderBottomWidth: borderBottomWidth,
      }}>
      <Text>{category}</Text>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default ListItem;
