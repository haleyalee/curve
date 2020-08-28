// ScanDock.js

import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';


function ScanDock({ navigation, num }) {
  if (num=='myqrscreen'){
    return(
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_b20} onPress={() => navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('ScanScreen')}>Scan</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>
    )  
  } else if (num=='scanscreen'){
    return(
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_w20} onPress={() => navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div_w}></View>
          <Text style={styles.muli_b20} onPress={() => navigation.navigate('ScanScreen')}>Scan</Text>
          <View style={styles.scan_dock_div_w}></View>
          <Text style={styles.muli_w20} onPress={() => navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>
    )  
  } else if (num=='addidscreen'){
    return(
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('ScanScreen')}>Scan</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_b20} onPress={() => navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>
    )  
  } else {
    return(
      <View style={styles.scan_dock_container}>
        <View style={styles.scan_dock}>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('MyQRScreen')}>My QR</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('HomeScreen')}>Scan</Text>
          <View style={styles.scan_dock_div}></View>
          <Text style={styles.muli_blk20} onPress={() => navigation.navigate('AddIDScreen')}>Add ID</Text>
        </View>
      </View>
    )  
  }  
}

export default ScanDock;