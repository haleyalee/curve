// History.js

import React, { useState, Component } from 'react';
import { View, Text, Button } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class History extends Component {

  render() {

    return (
      <View style={styles.container}>

        {/* Header */}
        <View style={{paddingBottom: 40}}>
          <Text style={styles.header_title}>
            history
          </Text>
          <Text style={styles.header_date}>
            {moment().subtract(14,'d').format('MMMM DD').toLowerCase()} - {moment().format('MMMM DD').toLowerCase()}
          </Text>
        </View>

        {/* Body */}
        <View style={[styles.cards, styles.shadow]}>
            <Text style={styles.carrois_b30}>tuesday</Text>
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default History;