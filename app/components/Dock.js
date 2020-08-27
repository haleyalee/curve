// Dock.js

import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';


export class Dock extends Component {
  render() {
    return ( 
      <View style={styles.dock_container}>
        <View style={styles.dock}>
          {/* Home */}
          <SimpleLineIcons name="home" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')} />
          {/* <AntDesign name="home" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/> */}
          {/* History */}
          <AntDesign name="clockcircleo" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')} />
          {/* <FontAwesome5 name="history" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')}/> */}
          {/* Profile */}
          {/* <Octicons name="person" size={30} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/> */}
          <MaterialCommunityIcons name="account-heart-outline" size={35} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
        </View>
      </View>
    )
  }
}

export default Dock;