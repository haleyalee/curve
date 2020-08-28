// CreateInvite.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class CreateInvite extends Component {

  render() {
    return (
      <View style={styles.container} >
          {/* Header */}
          <View>
            <Text style={styles.header_title}>create invite</Text>
          </View>

        <View style={{paddingLeft: 30, paddingRight: 30, paddingTop: 40}}>
          {/* Date */}
          <View>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>date</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 150}]}>
                <Text style={styles.muli_blk20}>August</Text>
              </View>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 70}]}>
                <Text style={styles.muli_blk20}>28</Text>
              </View>
              <View>
                <Text style={[styles.muli_blk20, {paddingTop: 15}]}>,</Text>
              </View>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 100}]}>
                <Text style={styles.muli_blk20}>2020</Text>
              </View>
            </View>
          </View>

          {/* Time */}
          <View>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>time</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 70}]}>
                <Text style={styles.muli_blk20}>04</Text>
              </View>
              <View>
                <Text style={[styles.muli_blk20, {paddingTop: 10, paddingLeft: 5, paddingRight: 5}]}>:</Text>
              </View>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 70}]}>
                <Text style={styles.muli_blk20}>30</Text>
              </View>
              <View style={[styles.invite_bubbles, styles.shadow, {width: 70, marginLeft: 10}]}>
                <Text style={[styles.muli_blk20]}>pm</Text>
              </View>
            </View>
          </View>

          {/* People */}
          <View>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>people</Text>
            <View style={[styles.invite_bubbles, styles.shadow, {width:350}]}>
            </View>
          </View>

        </View>

        <View style={[styles.button, {position: 'absolute', bottom: 150}]}>
          <Text style={styles.muli_w20}>Create Invite</Text>
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>

    )
  }
}

export default CreateInvite;
