// CreateInvite.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class CreateInvite extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Header */}
          <View style={{paddingTop: 60}}>
            <Text style={styles.header_title}>create invite</Text>
          </View>

          {/* Date */}
          <View>
            <Text style={styles.carrois_b30}>date</Text>

          </View>

          {/* Time */}
          <View>
            <Text style={styles.carrois_b30}>time</Text>

          </View>

          {/* People */}
          <View>
            <Text style={styles.carrois_b30}>people</Text>

          </View>

        </ScrollView>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

export default CreateInvite;
