import * as React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {PhraseTextarea} from '../components/PhraseTextarea/PhraseTextarea';
import {NightModeButton, BackButton} from '../Svg/index';
import {List} from '../components/List/List';
import {ListItem} from '../components/ListItem/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import {setAnswers} from '../redux/reducer';
import {styles} from '../Styles';

// Section
export const Section = ({children}) => {
  return <View style={styles.section}>{children}</View>;
};

//
export const ToolMenuButtons = ({backButtonOnPress}) => {
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

//
export const TextArea = ({phrase}) => {
  return (
    <Section>
      <SectionHeading title={'The phrase:'} />
      <PhraseTextarea value={phrase} editable={false} />
    </Section>
  );
};

//
export const DisplayAnswers = ({
  listOfAnswers,
  buttonOnPress,
  buttonIcon,
  buttonText,
}) => {
  return (
    <List>
      {listOfAnswers.map(phr => {
        return (
          <ListItem
            categoryName={phr.name.en}
            key={phr.id}
            actionText={buttonText}
            actionStyle={buttonIcon}
            onPressButton={buttonOnPress}
          />
        );
      })}
    </List>
  );
};

//
function LearningScreen({route, navigation}) {
  const {id} = route.params;

  const dispatch = useDispatch();
  const initialValue = useSelector(({items}) => items);
  const {categories, phrases} = initialValue;

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
  const wrongAnswers = [option1, option2, option3];

  // set answers
  const listAnswers = [phrase, option1, option2, option3];
  // Sorting the answers
  let sortedAnswers = listAnswers.sort(() => {
    return 0.5 - Math.random();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToolMenuButtons
          backButtonOnPress={() => navigation.navigate('Home')}
        />
        <SectionHeading title={`Category:  ${category.name.en}`} />
        <TextArea phrase={phrase.name.mg} />
        <Section>
          <SectionHeading title={'Pick a solution:'} />
          <DisplayAnswers
            listOfAnswers={sortedAnswers}
            buttonText={'Pick'}
            buttonIcon={'#06B6D4'}
            buttonOnPress={() =>
              navigation.navigate('LearningValidation', {
                correctPhrase: phrase,
                wrongAnswers: wrongAnswers,
                wrongId: !phrase,
                listOfAnswers: sortedAnswers,
              })
            }
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningScreen;
