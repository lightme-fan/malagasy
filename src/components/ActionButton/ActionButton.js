import React from 'react'
import { Image, View, SafeAreaView, StyleSheet, Text,TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        flexBasis: 'auto',
        flexWrap: "wrap",
    },
    text: {
      fontSize: 40, 
      fontWeight: "600",
      textAlign: 'right',
    },
    image: {
        width: 16,
        marginLeft: 20,
    }
})

const ActionButton = ({
    textStyle,
    text,
    onPress,
}) => {

    let icon;

    if (text === 'Learn' || text === 'Pick') {
        icon = <Image style={styles.image} source={require('../../icons/Vector-1.png')} />
    }
    if (text === 'Correct') {
        icon = <Image style={styles.image} source={require('../../icons/Vector-2.png')} />
    }
    if (text === 'Wrong') {
        icon = <Image style={styles.image} source={require('../../icons/Vector-3.png')} />
    }
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text, {color: textStyle}}>{text}</Text>
                {icon}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ActionButton