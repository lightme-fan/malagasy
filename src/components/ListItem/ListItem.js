import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ActionButton} from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderBottomWidth: 0.4,
    borderColor: '#E5E5E5',
  },
});

export const ListItem = ({
  categoryName,
  actionText,
  actionStyle,
  categoryId,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPressButton}
      id={categoryId}>
      <Text>{categoryName}</Text>
      <View>
        <ActionButton
          text={actionText}
          textStyle={actionStyle}
          style={{alignSelf: 'flex-end'}}
        />
      </View>
    </TouchableOpacity>
  );
};
