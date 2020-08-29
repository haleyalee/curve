// CreateInvite.js

import React, { useState, Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

import styles from '../Styles';
import Dock from '../components/Dock';



export class CreateInvite extends Component {

  constructor() {
    super();

    this.state = {
      month:  `${moment().format('MMMM').toLowerCase()}`,
      date: `${moment().format('DD')}`,
      year: `${moment().format('YYYY')}`,
      hour: `${moment().format('h')}`,
      min: `${moment().format('mm')}`,
      period: `${moment().format('a').toLowerCase()}`,
      people: ['@hal64', '@tj223']
    }

    // this.years = Array.from(new Array(20),( val, index) => index + this.state.year);

    // this.options = {
    //   years: [],
    // }

  }

  render() {

    // for (let i = 0; i <= 20; i++) {

    // }
    
    return (
      <View style={styles.container} >
          {/* Header */}
          <View>
            <Text style={styles.header_title}>create invite</Text>
          </View>
        
        <View style={{paddingLeft: 30, paddingRight: 30, paddingTop: 40}}>
          {/* Date */}
          <View style={{zIndex: 20}}>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>date</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30}}>
              <View style={[{width: 150}]}>
                {/* <Text style={styles.muli_blk20}>August</Text> */}
                <DropDownPicker
                  items={[
                      {label: 'January', value: 'january'},
                      {label: 'February', value: 'february'},
                      {label: 'March', value: 'march'},
                      {label: 'April', value: 'april'},
                      {label: 'May', value: 'may'},
                      {label: 'June', value: 'june'},
                      {label: 'July', value: 'july'},
                      {label: 'August', value: 'august'},
                      {label: 'September', value: 'september'},
                      {label: 'October', value: 'october'},
                      {label: 'November', value: 'november'},
                      {label: 'December', value: 'december'},
                  ]}
                  defaultValue={this.state.month}
                  containerStyle={{
                    height: 40,
                  }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      month: item.value
                  })}
              />
              </View>
              <View style={[{width: 70}]}>
                {/* <Text style={styles.muli_blk20}>28</Text> */}
                <DropDownPicker
                  items={[
                      {label: '1', value: '1'},
                      {label: '2', value: '2'},
                      {label: '3', value: '3'},
                      {label: '4', value: '4'},
                      {label: '5', value: '5'},
                      {label: '6', value: '6'},
                      {label: '7', value: '7'},
                      {label: '8', value: '8'},
                      {label: '9', value: '9'},
                      {label: '10', value: '10'},
                      {label: '11', value: '11'},
                      {label: '12', value: '12'},
                      {label: '13', value: '13'},
                      {label: '14', value: '14'},
                      {label: '15', value: '15'},
                      {label: '16', value: '16'},
                      {label: '17', value: '17'},
                      {label: '18', value: '18'},
                      {label: '19', value: '19'},
                      {label: '20', value: '20'},
                      {label: '21', value: '21'},
                      {label: '22', value: '22'},
                      {label: '23', value: '23'},
                      {label: '24', value: '24'},
                      {label: '25', value: '25'},
                      {label: '26', value: '26'},
                      {label: '27', value: '27'},
                      {label: '28', value: '28'},
                      {label: '29', value: '29'},
                      {label: '30', value: '30'},
                      {label: '31', value: '31'},
                      
                  ]}
                  defaultValue={this.state.date}
                  containerStyle={{height: 40, minWidth: 70}}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{justifyContent: 'flex-start'}}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      date: item.value
                  })}
                />
              </View>
              <View>
                <Text style={[styles.muli_blk20, {paddingTop: 15}]}>,</Text>
              </View>
              <View style={[{width: 100}]}>
                {/* <Text style={styles.muli_blk20}>2020</Text> */}
                <DropDownPicker
                  items={[
                      {label: '2020', value: '2020'},
                      {label: '2021', value: '2021'},
                      {label: '2022', value: '2022'},
                      {label: '2023', value: '2023'}
                  ]}
                  defaultValue={this.state.year}
                  containerStyle={{ height: 40, minWidth: 100 }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{justifyContent: 'flex-start'}}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      year: item.value
                  })}
                />
              </View>
            </View>
          </View>

          {/* Time */}
          <View style={{zIndex: 10}}>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>time</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={[{width: 70}]}>
                {/* <Text style={styles.muli_blk20}>04</Text> */}
                <DropDownPicker
                  items={[
                      {label: '1', value: '1'},
                      {label: '2', value: '2'},
                      {label: '3', value: '3'},
                      {label: '4', value: '4'},
                      {label: '5', value: '5'},
                      {label: '6', value: '6'},
                      {label: '7', value: '7'},
                      {label: '8', value: '8'},
                      {label: '9', value: '9'},
                      {label: '10', value: '10'},
                      {label: '11', value: '11'},
                      {label: '12', value: '12'},
                  ]}
                  defaultValue={this.state.hour}
                  containerStyle={{ height: 40, minWidth: 70 }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      hour: item.value
                  })}
                />
              </View>
              <View>
                <Text style={[styles.muli_blk20, {paddingTop: 5, paddingLeft: 5, paddingRight: 5}]}>:</Text>
              </View>
              <View style={[{width: 70}]}>
                {/* <Text style={styles.muli_blk20}>30</Text> */}
                <DropDownPicker
                  items={[
                      {label: '00', value: '0'},
                      {label: '01', value: '1'},
                      {label: '02', value: '2'},
                      {label: '03', value: '3'},
                      {label: `${moment().format('mm')}`, value: `${moment().format('mm')}`},
                  ]}
                  defaultValue={this.state.min}
                  containerStyle={{ height: 40, minWidth: 70 }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      min: item.value
                  })}
                />
              </View>
              <View style={[{width: 70, marginLeft: 10, paddingBottom: 30}]}>
                {/* <Text style={[styles.muli_blk20]}>pm</Text> */}
                <DropDownPicker
                  items={[
                      {label: 'am', value: 'am'},
                      {label: 'pm', value: 'pm'},
                  ]}
                  defaultValue={this.state.period}
                  containerStyle={{ height: 40, minWidth: 70 }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      period: item.value
                  })}
                />
              </View>
            </View>
          </View>

          {/* People */}
          <View style={{zIndex: 5}}>
            <Text style={[styles.carrois_b30, {paddingBottom: 10}]}>people</Text>
            <View style={[{width:350}]}>
            <DropDownPicker
                  items={[
                    // eventually replace with database?
                      {label: '@hal64', value: '@hal64'},
                      {label: '@tj223', value: '@tj223'},
                      {label: '@abc123', value: '@abc123'},
                      {label: '@def456', value: '@def456'},
                  ]}
                  multiple={true}
                  multipleText={`${this.state.people.join(', ')}`}
                  min={1}
                  max={30}
                  defaultValue={this.state.people}
                  containerStyle={{ height: 40, minWidth: 350 }}
                  style={styles.dropdown_style}
                  labelStyle={{
                    fontSize: 20,
                    fontFamily: 'Muli_400Regular',
                    color: '#666666'
                  }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={styles.dropdown_dropdownstyle}
                  onChangeItem={item => this.setState({
                      people: item
                  })}
                />
            </View>
          </View>

        </View>

        <View style={[styles.button, {position: 'absolute', bottom: 150}]}>
          <Text style={styles.muli_w20} onPress={() => this.props.navigation.navigate('HomeEventScreen')}>Create Invite</Text>
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>

    )
  }
}

export default CreateInvite;
