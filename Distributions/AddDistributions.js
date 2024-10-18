import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import Flatlist from '../components/Flatlist';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function AddDistributions({ navigation }) {
  const [data, setData] = useState([
    { sno:"1", itemname: "Cello tape 2’’", pname:"Jayagopal", purpose:"PEC-Office", qty:"2", clgname:"Agri-PEC", date:"June 10 2023", key:"1" },
    { sno:"2", itemname: "Pencil", pname:"Sathish", purpose:"PEC-Office", qty:"34", clgname:"IT-PEC", date:"May 05 2023", key:"2" },
    { sno:"3", itemname: "Eraser boxes", pname:"Kumar", purpose:"PEC-Office", qty:"15", clgname:"CSE-PEC", date:"April 23 2023", key:"3" },
    { sno:"4", itemname: "Whitner box", pname:"Raju", purpose:"PEC-Office", qty:"21", clgname:"ECE-PEC", date:"April 17 2023", key:"4" },
    { sno:"5", itemname: "Knife box", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"5" },
    { sno:"6", itemname: "pen", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"6" },
    { sno:"7", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"7" },
    { sno:"8", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"8" },
    { sno:"9", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"9" },
    { sno:"10", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"10" },
    { sno:"11", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"11" },
    { sno:"12", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"12" },

  ])

  const PressHandler = () => {
    navigation.navigate('DisTextinput');
  }

  return (
    <View style={styles.container}>
      <View style={styles.supply}>
      <Text style={styles.text}>Distributed</Text>
        <TouchableOpacity onPress={PressHandler}>
      <View style={styles.new}>
      <Ionicons name="add-circle-outline" size={24} color="#fff" />
      <Text style={styles.add}>Add</Text>
      </View>
        </TouchableOpacity>
      </View>
      <View style={styles.su}>
      <FlatList
      data={data}
      renderItem={({ item }) => (
        <Flatlist item={item} />
        )}
      />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 60,
    flex: 1,
    height: 950
  },
  supply: {
    marginTop: 60,
    flexDirection: 'row',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  add: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    alignContent: 'center',
    borderRadius: 4,
    borderColor:'#FFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    color:'#FFF',
  },
  su: {
    marginTop: 20,
  },
  new: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginLeft: 160,
    borderWidth: 2,
    paddingRight: 20,
    backgroundColor:'#1C658C',
    borderRadius: 10,
    borderColor:'#FFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    color:'#FFF',
  },
});