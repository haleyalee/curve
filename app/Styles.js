// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#000',//'#AEC9EB',
    paddingTop: 100,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  // Dock
  dock_container: {
    width: 414, 
    height: 100, 
    backgroundColor: '#AEC9EB', 
    position: 'absolute', 
    bottom: 0,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dock_icon: {
    width: 30,
    height: 30,
  },

  // Header
  header_title: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 45,
    color: '#235789',
    textAlign: 'center'
  },
  header_date: {
    fontFamily: 'Muli_400Regular',
    fontSize: 20,
    color: '#235789',
    textAlign: 'center'
  }

});

export default styles;