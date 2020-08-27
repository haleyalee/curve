// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',//'#AEC9EB',
    paddingTop: 100,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    minWidth: 160,
    height: 40,
    backgroundColor: '#235789',
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  cards: {
    backgroundColor: '#FBFBFB',
    width: 354,
    minHeight: 60,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  shadow: {
    shadowColor: '#666666',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  top_right: {
    position: 'absolute', 
    right: 0, 
    paddingTop: 50, 
    paddingRight: 30,
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  top_left: {
    position: 'absolute', 
    left: 0, 
    paddingTop: 50, 
    paddingLeft: 30,
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },

  // Text
  muli_w20: {
    fontFamily: 'Muli_400Regular',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  muli_b20: {
    fontFamily: 'Muli_400Regular',
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
  },
  carrois_b30: {
    fontFamily: 'CarroisGothicSC_400Regular',
    fontSize: 30,
    color: '#235789',
    // textAlign: 'center'
  },
  // Dock
  dock_container: {
    width: 414, 
    height: 80, 
    backgroundColor: '#FFFFFF', 
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
},

// Home
urgent_alert: {
  width: 350,
  height: 60,
  borderRadius: 20,
  justifyContent: 'center',
  marginBottom: 30,
},

// History
history_date_font: {
  fontFamily: 'CarroisGothicSC_400Regular',
  fontSize: 20,
  textAlign: 'right',
  color: '#235789',
}
});


export default styles;