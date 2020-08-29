import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';

function HistLog(day, person) {
  return ( 
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}>
        <Text style={styles.carrois_b30}>{moment().subtract(day,'d').format('dddd').toLowerCase()}</Text>
        <Text style={styles.history_date_font}>{moment().subtract(day,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
      </View>
      <Text style={[styles.muli_blk20, {paddingBottom:20, textAlign: 'left'}]}>@person</Text>
    </View>
  )
}

export default HistLog;