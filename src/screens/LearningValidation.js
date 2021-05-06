import * as React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useSelector} from 'react-redux';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {
  DisplayAnswers,
  TextArea,
  ToolMenuButtons,
  Section,
} from './LearningScreen';
import {styles} from '../Styles';

function LearningValidation({route, navigation}) {
  const {correctPhrase, wrongAnswers, listOfAnswers, wrongId} = route.params;
  const findCorrectAnswer = listOfAnswers.find(item => item === correctPhrase);
  const findWrongAnswer = listOfAnswers.find(item => item !== correctPhrase);
  const correctAnswer = [findCorrectAnswer];
  const wrongPhrase = [findWrongAnswer];

  let listItem;

  if (findCorrectAnswer) {
    listItem = (
      <>
        <DisplayAnswers listOfAnswers={correctAnswer} buttonText={'Correct'} />
        <DisplayAnswers listOfAnswers={wrongAnswers} buttonText={'Pick'} />
      </>
    );
  }

  if (findCorrectAnswer) {
    listItem = (
      <>
        <DisplayAnswers listOfAnswers={wrongPhrase} buttonText={'Wrong'} />
        <DisplayAnswers listOfAnswers={wrongAnswers} buttonText={'Pick'} />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ToolMenuButtons backButtonOnPress={() => navigation.navigate('Home')} />
      <SectionHeading title={`Category: ${correctPhrase.name.en}`} />
      <TextArea phrase={correctPhrase.name.mg} />
      <Section>
        <SectionHeading title={'Pick a solution:'} />
        {listItem}
      </Section>
    </SafeAreaView>
  );
}

export default LearningValidation;
