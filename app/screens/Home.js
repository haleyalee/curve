// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Home extends Component {

  render() {
    return (

      <View style={styles.container}>
        {/* notifications bell */}
        <View style={styles.top_right}>
          <MaterialIcons name="notifications" size={30} color="#235789" />
        </View>

        {/* header */}
        <View>
          <Text style={styles.header_title}>curve</Text>
          <Text style={styles.header_date}>august 26, 2020</Text>
        </View>

        {/* buttons */}
        <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 40,}}>
          {/* Scan me */}
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.muli_w20}>Scan Me</Text>
          </View>
          {/* Create invite */}
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.muli_w20}>Create Invite</Text>
          </View>
        </View>

        {/* Urgent alerts */}
        <View style={{flexDirection: 'column', justifyContent: 'space-between', paddingTop: 40, paddingLeft: 30, paddingRight: 30}}>

          {/* Red */}
          <View style={[styles.urgent_alert, styles.shadow, {backgroundColor: '#E62323', }]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20}}>
              <Text style={styles.muli_w20}>@netID</Text>
              <Text style={styles.muli_w20}>Date</Text>
            </View> 
          </View>

          {/* Yellow */}
          <View style={[styles.urgent_alert, styles.shadow, {backgroundColor: '#FFCF66'}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20}}>
                <Text style={styles.muli_w20}>@netID</Text>
                <Text style={styles.muli_w20}>Date</Text>
              </View>    
            </View>
        </View>

        {/* Cards */}
        <View style={{flexDirection: 'column', justifyContent: 'flex-start',}}>
          {/* Upcoming interactions */}
          <View style={[styles.cards, styles.shadow]}>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>upcoming</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.muli_b20}>time</Text>
              <Text style={styles.muli_b20}>@netID</Text>
            </View>
          </View>
          {/* Past */}
          <View style={[styles.cards, styles.shadow]}>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>past</Text>
            {/* Column */}
            <View style={{flexDirection: 'column'}}>
              {/* Row */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                <Text style={styles.muli_b20}>@netID</Text>
                <Text style={styles.muli_b20}>@netID</Text>
              </View>
              {/* Row */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                <Text style={styles.muli_b20}>@netID</Text>
                <Text style={styles.muli_b20}>@netID</Text>
              </View>
              {/* Row */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                <Text style={styles.muli_b20}>@netID</Text>
                <Text style={styles.muli_b20}>@netID</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default Home;