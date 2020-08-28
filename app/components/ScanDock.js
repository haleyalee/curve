// ScanDock.js

import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';

export class ScanDock extends Component {

  constructor(qr, scan, id) {
    super();
    this.qr = qr;
    this.scan = scan;
    this.id = id;
  }

  dockChange() {
    if (this.qr) {
      return(
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_b20} onPress={() => this.props.navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Scan</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>     
      )
    } else if (this.scan) {
      return(
        <View style={styles.scan_dock_container}>
          <View style={styles.scan_dock}>
            <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('MyQRScreen')}>My QR</Text>
            <View style={styles.scan_dock_div}></View>
            <Text style={styles.muli_b20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Scan</Text>
            <View style={styles.scan_dock_div}></View>
            <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('AddIDScreen')}>Add ID</Text>
          </View>
        </View>     
        )      
    } else if (this.id) {
      return(
        <View style={styles.scan_dock_container}>
          <View style={styles.scan_dock}>
            <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('MyQRScreen')}>My QR</Text>
            <View style={styles.scan_dock_div}></View>
            <Text style={styles.muli_blk20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Scan</Text>
            <View style={styles.scan_dock_div}></View>
            <Text style={styles.muli_b20} onPress={() => this.props.navigation.navigate('AddIDScreen')}>Add ID</Text>
          </View>
        </View>     
        )
    } else {
      return(
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

  render() {
    return ( 
      this.dockChange()
    )
  }
}

export default ScanDock;