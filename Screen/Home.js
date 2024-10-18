import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Logo from '../assets/fscreen.jpg';

export default function Home({ navigation }) {

const onPressHandler = () => {
    navigation.navigate("Login");
}
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PAAVAI STORE MANAGEMENT SYSTEM</Text>
            <View style={styles.text2}>
            <Text style={styles.text3}>Paavai Store Management System is to manage the stokes and the distribution details effectively.To see the stock details please login to continue</Text>
            <View>
                <Image source={Logo} style={styles.image}/>
            </View>
            <View style={styles.text4}>
                <TouchableOpacity onPress={onPressHandler}>
                    <Text style={styles.text5}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    text: {
        fontSize: 30,
        color: "#0A4E73",
        height: 200,
        width: 291,
        padding: 30,
        marginTop: 10,
        fontWeight: 'bold',
        marginTop: 60,

    },
    text2: {
        height: 230,
        width: 305,
        marginLeft: 30,
    },
    text3: {
        fontSize: 20,
    },
    image: {
        height: 300,
        width: 248,
        marginTop: 40,
        marginLeft: 30,
    },
    text4: {
        backgroundColor: "#0A4E73",
        color: "#fff",
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 90,
        width: 305,
    },
    text5: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 80 
    }
});