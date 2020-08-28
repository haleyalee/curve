import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';

function ContactReq() {
  return ( 
    <View style={[styles.cards, styles.shadow]}>
      <Text style={styles.carrois_b30}>contact request</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}> @person</Text>
        <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'right'}]}> name</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Feather name="x" size={30} color="#235789" />
        <MaterialIcons name="check" size={30} color="#235789" />
      </View>
    </View>
  )
}

export default ContactReq;