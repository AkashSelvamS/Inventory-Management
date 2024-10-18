import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Stockviews({  item  }) {

  

  return (
    <View style={styles.container}>
    <View style={styles.list1}>
      <Text style={styles.text}>{item.sno}</Text>
    </View>
    <View style={styles.list2}>
    <Text style={styles.text1}>{item.date}</Text>
    <Text style={styles.text}>invoice:  {item.invoice}</Text>
    </View>
    <View style={styles.list3}>
      <Text style={styles.text}>openstock:  {item.openstock}</Text>
      <Text style={styles.text}>closingstock:  {item.closingstock}</Text>
      <Text style={styles.text}>issued:   {item.issued}</Text>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
     container: {
        backgroundColor:'#fff',
        flexDirection: 'row',
        borderColor: 'gray',
        padding: 10,
        borderBottomWidth: 1,
        flex: 1,
        
    },
    list1: {
        marginLeft: 1,
    },
    list2: {
        flex: 1,
        paddingHorizontal: 46,
        alignItems: 'flex-start',
    },
    list3: {
        paddingHorizontal: 25,
        alignItems: 'flex-end',
        minWidth: 100,
    },
    text: {
        fontSize: 17,
        fontWeight: '350',
    },
     text1: {
        fontSize: 17,
        fontWeight: '380',
        color:'#1C658C',
    },
    text5: {
      marginTop: 20,
      fontSize: 17,
      fontWeight: '380',
      color:'#1C658C',
    }
});
    