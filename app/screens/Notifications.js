// Notifications.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import ContactReq from '../components/ContactReq';
import Invite from '../components/Invite';
import UpTest from '../components/UpTest';

export class Notifications extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: 40, paddingTop: 60,}}>
            <Text style={styles.header_title}>
              notifications
            </Text>
          </View>
          <ContactReq/>
          <Invite/>
          <UpTest/>
        </ScrollView>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </SafeAreaView>
    )
  }
}

export default Notifications;
