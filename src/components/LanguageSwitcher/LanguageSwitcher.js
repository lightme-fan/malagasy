import React from 'react'
import { StyleSheet, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native'
import Swicther from '../../Svg/Switcher'

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 90,
        borderRadius: 30,
        backgroundColor: '#06B6D4',
        flexDirection: 'row'
    },
    color: {
        color: '#FFFFFF'
    }
})

const LanguageSwitcher = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback style={styles.color} onPress={() => alert('Languages is siwtched into English')}>EN</TouchableWithoutFeedback>
            <View><Swicther /></View>
            <TouchableWithoutFeedback style={styles.color} onPress={() => alert('Languages is siwtched into English')}>MA</TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default LanguageSwitcher