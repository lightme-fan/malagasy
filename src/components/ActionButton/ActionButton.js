import React from 'react';
import {
  View,
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
    //Font size seems to small
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
  // It would be better to just pass the text directly and handle the assignment in the parent scope
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
