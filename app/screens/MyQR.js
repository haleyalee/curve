// MyQR.js

import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import moment from 'moment';
import styles from '../Styles';
import Dock from '../components/Dock';
import ScanDock from '../components/ScanDock';

export class MyQR extends Component {

  render() {
    return (

      <View style={styles.container}>
        <ScanDock qr={true} scan={false} id={false} navigation={this.props.navigation}/>
          {/* notifications bell */}
          <View style={styles.top_right}>
            <Feather name="x" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
          </View>
      </View>
    )
  }
}

export default MyQR;