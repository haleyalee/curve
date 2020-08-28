// ConfirmationRec.js

import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import moment from 'moment';
import styles from '../Styles';
import Dock from '../components/Dock';
import ScanDock from '../components/ScanDock';

export class ConfirmationRec extends Component {

  render() {
    return (

      <View style={[styles.container, {opacity: 0.5}]}>

        {/* Scan Dock */}
        <ScanDock navigation={this.props.navigation}/>
          
        {/* X button */}
        <View style={styles.top_right}>
          <Feather name="x" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>

        {/* Confirm Contact */}
        <View style={[styles.confirm_bubble, styles.shadow]}>
          <Text style={styles.carrois_b30}>confirm contact</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 30}}>
            <MaterialCommunityIcons name="account-circle" size={100} color="#235789" />
            <View style={{flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 10}}>
              <Text style={styles.muli_b30}>hal64</Text>
              <Text style={styles.muli_b30}>Haley Lee</Text>
            </View>
          </View>

           {/* Buttons */}
          <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 30}}>
            {/* Accept */}
            <View style={[styles.button, styles.shadow]}>
              <Text style={styles.muli_w20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Accept</Text>
            </View>
            {/* Deny */}
            <View style={[styles.button, styles.shadow]}  >
              <Text style={styles.muli_w20} onPress={() => this.props.navigation.navigate('HomeScreen')}>Deny</Text>
            </View>
          </View>
        </View>

          
      </View>
    )
  }
}

export default ConfirmationRec;