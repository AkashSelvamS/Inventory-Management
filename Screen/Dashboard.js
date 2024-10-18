import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Top from '../Top/Top';

import Customswitch from '../components/Customswitch';
import Flatlist from '../components/Flatlist';
import Flatlist2 from '../components/Flatlist2';

import { EvilIcons } from '@expo/vector-icons'; 



export default function Dashboard({ navigation }) {

  const [data, setData] = useState([
    { sno:"1", itemname: "Cello tape 2’’", pname:"Jayagopal", purpose:"PEC-Office", qty:"2", clgname:"Agri-PEC", date:"June 10 2023", key:"1" },
    { sno:"2", itemname: "Pencil", pname:"Sathish", purpose:"PEC-Office", qty:"34", clgname:"IT-PEC", date:"May 05 2023", key:"2" },
    { sno:"3", itemname: "Eraser boxes", pname:"Kumar", purpose:"PEC-Office", qty:"15", clgname:"CSE-PEC", date:"April 23 2023", key:"3" },
    { sno:"4", itemname: "Whitner box", pname:"Raju", purpose:"PEC-Office", qty:"21", clgname:"ECE-PEC", date:"April 17 2023", key:"4" },
    { sno:"5", itemname: "Knife box", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"5" },
    { sno:"6", itemname: "pen", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"6" },
    { sno:"7", itemname: "ink bottle", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"7" },
  ])

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
  ])

const [item,setItem] = useState([
    {name:"Purchased", qty:"25", year:"2022-2023", key:"1"},
    {name:"Distributed", qty:"25", year:"2022-2023", key:"2"},

])

const [changesrn, setChangesrn] = useState(1);

const onSelectSwitch = (value) => {
  setChangesrn(value);
}

const purchase = () => {
  navigation.navigate('PurchasedHis')
}

const Distribute = () => {
  navigation.navigate('DistributerHis')
}
const Logout = () => {
  navigation.navigate('Logout')
}

  return (
    <View style={styles.con}>
      <View style={styles.pres}>
      <Text style={styles.te}>Dashboard</Text>
      <TouchableOpacity onPress={Logout}>
      <View style={styles.icon}>
      <EvilIcons name="user" size={30} color="black" />
      </View>
      </TouchableOpacity>
        </View>
    <View style={styles.container}>
      <TouchableOpacity onPress={purchase}>  
      <View style={styles.press}>
        <Text style={styles.text}>{item[0].name}</Text>
        <Text style={styles.text1}>{item[0].qty}</Text>
        <Text style={styles.text}>{item[0].year}</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Distribute}>
      <View style={styles.press}>
        <Text style={styles.text}>{item[1].name}</Text>
        <Text style={styles.text1}>{item[1].qty}</Text>
        <Text style={styles.text}>{item[1].year}</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View style={styles.press1}>
      <Text style={styles.text2}>Recent Products</Text>
      <View style={styles.page}>
        <Customswitch 
          selectionMode={1}
          option1="Distributed"
          option2="Purchased"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      </View>
      <View style={styles.enter}>
      {changesrn == 1 && <FlatList
      data={data}
      renderItem={({ item }) => (
        <Flatlist item={item} />
        )}
      />}
      {changesrn == 2 && <FlatList
      data={purchasedata}
      renderItem={({ item }) => (
        <Flatlist2 item={item} />
        )}
     />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  pres: {
    marginTop: 60,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  press: {
    paddingLeft: 10,
    backgroundColor: '#398AB9',
    height: 92,
    width: 170,
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 30,
    borderColor: '#bbb'
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },
  press1: {
    marginTop: 40,
    marginLeft: 10,
  },
  text2: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  te: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
   },
  page: {
    marginVertical: 20,
  },
  enter: {
    marginTop: 30,
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginLeft: 240
  }
});
