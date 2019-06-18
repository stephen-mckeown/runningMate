global.userGroup;

import {
  StyleSheet,
} from 'react-native';


global.styles = {
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  rowSchedule: {
    //maxHeight: 48,
    padding: 15,
    backgroundColor: 'white',
    //flex: 1,
    //flexDirection: 'row',
    borderColor: '#e2d0a1',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  containerSchedule: {
    // marginTop: 0,
    // flex: 1,
  },
  SectionHeaderStyle: {
    backgroundColor: '#CDDC39',
    fontSize: 20,
    padding: 5,
    color: 'black',
  },
  rowSelect: {
    backgroundColor: 'gray'
  },
  loginScreenButton: {
    margin: 10,
    height: 40,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66b707',
    borderRadius: 10,
  },

    buttonGeoStart: {
      margin: 10,
      height: 40,
      width: 280,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#66b707',
      borderRadius: 10,
    },
    buttonGeoStop: {
      margin: 10,
      height: 40,
      width: 280,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 10,
    },
  map: {
    height:500,
    width:500,
    ...StyleSheet.absoluteFillObject,
  },

  
}
