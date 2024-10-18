import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SupplyFlatlist from './SupplyFlatlist';
import Views from './Views';


export default function Details({ item }) {
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
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.text}>Hanuman Stationaries</Text>
      </View>
      <View style={styles.su}>
      <FlatList
        data={purchasedata}
        renderItem={({ item }) => (
        <Views item={item} />
        )} />
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    marginTop: 60,
  },
  text: {
    fontSize: 21,
    fontWeight:'bold'
  },
  su: {
    marginTop: 20,
  }
});
