// Profile.js

import React, { Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Profile extends Component {

  _scheduleTest = () => {
    Linking.openURL("https://register.cayugahealth.com/patient-registration");
    this.props.onPress && this.props.onPress();
  };

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
                  <Text style={styles.muli_w20} onPress={this._scheduleTest}>Cayuga Medical Portal</Text>
                </View>
              </View>
            </View>

            {/* Groups */}
            <View style={[styles.cards, styles.shadow]}>
              <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>group</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.muli_blk20, {textAlign: 'left'}]}>Sleepy</Text>
                <MaterialCommunityIcons name="trash-can" size={24} color="#235789" />
              </View>
              <Text>
                <Text style={[styles.muli_blk15, {textAlign: 'left'}]}>People: </Text>
                <Text style={[styles.muli_blk15, {textAlign: 'left'}]}>@hal64, @tj223</Text>
              </Text>
            </View>
          </View>

          <View style={{height: 50}}></View>

        </ScrollView>
          

        {/* Dock */}
        <View style={styles.dock_container}>
          <View style={styles.dock}>
            {/* Home */}
            <SimpleLineIcons name="home" size={30} color="#DDDDDD" onPress={() => this.props.navigation.navigate('HomeUrgentScreen')} />
            {/* <AntDesign name="home" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/> */}
            {/* History */}
            <AntDesign name="clockcircleo" size={30} color="#DDDDDD" onPress={() => this.props.navigation.navigate('HistoryScreen')} />
            {/* <FontAwesome5 name="history" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')}/> */}
            {/* Profile */}
            {/* <Octicons name="person" size={30} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/> */}
            <MaterialCommunityIcons name="account-heart-outline" size={35} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

export default Profile;