import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolButton from '../components/ToolButton/ToolButton';
import AddToolButton from '../Svg/AddToolButton';
import LearntButton from '../Svg/LearntButton';
import NightModeButton from '../Svg/NightModeButton';
import SeenButton from '../Svg/SeenButton';
import DATA from '../data/categories.json';
import List from '../components/List/List';

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
  category: {},
});

function Section({children}) {
  return <View>{children}</View>;
}

function HomeScreen() {
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
          <Section>
            <SectionHeading title={'Select a category:'} />
            <List
              data={DATA.categories}
              actionText={'Learn'}
              actionStyle={'#06B6D4'}
              onPressButton={() =>
                alert('Click to learn all about this category')
              }
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
