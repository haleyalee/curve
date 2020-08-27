// Profile.js

import React, { Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Profile extends Component {

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      
          {/* Header */}
          <View>
            <Text style={[styles.header_title, {paddingTop: 60}]}>profile</Text>
          </View>

          {/* Profile picture */}
          <View style={{paddingTop: 40}}>
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons name="account-circle" size={100} color="#235789" />
            </View>
            <View>
              <Text style={[styles.muli_b15, {textDecorationLine: 'underline'}]}>Change profile</Text>
              <Text style={[styles.muli_b15, {textDecorationLine: 'underline'}]}>picture</Text>
            </View>
          </View>

          {/* Cards */}
          <View style={{paddingTop: 40}}>
            {/* Personal information */}
            <View style={[styles.cards, styles.shadow,]}>
              <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>personal information</Text>
              <Text style={[styles.muli_blk20, {textAlign: 'left', paddingBottom: 5}]}>
                <Text>Name: </Text>
                <Text>Terryn Jung</Text>
              </Text>
              <Text style={[styles.muli_blk20, {textAlign: 'left', paddingBottom: 5}]}>
                <Text>NetID: </Text>
                <Text>tj223</Text>
              </Text>
              <Text style={[styles.muli_blk20, {textAlign: 'left',}]}>
                <Text>Date of Birth: </Text>
                <Text>June 15, 2000</Text>
              </Text>

            </View>

            {/* Covid testing */}
            <View style={[styles.cards, styles.shadow]}>
              <View style={{paddingBottom: 15}}>
                <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>recent covid test</Text>
                <Text style={[styles.muli_blk20, {textAlign: 'left', paddingBottom: 5}]}>
                  <Text>Last Test Date: </Text>
                  <Text>Date</Text>
                </Text>
                <Text style={[styles.muli_blk20, {textAlign: 'left', paddingBottom: 5}]}>
                  <Text>Test Result: </Text>
                  <Text>Negative</Text>
                </Text>
              </View>
              <View>
                <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>schedule test</Text>
                <View style={styles.button}>
                  <Text style={styles.muli_w20}>Cayuga Medical Portal</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{height: 50}}></View>

        </ScrollView>
          

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </SafeAreaView>
    )
  }
}

export default Profile;