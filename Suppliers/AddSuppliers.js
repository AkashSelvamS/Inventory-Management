import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import SupplyFlatlist from './SupplyFlatlist';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddSuppliers({ navigation }) {

  const [purchasedata, setPurchasedata] = useState([
    { sno:"1", itemname: "Cello tape 2’’", shopname:"Hanuman Stationaries", qty:"2", date:"June 10 2023", address:"2nd street,Pachal,Namakkal", key:"1" },
    { sno:"2", itemname: "Pencil", shopname:"Vijay Stationaries", qty:"34",date:"May 05 2023", address:"2nd street,Pachal,Namakkal", key:"2" },
    { sno:"3", itemname: "Eraser boxes", shopname:"MSR Stationaries", qty:"15",date:"April 23 2023", address:"2nd street,Pachal,Namakkal", key:"3" },
    { sno:"4", itemname: "Whitner box", shopname:"Raju Stationaries", qty:"21",date:"April 17 2023", address:"2nd street,Pachal,Namakkal", key:"4" },
    { sno:"5", itemname: "Knife box", shopname:"Akash Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"5" },
    { sno:"6", itemname: "pen", shopname:"Pari Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"6" },
    { sno:"7", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"7" },
    { sno:"8", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"8" },
    { sno:"9", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"9" },
    { sno:"10", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"10" },
    { sno:"11", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"11" },
    { sno:"12", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"12" },
    { sno:"13", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"13" },
    { sno:"14", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", address:"2nd street,Pachal,Namakkal", key:"14" },
    
  ])

  const PressHandler = () => {
    navigation.navigate('Textinputs');
  }

  const PressHand = () => {
    navigation.navigate('Details')
  };

  return (
    <View style={styles.container}>
      <View style={styles.supply}>
      <Text style={styles.text}>Suppliers</Text>
        <TouchableOpacity onPress={PressHandler}>
      <View style={styles.new}>
      <Ionicons name="add-circle-outline" size={24} color="#fff" />
      <Text style={styles.add}>Add</Text>
      </View>
        </TouchableOpacity>
      </View>
      <View style={styles.su}>
      <FlatList
      data={purchasedata}
      renderItem={({ item }) => (
        <SupplyFlatlist PressHand={PressHand} item={item} />
        )} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 60,
    flex: 1,
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