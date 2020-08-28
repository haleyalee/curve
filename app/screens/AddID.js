// AddID.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class AddID extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          
        </ScrollView>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

export default AddID;
