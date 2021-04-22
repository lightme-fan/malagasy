import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

// Stylesheet
const styles = StyleSheet.create({
  input: {
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',   
    margin: 23,
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
})

// PhraseTextarea component
export default function PhraseTextarea({placeholder, value, onChange, ...restProps}) {

  return (
    <SafeAreaView>
      <TextInput 
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        multiline = {true}
        numberOfLines = {4}
        {...restProps}
      />
    </SafeAreaView>
  ); 
}