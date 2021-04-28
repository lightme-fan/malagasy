import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Pressable} from 'react-native';
import Swicther from '../../Svg/Switcher';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 90,
    borderRadius: 30,
    backgroundColor: '#06B6D4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  color: {
    color: '#FFFFFF',
  },
});

const LanguageSwitcher = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => alert('Languages is siwtched into English')}>
        <Text style={styles.color}>EN</Text>
      </Pressable>
      <View>
        <Swicther />
      </View>
      <Pressable onPress={() => alert('Languages is siwtched into Malagasy')}>
        <Text style={styles.color}>MA</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LanguageSwitcher;
