// Home.js

import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import moment from 'moment';
import styles from '../Styles';
import Dock from '../components/Dock';

export class HomeEvent extends Component {

  render() {
    return (

      <SafeAreaView style={styles.container}>

        {/* notifications bell */}
        <View style={styles.top_right} >
          <MaterialIcons name="notifications" size={30} color="#235789"  onPress={() => this.props.navigation.navigate('NotificationsScreen')} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* header */}
          <View style={{paddingTop: 60}}>
            <Text style={styles.header_title}>curve</Text>
            <Text style={styles.header_date}>{moment().format('MMMM DD, YYYY').toLowerCase()}</Text>
          </View>

          {/* buttons */}
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 40,}}>
              {/* Scan me */}
              <View style={[styles.button, styles.shadow]}>
                <Text style={styles.muli_w20} onPress={() => this.props.navigation.navigate('MyQRScreen')}>Scan Me</Text>
              </View>
              {/* Create invite */}
              <View style={[styles.button, styles.shadow]}  >
                <Text style={styles.muli_w20} onPress={() => this.props.navigation.navigate('CreateInviteScreen')}>Create Invite</Text>
              </View>
            </View>
          </View>


          {/* Urgent alerts */}
          <View style={{paddingTop: 40, paddingLeft: 30, paddingRight: 30}}>

            {/* Red */}
            {/* <View style={[styles.urgent_alert, styles.shadow, {backgroundColor: '#E62323', }]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20}}>
                <Text style={styles.muli_w20}>@abc123</Text>
                <Text style={styles.muli_w20}>August 24, 2020</Text>
              </View> 
            </View> */}

            {/* Yellow */}
            {/* <View style={[styles.urgent_alert, styles.shadow, {backgroundColor: '#FFCF66'}]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20}}>
                  <Text style={styles.muli_w20}>@def456</Text>
                  <Text style={styles.muli_w20}>August 27, 2020</Text>
                </View>    
              </View> */}
           

            {/* No urgent alerts */}
            <View style={[styles.urgent_alert]}>
              <Text style={styles.muli_b20}>no urgent alerts</Text>
            </View>
          </View>

          {/* Cards */}
          <View style={{paddingLeft: 30, paddingRight: 30}}>
            {/* Upcoming interactions */}
            <View style={[styles.cards, styles.shadow]}>
              <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>upcoming</Text>

              {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.muli_blk20}>no upcoming interactions</Text>
                <Text style={styles.muli_blk20}></Text>
              </View> */}

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.muli_blk20}>8:00 pm</Text>
                <Text style={styles.muli_blk20}>@hal64</Text>
              </View>
              
            </View>
            {/* Past */}
            <View style={[styles.cards, styles.shadow]}>
              <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>past</Text>
              {/* Column */}
              <View style={{flexDirection: 'column'}}>
                {/* Row */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                  <Text style={styles.muli_blk20}>@abc123</Text>
                  <Text style={styles.muli_blk20}>@def456</Text>
                </View>
                {/* Row */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                  <Text style={styles.muli_blk20}>@ghi789</Text>
                  <Text style={styles.muli_blk20}></Text>
                </View>
                
              </View>
            </View>
          </View>

          <View style={{height: 50}}></View>


        </ScrollView>

        {/* Dock */}
        <Dock num={'homescreen'} navigation={this.props.navigation}/>

      </SafeAreaView>
    )
  }
}

export default HomeEvent;