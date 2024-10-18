import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Textinputs({ placeholder,secureTextEntry }) {

 const [secureText,setSecureText] = useState('')

  const ChangeHandler = (value) => {
    setSecureText(value);
  };
  return (
    <View style={styles.input}>
    <TextInput 
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    onChangeText={ChangeHandler}
    />
    <Ionicons name="home-outline" size={24} color="black" style={styles.icon}/>
</View>
)
}

const styles = StyleSheet.create({
input: {
borderWidth: 2,
borderColor:'gray',
borderRadius: 10,
paddingLeft: 10,
paddingVertical: 12,
marginBottom: 10,
flexDirection: 'row',
justifyContent:'space-between',
alignItems: 'center',
},
})