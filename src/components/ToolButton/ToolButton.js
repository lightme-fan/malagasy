import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#06B6D4',
    justifyContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});

export const ToolButton = ({children, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.icon}>{children}</View>
    </Pressable>
  );
};
