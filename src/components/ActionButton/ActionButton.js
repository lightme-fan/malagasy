import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {CorrectAnswer, RightArrow, WrongAnswer} from '../../Svg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexBasis: 'auto',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'right',
  },
  iconStyle: {
    width: 16,
    marginLeft: 20,
  },
});

export const ActionButton = ({
  textStyle,
  text,
  onPress,
  correctPhrase,
  inCorrectPhrase,
}) => {
  let icon;
  let buttonText;

  if (
    (!correctPhrase && !inCorrectPhrase && text === 'Learn') ||
    text === 'Pick'
  ) {
    buttonText = text;
    icon = <RightArrow />;
  } else if (correctPhrase || text === 'Correct') {
    buttonText = 'Correct';
    icon = <CorrectAnswer />;
  } else if (inCorrectPhrase || text === 'Wrong') {
    buttonText = 'Wrong';
    icon = <WrongAnswer />;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={(styles.text, {color: textStyle})}>{buttonText}</Text>
        <View style={styles.iconStyle}>{icon}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};
