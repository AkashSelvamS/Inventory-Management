import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Dashboard from '../Screen/Dashboard';
import TabNavigator from './TabNavigator';
import Textinputs from '../Suppliers/Textinputs';
import Details from '../Suppliers/Details';
import SupplyFlatlist from '../Suppliers/SupplyFlatlist';
import DisTextinput from '../Distributions/DisTextinput';
import StockDetails from '../Stocks/StockDetails';
import StockFlatlist from '../Stocks/StockFlatlist';
import StockInput from '../Stocks/StockInput';
import PurchasedHis from '../History/PurchasedHis';
import DistributerHis from '../History/DistributerHis';
import Logout from '../Screen/Logout';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={TabNavigator} />
        <Stack.Screen name="Textinputs" component={Textinputs} />
        <Stack.Screen name="SupplyFlatlist" component={SupplyFlatlist} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DisTextinput" component={DisTextinput} />
        <Stack.Screen name="StockDetails" component={StockDetails} />
        <Stack.Screen name="StockInput" component={StockInput} />
        <Stack.Screen name="StockFlatlist" component={StockFlatlist} />
        <Stack.Screen name="PurchasedHis" component={PurchasedHis} />
        <Stack.Screen name="DistributerHis" component={DistributerHis} />
        <Stack.Screen name="Logout" component={Logout} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

