import React, {useState} from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'

const MyComponent = () => {
    const [ text, setText ] = useState('')
    return (
        <SafeAreaView style={{paddingTop: 10}}>
            <TextInput 
                style={{backgroundColor: 'pink', padding: 20} }
                placeholder="Write here"
                onChangeText={(text) => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10}}>{text}</Text>
        </SafeAreaView>
    )
}
export default MyComponent