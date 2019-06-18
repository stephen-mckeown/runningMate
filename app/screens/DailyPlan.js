
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';


const styles = StyleSheet.create(global.styles);


class DailyPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,
      stop: true,
      location:'',
      display: false
    };
  }

  _startGeoLocation = () => {
    this.setState({
                start: true,
                stop: false,
                display:false
                })
    this._getGeoLocation();           
  }

  _stopGeoLocation = () => {
    this.setState({
      start: false,
      stop: true,
      display: true
    })
  }

  _getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {const location = JSON.stringify(position);
        this.setState({ location });
    },
  error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
  }



  render() {
    const {Day, Time} = this.props.navigation.getParam("item", 'Error');
    return (
      <View>
      <View style={styles.container}>
       
        <Text>{Day}'s Plan</Text>
        {Time != 0 ? <Text>Run {Time} minutes</Text> : <Text>Run {Time} minutes</Text>}
        <View>
          {this.state.stop ?
          <TouchableOpacity
              style={styles.buttonGeoStart}
            //underlayColor='#fff'
            onPress={() => this._startGeoLocation()}
          >
            <Text style={styles.submitText}>Start</Text>
          </TouchableOpacity>
          :
            <TouchableOpacity
              style={styles.buttonGeoStop}
              //underlayColor='red'
              onPress={() => this._stopGeoLocation()}
            >
              <Text style={styles.submitText}>Stop</Text>
            </TouchableOpacity>
          }
        </View>
        {this.state.display ? <Text>Location: {this.state.location}</Text> : null}
      </View>
        <View>
        <MapView
            style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        </View>
      </View>
    );
  }
}

export default DailyPlan;
