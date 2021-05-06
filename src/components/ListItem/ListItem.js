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
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderBottomWidth: 0.4,
    borderColor: '#E5E5E5',
  },
});

export const ListItem = ({
  actionText,
  actionStyle,
  categoryName,
  onPressButton,
}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPressButton}>
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
