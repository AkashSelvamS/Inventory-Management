import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Logo2 from '../assets/Distributer.png';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Textinputs({ navigation }) {

  const PresHandler = () => {
    navigation.goBack('AddDistributions');
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.Add}>
    <Text style={styles.text}>Add new Distributions</Text>
    </View>
    <View>
        <Image source={Logo2} style={styles.img} />
    </View>
    <View style={styles.Tinput}>
        <TextInput 
        style={styles.input}
        placeholder="Poduct Name"
        />
        <TextInput 
        style={styles.input}
        placeholder="Number of Products"
        />
        <TextInput 
        style={styles.input}
        placeholder="College Name"
        /> 
        <TextInput 
        style={styles.input}
        placeholder="Department"
        />
        <TextInput 
        style={styles.input}
        placeholder="Buyer Name"
        />
        <TextInput 
        style={styles.input}
        placeholder="Purpose"
        />
         <View style={styles.icon}>
        <TextInput 
        style={styles.inpu}
        placeholder="Date"
        />
        <View style={styles.v}>
        <TouchableOpacity>
        <AntDesign name="calendar" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
    <TouchableOpacity onPress={PresHandler}>
    <View style={styles.btn}>
    <Ionicons name="add-circle-outline" size={24} color="#fff" />
      <Text style={styles.text1}>Add Supplier</Text>
    </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Add: {
    marginTop: 60,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10
  },
  img : {
    width: 269,
    height: 147,
    resizeMode: 'contain',
    marginTop: 20,
    marginLeft: 70,
  },
  Tinput: {
    padding: 40,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    marginTop:25,
    borderColor:'gray',
  },
  icon: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:'gray',
    padding: 10,
    borderRadius: 5,
    marginTop:30,
    paddingLeft: 10
  },
  inpu: {
    borderRadius: 5,
    fontSize: 15,
    width: 260,
  },
  v: {
    marginLeft: 40
  },
  btn: {
    marginTop: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'gray',
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C658C',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
