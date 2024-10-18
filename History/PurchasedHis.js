import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Flatlist2 from '../components/Flatlist2';


export default function DistributerHis() {

    const [purchasedata, setPurchasedata] = useState([
        { sno:"1", itemname: "Cello tape 2’’", shopname:"Hanuman Stationaries", qty:"2", date:"June 10 2023", key:"1" },
        { sno:"2", itemname: "Pencil", shopname:"Vijay Stationaries", qty:"34",date:"May 05 2023", key:"2" },
        { sno:"3", itemname: "Eraser boxes", shopname:"MSR Stationaries", qty:"15",date:"April 23 2023", key:"3" },
        { sno:"4", itemname: "Whitner box", shopname:"Raju Stationaries", qty:"21",date:"April 17 2023", key:"4" },
        { sno:"5", itemname: "Knife box", shopname:"Akash Stationaries", qty:"5", date:"March 11 2023", key:"5" },
        { sno:"6", itemname: "pen", shopname:"Pari Stationaries", qty:"5", date:"March 11 2023", key:"6" },
        { sno:"7", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"7" },
        { sno:"8", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"8" },
        { sno:"9", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"9" },
        { sno:"10", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"10" },
        { sno:"11", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"11" },
        { sno:"12", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"12" },
        { sno:"13", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"13" },
        { sno:"14", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"14" },
        { sno:"15", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"15" },
        { sno:"16", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"16" },
        { sno:"17", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"17" },
        { sno:"18", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"18" },
        { sno:"19", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"19" },
        { sno:"20", itemname: "ink bottle", shopname:"Tharun Stationaries", qty:"5", date:"March 11 2023", key:"20" },

      ])

  return (
    <View style={styles.container}>
    <View style={styles.Header}>
        <Text style={styles.text}>Purchased History</Text>
    </View>
    <View style={styles.list}>
        <FlatList
      data={purchasedata}
      renderItem={({ item }) => (
        <Flatlist2 item={item} />
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
