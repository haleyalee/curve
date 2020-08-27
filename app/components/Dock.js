// Dock.js

import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

import styles from '../Styles';


export class Dock extends Component {
  render() {
    return ( 
      <View style={styles.dock_container}>
        <View style={styles.dock}>
          {/* Home */}
          <AntDesign name="home" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
          {/* History */}
          <MaterialCommunityIcons name="history" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')} />
          {/* Profile */}
          <Octicons name="person" size={30} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
        </View>
      </View>
    )
  }
}

export default Dock;