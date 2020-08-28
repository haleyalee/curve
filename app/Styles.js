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
    minWidth: 140,
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
    zIndex: 1,
    right: 0, 
    paddingTop: 50, 
    paddingRight: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  top_left: {
    position: 'absolute', 
    zIndex: 1,
    left: 0, 
    paddingTop: 50, 
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },

  // Text
  muli_b15: {
    fontFamily: 'Muli_400Regular',
    fontSize: 15,
    color: '#235789',
    textAlign: 'center',
  },
  muli_blk15: {
    fontFamily: 'Muli_400Regular',
    fontSize: 15,
    color: '#666666',
    textAlign: 'center'
  },
  muli_w20: {
    fontFamily: 'Muli_400Regular',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  muli_b20: {
    fontFamily: 'Muli_400Regular',
    fontSize: 20,
    color: '#235789',
    textAlign: 'center',
  },
  muli_blk20: {
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
  muli_b30: {
    fontFamily: 'Muli_400Regular',
    fontSize: 30,
    color: '#235789',
    textAlign: 'center',
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

  //ScanDock
  scan_dock_container: {
    width: 335, 
    height: 74, 
    backgroundColor: '#FFFFFF', 
    position: 'absolute', 
    top: 119,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15,
  },
  scan_dock:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scan_dock_div: {
    borderLeftWidth: 1,
    borderLeftColor: '#666666',
  },
  
  // Search Bar
  search: {
    width: 354,
    height: 50,
    backgroundColor: '#FBFBFB',
    borderRadius: 100,
    padding: 10,
    alignContent: 'center',
  },

  // Confirm Bubble
  confirm_bubble: {
    width: 354,
    minHeight: 245,
    backgroundColor: '#FBFBFB',
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 326,
    padding: 20,
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

// Create Invite
invite_bubbles: {
  backgroundColor: '#FBFBFB',
  height: 45,
  borderRadius: 20,
  padding: 10,
  marginBottom: 30,
},

// History
history_date_font: {
  fontFamily: 'CarroisGothicSC_400Regular',
  fontSize: 20,
  textAlign: 'right',
  color: '#235789',
},
line_style: {
  borderWidth: 1,
  opacity: 0.25,
  borderColor: '#666666',
}
});


export default styles;