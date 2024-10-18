import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Logout({ navigation }) {
  const home = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Logout page</Text>
      </View>
      <TouchableOpacity onPress={home}>
        <View style={styles.btn}>
          <Text style={styles.text1}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    marginTop: 750,
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 5,
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
  },
  view: {
    marginLeft: 20,
    marginTop: 60,
  },
  text1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
});
