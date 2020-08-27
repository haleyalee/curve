import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/Login"
import Home from "./screens/Home";
import History from "./screens/History";
import Profile from "./screens/Profile";


const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
         <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{ headerShown: false}}>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
          />
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={History}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}