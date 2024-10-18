import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Stockview from './Stockview';


export default function StockDetails({ item }) {
    const [purchasedata, setPurchasedata] = useState([
        { sno:"1", itemname: "Cello tape 2’’", shopname:"Hanuman Stationaries", date:"June 10 2023", invoice:"5", openstock:"10", closingstock:"20", issued:"3", key:"1" },
        { sno:"2", itemname: "Pencil", shopname:"Vijay Stationaries", date:"May 05 2023", invoice:"12", openstock:"25", closingstock:"30", issued:"7", key:"2" },
        { sno:"3", itemname: "Eraser boxes", shopname:"MSR Stationaries", date:"April 23 2023", invoice:"0", openstock:"40", closingstock:"24", issued:"8", key:"3" },
        { sno:"4", itemname: "Whitner box", shopname:"Raju Stationaries", date:"April 17 2023", invoice:"8", openstock:"28", closingstock:"40", issued:"12", key:"4" },
        { sno:"5", itemname: "Knife box", shopname:"Akash Stationaries", date:"March 11 2023", invoice:"23", openstock:"33", closingstock:"27", issued:"31", key:"5" },
        { sno:"6", itemname: "pen", shopname:"Pari Stationaries", date:"March 11 2023", invoice:"6", openstock:"17", closingstock:"38", issued:"24", key:"6" },
        { sno:"7", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"20", openstock:"25", closingstock:"52", issued:"13", key:"7" },
        { sno:"8", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"0", openstock:"36", closingstock:"46", issued:"34", key:"8" },
        { sno:"9", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"6", openstock:"53", closingstock:"60", issued:"28", key:"9" },
        { sno:"10", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"0", openstock:"56", closingstock:"26", issued:"19", key:"10" },
        { sno:"11", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"46", openstock:"23", closingstock:"17", issued:"43", key:"11" },
        { sno:"12", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"0", openstock:"10", closingstock:"20", issued:"22", key:"12" },
        { sno:"13", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"0", openstock:"16", closingstock:"21", issued:"31", key:"13" },
        { sno:"14", itemname: "ink bottle", shopname:"Tharun Stationaries", date:"March 11 2023", invoice:"35", openstock:"42", closingstock:"15", issued:"43", key:"14" },      
      ])
    
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.text}>Stock History</Text>
      </View>
    <View style={styles.item}>
       <Text style={styles.text1}>{purchasedata[0].itemname}</Text>
       <Text style={styles.text2}>{purchasedata[0].shopname}</Text>
    </View>
      <View style={styles.su}>
      <FlatList
        data={purchasedata}
        renderItem={({ item }) => (
        <Stockview item={item} />
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
    marginLeft: 10,
  },
  text: {
    fontSize: 21,
    fontWeight:'bold'
  },
  su: {
    marginTop: 20,
  },
  text1: {
    fontSize: 21,
    fontWeight:'bold',
    color:'#1C658C',
    marginLeft: 10,
  },
  text2: {
    fontSize: 15,
    marginLeft: 10
  }
});
