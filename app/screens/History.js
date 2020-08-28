// History.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import HistLog from '../components/HistLog';

export class History extends Component {

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
            <HistLog day={0}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={1}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={2}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={3}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={4}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={5}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={6}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={7}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={8}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={9}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={10}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={11}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={12}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={13}/>
            <View style={{paddingTop:20, paddingBottom:20}}>
              <View style={styles.line_style}></View>
            </View>
            <HistLog day={14}/>
          </View>
        </ScrollView>

        {/* Dock */}
        <Dock num={'historyscreen'} navigation={this.props.navigation}/>

      </SafeAreaView>
    )
  }
}

export default History;