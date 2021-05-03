import * as React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {PhraseTextarea} from '../components/PhraseTextarea/PhraseTextarea';
import {NightModeButton, BackButton} from '../Svg/index';
import {List} from '../components/List/List';
import {ListItem} from '../components/ListItem/ListItem';
import {NextButton} from '../components/NextButton/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {validateAnswers} from '../redux/reducer';

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 23,
  },
  headerMenu: {
    width: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 56,
  },
  section: {
    marginTop: 38,
  },
  nextButton: {
    marginTop: 60,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

function Section({children}) {
  return <View style={styles.section}>{children}</View>;
}

function LearningScreen({route, navigation}) {
  const {id} = route.params;
  const [typeOfButton, setTypeOfButton] = React.useState('Pick');
  const [styleButton, setStyleButton] = React.useState('#06B6D4');

  const categories = useSelector(({items}) => items.categories);
  const phrases = useSelector(({items}) => items.phrases);
  const actionText = useSelector(({items}) => items.actionText);
  const actionStyle = useSelector(({items}) => items.actionStyle);
  const dispatch = useDispatch();

  //   Find a category
  const category = categories.find(cat => cat.id === id);
  //   Randomizing the category phrasesIds
  const randomCategoryIds =
    category.phrasesIds[Math.floor(Math.random() * category.phrasesIds.length)];
  // Find a phrase by comparing the id with the randomId
  const phrase = phrases.find(phrase => phrase.id.includes(randomCategoryIds));

  //  answers options
  const option1 = phrases[Math.floor(Math.random() * phrases.length)];
  const option2 = phrases[Math.floor(Math.random() * phrases.length)];
  const option3 = phrases[Math.floor(Math.random() * phrases.length)];

  // answers
  const answers = [phrase, option1, option2, option3];
  // Sorting the answers
  const sortedAnswers = answers.sort(() => {
    return 0.5 - Math.random();
  });

  // Find the correct answer
  const findCorrectAnswer = (correctPhrase, event) => {
    const answer = sortedAnswers.find(item => item.id === phrase.id);
    console.log(answer);
    if (answer === correctPhrase) {
      setTypeOfButton('Correct');
      setStyleButton('#06D440');
    } else {
      setTypeOfButton('Wrong');
      setStyleButton('#D4068E');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerMenu}>
          <ToolButton onPress={() => navigation.navigate('Home')}>
            <BackButton />
          </ToolButton>
          <ToolButton onPress={() => alert('Clicked')}>
            <NightModeButton />
          </ToolButton>
          <LanguageSwitcher style={styles.item} />
        </View>
        <SectionHeading title={`Category:  ${category.name.en}`} />
        <Section>
          <SectionHeading title={'The phrase:'} />
          <PhraseTextarea value={phrase.name.mg} editable={false} />
        </Section>
        <Section>
          <SectionHeading title={'Pick a solution:'} />
          <List>
            {sortedAnswers.map(phr => {
              return (
                <ListItem
                  categoryName={phr.name.en}
                  actionText={typeOfButton}
                  actionStyle={styleButton}
                  key={phr.id}
                  id={phr.id}
                  onPressButton={() => findCorrectAnswer(phr)}
                />
              );
            })}
          </List>
        </Section>

        {/* <View style={styles.nextButton}>
          {isButtonOprees ? (
            <NextButton
              buttonText={'Next'}
              disabled={false}
              onPressButton={() => findCorrectAnswer(phrase.id)}
            />
          ) : (
            <NextButton buttonText={'Next'} disabled={true} />
          )}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningScreen;
