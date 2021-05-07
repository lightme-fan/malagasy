import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import {Context} from '../redux/reducer';
import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {PhraseTextarea} from '../components/PhraseTextarea/PhraseTextarea';
import {NightModeButton, BackButton} from '../Svg/index';
import {List} from '../components/List/List';
import {ListItem} from '../components/ListItem/ListItem';
import {styles} from '../Styles';
import {NextButton} from '../components/NextButton/NextButton';

// Section
export const Section = ({children}) => {
  return <View style={styles.section}>{children}</View>;
};

// Action buttons
export const LearningScreenHeader = ({backButtonOnPress}) => {
  return (
    <View style={styles.headerMenu}>
      <ToolButton onPress={backButtonOnPress}>
        <BackButton />
      </ToolButton>
      <ToolButton onPress={() => alert('Clicked')}>
        <NightModeButton />
      </ToolButton>
      <LanguageSwitcher style={styles.item} />
    </View>
  );
};

// Textarea
export const TextArea = ({phrase}) => {
  return (
    <Section>
      <SectionHeading title={'The phrase:'} />
      <PhraseTextarea value={phrase} editable={false} />
    </Section>
  );
};

// Randomizing answers
const randomizedAnswers = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let random = i + Math.floor(Math.random() * (array.length - i));

    let randomized = array[random];
    array[random] = array[i];
    array[i] = randomized;
  }
  return array;
};

// Learning screen
function LearningScreen({route, navigation}) {
  const {id} = route.params;
  const {state, dispatch} = React.useContext(Context);
  const {
    categories,
    phrases,
    answers,
    isPhraseCorrect,
    wrongAnswers,
    buttonText,
    correctAnswer,
    pressed,
    incorrectAnswer,
  } = state;

  //   Find a category
  const category = categories.find(cat => cat.id === id);

  // Some State
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [nextButton, setNextButton] = React.useState(false);
  const [disabledButton, setDisabledButton] = React.useState(false);

  //   Randomizing the category phrasesIds
  const randomCategoryIds =
    category.phrasesIds[Math.floor(Math.random() * category.phrasesIds.length)];
  // Find a phrase by comparing the id with the randomId
  let phrase = phrases.find(phrase => phrase.id.includes(randomCategoryIds));

  React.useEffect(() => {
    dispatch({type: 'CORRECT_PHRASE', payload: phrase});
  }, []);

  //  answers options
  const option1 = phrases[Math.floor(Math.random() * phrases.length)];
  const option2 = phrases[Math.floor(Math.random() * phrases.length)];
  const option3 = phrases[Math.floor(Math.random() * phrases.length)];
  const wrongOptions = [option1, option2, option3];

  // set answers
  let listAnswers = [...wrongOptions, phrase];
  const allAnswers = randomizedAnswers(listAnswers);

  // Handle validating answers
  const validatingAnswer = phr => {
    setIsPressed(true);
    setNextButton(true);

    if (phrase?.id === phr.id) {
      setIsCorrect(true);
      setDisabledButton(false);
    } else {
      setIsIncorrect(true);
      setDisabledButton(true);
    }
  };

  // Handle Next Button
  const handleNextButton = () => {
    setIsPressed(!isPressed);
  };

  React.useEffect(() => {
    handleNextButton();
    return allAnswers.map(phr => {
      validatingAnswer(phr);
    });
  }, []);

  // Display Optional Answers
  const DisplayAnswers = () => {
    return (
      <List>
        {allAnswers.map(phr => {
          let correctOne = allAnswers.find(item => item === phrase);
          let incorrectOne = allAnswers.find(item => item === phrase);

          if (phrase.id === phr.id) {
            correctOne = {
              ...correctOne,
              buttonText: 'Correct',
              color: '#06D440',
            };
          } else if (phrase.id !== phr.id) {
            incorrectOne = {
              ...incorrectOne,
              buttonText: 'Wrong',
              color: '#D4068E',
            };
          } else {
            phr = {...phr, buttonText: 'Pick', color: '#06B6D4'};
          }

          return (
            <ListItem
              categoryName={phr.name.en}
              key={phr.id}
              buttonText={phr.buttonText ? phr.buttonText : 'Pick'}
              actionStyle={phr.color ? phr.color : '#06B6D4'}
              isCorrect={isCorrect && phrase === phr}
              isIncorrect={isIncorrect && phr?.isIncorrect}
              onPressButton={() => validatingAnswer(phr)}
            />
          );
        })}
      </List>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LearningScreenHeader
          backButtonOnPress={() => navigation.navigate('Home')}
        />
        <SectionHeading title={`Category:  ${category?.name.en}`} />
        <TextArea phrase={phrase?.name.mg} />
        <Section>
          <SectionHeading title={'Pick a solution:'} />
          <DisplayAnswers />
        </Section>

        <View
          style={{padding: 60, flexDirection: 'row', justifyContent: 'center'}}>
          {nextButton === true && isCorrect && (
            <NextButton
              disabled={disabledButton}
              buttonText={'Next'}
              onPressButton={() => handleNextButton()}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningScreen;
