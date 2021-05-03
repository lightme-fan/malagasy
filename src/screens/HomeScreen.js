import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {List} from '../components/List/List';
import {ListItem} from '../components/ListItem/ListItem';

import {AddToolButton, SeenButton, LearntButton, NightModeButton} from '../Svg';

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 23,
  },
  headerMenu: {
    width: 290,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 56,
  },
  section: {
    marginBottom: 15,
  },
});

// Section to differenciate the lists such as list categories, learnt phrases
function Section({children}) {
  return <View style={styles.section}>{children}</View>;
}

function HomeScreen({navigation}) {
  // get state from initialState in reducer
  const categories = useSelector(state => state.items.categories);
  console.log(categories);
  const seenPhrases = useSelector(state => state.items.seenPhrases);
  const learntPhrases = useSelector(state => state.items.learntPhrases);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerMenu}>
          <ToolButton onPress={() => alert('Clicked button')}>
            <AddToolButton />
          </ToolButton>
          <LanguageSwitcher style={styles.item} />
          <ToolButton onPress={() => alert('Clicked button')}>
            <SeenButton />
          </ToolButton>
          <ToolButton onPress={() => alert('Clicked button')}>
            <LearntButton />
          </ToolButton>
          <ToolButton onPress={() => alert('Clicked button')}>
            <NightModeButton />
          </ToolButton>
        </View>

        <View>
          {/* Categories */}
          <Section>
            <SectionHeading title={'Select a category:'} />
            <View>
              {/* Displaying all categories */}
              <List>
                {categories.map(item => {
                  const category = item.name.en;
                  console.log(category);
                  const phraseId =
                    item.phrasesIds[
                      Math.floor(Math.random() * item.phrasesIds.length)
                    ];

                  return (
                    <ListItem
                      categoryName={category}
                      key={`${item.id}${category}`}
                      categoryId={item.id}
                      actionText={'Learn'}
                      actionStyle={'#06B6D4'}
                      onPressButton={() =>
                        navigation.navigate('LearningScreen', {
                          phraseId: phraseId,
                          id: item.id,
                        })
                      }
                    />
                  );
                })}
              </List>
            </View>
          </Section>

          {/* Seen phrases */}
          <Section>
            {!seenPhrases && <SectionHeading title={'Seen phrases:'} />}
          </Section>

          {/* Learnt phrases */}
          <Section>
            {!learntPhrases && <SectionHeading title={'Learnt phrases:'} />}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
