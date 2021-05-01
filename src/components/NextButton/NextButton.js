import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {},
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
  },
  clickaleButtonStyle: {
    backgroundColor: 'rgba(6, 182, 212, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: 'rgba(249, 249, 249, 1)',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  undisabledColor: {
    color: '#FFFFFF',
  },
  disabledColor: {
    color: 'rgba(6, 182, 212, 1)',
  },
});

export const NextButton = ({disabled, onPressButton, buttonText}) => {
  return (
    <Pressable
      disabled={disabled}
      style={
        (styles.buttonStyle,
        disabled ? styles.disabledButton : styles.clickaleButtonStyle)
      }
      onPress={onPressButton}>
      <Text
        style={
          (styles.text,
          disabled ? styles.disabledColor : styles.undisabledColor)
        }>
        {buttonText}
      </Text>
    </Pressable>
  );
};
