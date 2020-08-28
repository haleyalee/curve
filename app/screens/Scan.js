//Code from https://stackoverflow.com/questions/57264546/how-to-make-a-qr-code-scanner-in-react-native-using-expo

import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {BarCodeScanner} from 'expo-barcode-scanner';
import styles from '../Styles';
import ScanDock from '../components/ScanDock';
import { Feather } from '@expo/vector-icons';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async() => {
    const {
      status
    } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  render() {
    const {
      hasCameraPermission,
      scanned
    } = this.state;

    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    } else if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
    return ( 
    <View style = {styles.container}>
      <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned} style = {StyleSheet.absoluteFillObject}/>
      {/* Scan Dock */}
      <ScanDock num={'scanscreen'} navigation={this.props.navigation}/>
      {/* X button */}
      <View style={styles.top_right}>
        <Feather name="x" size={30} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HomeScreen')}/>
      </View>
      {scanned && (<Button title={'Tap to Scan Again'} onPress = {() => this.setState({scanned: false})}/>)} 
    </View>
    );
  }

  handleBarCodeScanned = ({type, data}) => {
    this.setState({
      scanned: true
    });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}