import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import styles from '../Styles';

function HistLog(day) {
  return ( 
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
        <Text style={styles.carrois_b30}>{moment().subtract(day,'d').format('dddd').toLowerCase()}</Text>
        <Text style={styles.history_date_font}>{moment().subtract(day,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
      </View>
      <Text style={[styles.muli_b20, {paddingBottom:20, textAlign: 'left'}]}> @person</Text>
    </View>
  )
}

// export class HistLog extends Component {
//   render() {
//     return ( 
//       <View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
//           <Text style={styles.carrois_b30}>{moment().subtract(this.props.day,'d').format('dddd').toLowerCase()}</Text>
//           <Text style={styles.history_date_font}>{moment().subtract(this.props.day,'d').format('MMMM DD, YYYY').toLowerCase()}</Text>
//         </View>
//         <Text style={[styles.muli_b20, {paddingBottom:20, textAlign: 'left'}]}> @person</Text>
//         <View style={{paddingTop:20, paddingBottom:20}}>
//           <View style={styles.line_style}></View>
//         </View>
//       </View>
//     )
//   }
// }

export default HistLog;