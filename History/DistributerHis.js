import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Flatlist from '../components/Flatlist';


export default function DistributerHis() {

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
        { sno:"13", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"13" },
        { sno:"14", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"14" },
        { sno:"15", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"15" },
        { sno:"16", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"16" },
        { sno:"17", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"17" },
        { sno:"18", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"18" },
        { sno:"19", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"19" },
      ])

  return (
    <View style={styles.container}>
    <View style={styles.Header}>
        <Text style={styles.text}>Distributed History</Text>
    </View>
    <View style={styles.list}>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    marginTop: 60,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
});
