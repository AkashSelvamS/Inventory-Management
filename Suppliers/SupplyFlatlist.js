import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function SupplyFlatlist({ navigation, item, PressHand }) {

  

  return (
    <View style={styles.container}>
    <View style={styles.list1}>
      <Text style={styles.text}>{item.sno}</Text>
    </View>
    <View style={styles.list2}>
    <Text style={styles.text1}>{item.shopname}</Text>
    <Text style={styles.text}>{item.address}</Text>
    </View>
    <View style={styles.list3}>
    <TouchableOpacity onPress={PressHand}>
      <Text style={styles.text5}>View</Text>
    </TouchableOpacity>
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
    