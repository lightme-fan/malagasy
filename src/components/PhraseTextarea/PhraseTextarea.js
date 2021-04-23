import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

// Stylesheet
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 0,
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  input: {
    color: '#111827',
  },
  textarea: {
    color: '#111827',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
  },
})

// PhraseTextarea component
export default function PhraseTextarea({ value,   onChange = () => null, editable }) {

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        placeholder="Enter here"
        style={editable ? styles.input : styles.textarea}
        value={value}
        onChangeText={onChange}
        editable={editable}
        multiline = {true}
        numberOfLines = {4}
      />
    </SafeAreaView>
  ); 
}