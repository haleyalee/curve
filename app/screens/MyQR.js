// Home.js

import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

import moment from 'moment';
import styles from '../Styles';
import Dock from '../components/Dock';
import ScanDock from '../components/ScanDock';

export class MyQR extends Component {

  render() {
    return (

      <View style={styles.container}>

        {/* Scan Dock */}
        <ScanDock navigation={this.props.navigation}/>
        
        {/* X button */}
        <View style={styles.top_right}>
          <Feather name="x" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>

        {/* QR Code */}
        <View style={{paddingTop: 200}}>
          <AntDesign name="qrcode" size={300} color="#235789" />
        </View>
        
        <Text style={[styles.muli_b30]}>
          <Text>Username:</Text>
          <Text> tj223</Text>
        </Text>

      </View>
    )
  }
}

export default MyQR;