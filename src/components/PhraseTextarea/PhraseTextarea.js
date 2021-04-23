import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

// Stylesheet
const styles = StyleSheet.create({
  input: {
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(17, 24, 39, 1)',
    margin: 23,
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
})

// PhraseTextarea component
export default function PhraseTextarea({ value, onChange, editable }) {

  return (
    <SafeAreaView>
      <TextInput 
        placeholder="Enter here"
        style={styles.input}
        value={value}
        onChangeText={onChange}
        editable={editable}
        multiline = {true}
        numberOfLines = {4}
      />
    </SafeAreaView>
  ); 
}