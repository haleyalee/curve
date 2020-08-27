// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Home extends Component {

  render() {
    return (

      <View style={styles.container}>
        {/* notifications bell */}

        {/* header */}
        <View>
          <Text>curve</Text>
          <Text>august 26, 2020</Text>
        </View>

        {/* buttons */}
        <View>
          {/* Scan me */}

          {/* Create invite */}

        </View>

        {/* Urgent alerts */}
        <View>
          {/* red */}
          <View>

          </View>

          {/* yellow */}
          <View>

          </View>
        </View>

        {/* Cards */}
        <View>
          {/* Upcoming interactions */}
          <View>

          </View>
          {/* Past */}
          <View>
            
          </View>
        </View>
      </View>
    )
  }
}

export default Home;