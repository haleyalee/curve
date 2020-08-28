// ScanDock.js

import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';


export class ScanDock extends Component {
  render() {
    return ( 
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Scan</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>
    )
  }
}

export default ScanDock;