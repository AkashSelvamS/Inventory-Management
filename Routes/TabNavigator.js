import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import AddSuppliers from '../Suppliers/AddSuppliers';
import AddStocks from '../Stocks/AddStocks';
import AddDistributions from '../Distributions/AddDistributions';
import Dashboard from '../Screen/Dashboard';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: ({color,size}) => (
                <Ionicons name="home-outline" size={size} color={color} /> 
                )
            }} />
            <Tab.Screen name="Suppliers" component={AddSuppliers} 
            options={{
                tabBarIcon: ({color,size}) => (
                <Feather name="user-check" size={size} color={color} /> 
                )
            }} />
            <Tab.Screen name="Stocks" component={AddStocks} options={{
                tabBarIcon: ({color,size}) => (
                <AntDesign name="isv" size={size} color={color} /> 
                )
            }} />
            <Tab.Screen name="Distributions" component={AddDistributions} options={{
                tabBarIcon: ({color,size}) => (
                <FontAwesome name="server" size={size} color={color} /> 
                )
            }} />
        </Tab.Navigator>
    );
}