/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import appReducer from './src/redux/reducer';
import HomeScreen from './src/screens/HomeScreen';
import LearningScreen from './src/screens/LearningScreen';
import LearningValidation from './src/screens/LearningValidation';

// Create store
const store = createStore(appReducer);

const styles = StyleSheet.create({
  container: {
    width: 290,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 56,
  },
});

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// Create stack
const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LearningScreen" component={LearningScreen} />
          <Stack.Screen
            name="LearningValidation"
            component={LearningValidation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

{
  /* <SafeAreaView style={backgroundStyle}>
  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>
    <Header /> 
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <HomeScreen />
    <LearningScreen />
    </View>
  </ScrollView>
</SafeAreaView>; */
}

export default App;
