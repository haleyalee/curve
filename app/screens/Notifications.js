// Notifications.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Notifications extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

export default Notifications;
