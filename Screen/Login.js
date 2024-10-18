import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Logo from '../assets/secondscreen.jpg';
import Feather from '@expo/vector-icons/Feather';

export default function Login({ navigation }) {

const onPressHand = () => {
    navigation.navigate('Dashboard');
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.Textinput}>
        <View>
      <TextInput 
          placeholder='Username'
          style={styles.input}
          
        />
        </View>

        <View style={styles.password}>
          <TextInput 
            placeholder='Password'
            style={styles.inpu}
           secureTextEntry
           />
          <TouchableOpacity>            
            <Feather name="eye-off" size={24} color="black" style={styles.icon}/>
          </TouchableOpacity>     
         </View>
        <View style={styles.btn}>
            <TouchableOpacity onPress={onPressHand}>
                <Text style={styles.text2}>Sign In</Text>
            </TouchableOpacity>
        <View>
            <Image source={Logo} style={styles.image}/>
        
        </View>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 140,
    color: '#1C658C',
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,        
  },
  Textinput: {
     paddingHorizontal: 6,
     paddingVertical: 4,
     marginTop:60,
     paddingLeft:50,
     paddingRight: 50,
  },
  password: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor:'gray',
    paddingLeft: 10,
    paddingVertical: 1,
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#1C658C',
    height: 55,
    marginTop: 32
  },
  text2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12
  },
  image: {
    height: '230%',
    width: '100%',
    marginTop: 30
  },
  input: {
    borderWidth: 2,
    borderColor:'gray',
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 12,
    marginBottom: 10,
  },
  inpu: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 50,
    width: 275,
 },
});
