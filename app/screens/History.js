// History.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class History extends Component {

  render() {
    return (

      <View style={styles.container}>

        {/* Header */}
        <View>
          <Text>
            history
          </Text>
          <Text>
            date
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