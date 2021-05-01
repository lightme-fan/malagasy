import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 15,
  },
});

export const SectionHeading = ({title}) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};
