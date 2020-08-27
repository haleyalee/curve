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

});

export default styles;