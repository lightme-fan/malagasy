import React from 'react';
import {SafeAreaView, Text, ScrollView, View, StyleSheet} from 'react-native';

import {LanguageSwitcher} from '../components/LanguageSwitcher/LanguageSwitcher';
import {SectionHeading} from '../components/SectionHeading/SectionHeading';
import {ToolButton} from '../components/ToolButton/ToolButton';
import {PhraseTextarea} from '../components/PhraseTextarea/PhraseTextarea';
import {NightModeButton, BackButton} from '../Svg/index';
import {List} from '../components/List/List';

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

function LearningScreen(params) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerMenu}>
          <ToolButton onPress={() => alert('Clicked button')}>
            <BackButton />
          </ToolButton>
          <ToolButton onPress={() => alert('Clicked button')}>
            <NightModeButton />
          </ToolButton>
          <LanguageSwitcher style={styles.item} />
        </View>

        <SectionHeading title={`Category: `} />

        <Section>
          <SectionHeading title={'The phrase:'} />
          <PhraseTextarea value={"Roa ambin'ny folo"} editable={false} />
        </Section>

        <Section>
          <SectionHeading title={'Pick a solution:'} />
          <List
            categoryName={'Twelve'}
            actionText={'Pick'}
            actionStyle={'#06B6D4'}
            onPressButton={() => alert('Clicked button')}
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LearningScreen;
