import * as React from 'react';
import {SafeAreaView, Text, ScrollView, View, StyleSheet} from 'react-native';

import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {PhraseTextarea} from '../components/PhraseTextarea/PhraseTextarea';
import {NightModeButton, BackButton} from '../Svg/index';
import {List} from '../components/List/List';
import {useSelector} from 'react-redux';

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
});

function Section({children}) {
  return <View style={styles.section}>{children}</View>;
}

function LearningScreen({route, navigation}) {
  const {id} = route.params;

  const categories = useSelector(({items}) => items.categories);
  const phrases = useSelector(({items}) => items.phrases);

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
          {sortedAnswers.map(phrase => (
            <List
              categoryName={phrase.name.en}
              actionText={'Pick'}
              key={phrase.id}
              actionStyle={'#06B6D4'}
              onPressButton={() => alert('Clicked button')}
            />
          ))}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningScreen;
