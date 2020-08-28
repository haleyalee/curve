// MyQR.js

import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

import moment from 'moment';
import styles from '../Styles';
import ScanDock from '../components/ScanDock';

export class MyQR extends Component {

  render() {
    return (

      <View style={[styles.container, {paddingTop: 0}]}>

        {/* Scan Dock */}
        <View style={{alignItems: 'center', paddingTop: 0, paddingBottom: 300}}>
          <ScanDock num={'myqrscreen'} navigation={this.props.navigation}/>
        </View>
        
        {/* X button */}
        <View style={styles.top_right}>
          <Feather name="x" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>

        {/* QR Code */}
        <View >
          <AntDesign name="qrcode" size={300} color="#235789" style={{zIndex: -1}}/>
          {/* <Text>QR CODE HERE</Text> */}
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