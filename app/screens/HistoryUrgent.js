// History.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, Alert } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import HistLog from '../components/HistLog';
// import { db } from '../config';

// let addPerson = person => {
//   db.ref('/persons').push({
//     netid: person,
//   });
// };

export class HistoryUrgent extends Component {

  // constructor() {
  //   super();
    
  //   this.state = {
  //     netid: '',
  //   }
  // };

  // handleChange = e => {
  //   this.setState({
  //     netid: e.nativeEvent.text
  //   });
  // };

  // handleSubmit = () => {
  //   addPerson(this.state.netid);
  //   Alert.alert("Added person or smth");
  // }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={{paddingBottom: 40, paddingTop: 60,}}>
            <Text style={styles.header_title}>
              history
            </Text>
            <Text style={styles.header_date}>
              {moment().subtract(14,'d').format('MMMM DD').toLowerCase()} - {moment().format('MMMM DD').toLowerCase()}
            </Text>
          </View>

          {/* Body */}

          <View style={[styles.cards, styles.shadow]}>
            {/* Today */}
            {/* <HistLog day={0} person={'hal64'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(0,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(0,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={1} person={'hal64'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(1,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(1,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={2} person={'hal64'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(2,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(2,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={3} person={'hal64'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(3,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(3,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={4} person={'abc123'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(4,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(4,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={5} person={'abc123'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(5,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(5,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left', color:'#E62323'}]}>@abc123</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={6} person={'def456'}/> */}  
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(6,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(6,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left', color: '#FFCF66'}]}>@def456</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            {/* <HistLog day={7} person={'hal64'}/> */}
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
                <Text style={styles.carrois_b30}>{moment().subtract(7,'d').format('dddd').toLowerCase()}</Text>
                <Text style={styles.history_date_font}>{moment().subtract(7,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
              </View>
              <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@hal64</Text>
            </View>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>

            <HistLog day={8} />
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={9}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={10} />
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={11} />
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={12} />
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={13} />
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={14}/>
          </View>
        </ScrollView>

        {/* Dock */}
        {/* <Dock num={'historyscreen'} navigation={this.props.navigation}/> */}

        <View style={styles.dock_container}>
          <View style={styles.dock}>
            {/* Home */}
            <SimpleLineIcons name="home" size={30} color="#DDDDDD" onPress={() => this.props.navigation.navigate('HomeUrgentScreen')} />
            {/* <AntDesign name="home" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HomeScreen')}/> */}
            {/* History */}
            <AntDesign name="clockcircleo" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')} />
            {/* <FontAwesome5 name="history" size={30} color="#235789" onPress={() => this.props.navigation.navigate('HistoryScreen')}/> */}
            {/* Profile */}
            {/* <Octicons name="person" size={30} color="#235789" onPress={() => this.props.navigation.navigate('ProfileScreen')}/> */}
            <MaterialCommunityIcons name="account-heart-outline" size={35} color="#DDDDDD" onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

export default HistoryUrgent;