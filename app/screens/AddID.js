// AddID.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import ScanDock from '../components/ScanDock';

export class AddID extends Component {

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
      {/* <View style={styles.container}> */}

          {/* X button */}
          <View style={styles.top_right}>
            <Feather name="x" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
          </View>

        <ScrollView showsVerticalScrollIndicator={false} >

          {/* Scan Dock */}
          <View style={{alignItems: 'center'}}>
            <ScanDock navigation={this.props.navigation}/>
          </View>

          {/* Search bar */}
          <View style={{paddingLeft: 30, paddingRight: 30, paddingBottom: 30,}}>
            <Text style={[styles.carrois_b30, {paddingTop: 200, textAlign: 'center'} ]}>search</Text>
            <View style={[styles.search, styles.shadow, {marginTop: 10}]}>
              <Text>
                <Entypo name="magnifying-glass" size={25} color="#235789"/>
                <Text style={styles.muli_blk15}>   Search NetID</Text>
              </Text>
            </View>
          </View>

          {/* Recents */}
          <View style={{alignItems: 'center'}}>
            <View style={[styles.cards, styles.shadow, ]}>
              <Text style={[styles.carrois_b30]}>recents</Text>
              <View style={{alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
                  <MaterialCommunityIcons name="account-circle" size={30} color="#235789" />
                  <Text style={styles.muli_blk20}>   Group</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
                  <MaterialCommunityIcons name="account-circle" size={30} color="#235789" />
                  <Text style={styles.muli_blk20}>   NetID: Name</Text>
                </View>
              </View>
            </View>

            {/* Contacts */}
            <View style={[styles.cards, styles.shadow]}>
              <Text style={[styles.carrois_b30]}>contacts</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
                <MaterialCommunityIcons name="account-circle" size={30} color="#235789" />
                <Text style={styles.muli_blk20}>   Group</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10}}>
                <MaterialCommunityIcons name="account-circle" size={30} color="#235789" />
                <Text style={styles.muli_blk20}>   NetID: Name</Text>
              </View>
            </View>
          </View>

          <View style={styles.button}>
            <Text onPress={() => this.props.navigation.navigate('ConfirmationSenScreen')}>Confirmation Sen</Text>
          </View>
          <View style={styles.button}>
            <Text onPress={() => this.props.navigation.navigate('ConfirmationRecScreen')}>Confirmation Rec</Text>
          </View>

          <View style={{height: 100}}></View>
          
        </ScrollView>

        

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </SafeAreaView>
      // </View>
    )
  }
}

export default AddID;
