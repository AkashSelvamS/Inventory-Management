// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList } from 'react-native';

// import Flatlist from '../components/Flatlist';

// export default function Distributed() {

//   const [data, setData] = useState([
//     { sno:"1", itemname: "Cello tape 2’’", pname:"Jayagopal", purpose:"PEC-Office", qty:"2", clgname:"Agri-PEC", date:"June 10 2023", key:"1" },
//     { sno:"2", itemname: "Pencil", pname:"Sathish", purpose:"PEC-Office", qty:"34", clgname:"IT-PEC", date:"May 05 2023", key:"2" },
//     { sno:"3", itemname: "Eraser", pname:"Kumar", purpose:"PEC-Office", qty:"15", clgname:"CSE-PEC", date:"April 23 2023", key:"3" },
//     { sno:"4", itemname: "Whitner", pname:"Raju", purpose:"PEC-Office", qty:"21", clgname:"ECE-PEC", date:"April 17 2023", key:"4" },
//     { sno:"5", itemname: "Knife", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"5" },
//     { sno:"5", itemname: "Knife", pname:"Akash", purpose:"PEC-Office", qty:"5", clgname:"Mech-PEC", date:"March 11 2023", key:"6" },
//   ])
//   return (
//     <View style={styles.container}>
//       <FlatList
//       data={data}
//       renderItem={({ item }) => (
//         <Flatlist item={item} />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'#fff',
//     flexDirection: 'row',
//     borderColor: 'gray',
//     padding: 10,
//     borderBottomWidth: 1,
// },
// list1: {
//     marginLeft: 1,
// },
// list2: {
//     paddingHorizontal: 55,
//     alignItems: 'flex-start',
// },
// list3: {
//     paddingHorizontal: 25,
//     alignItems: 'flex-end',
// },
// text: {
//     fontSize: 17,
//     fontWeight: '350',
// },
//  text1: {
//     fontSize: 17,
//     fontWeight: '380',
//     color:'#1C658C'
// },
// });
