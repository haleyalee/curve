// History.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class History extends Component {

  dateRange=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
   }

  render() {
    return (

      <View style={styles.container}>

        {/* Header */}
        <View>
          <Text style={styles.header_title}>
            history
          </Text>
          <Text style={styles.header_date}>
            <Text>
              first date
            </Text>
            <Text>
              -
            </Text>
            <Text>
              second date
            </Text>
          </Text>
        </View>

        {/* Body */}
        <View>

        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default History;