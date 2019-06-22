
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
      display: false,
      coords: null,
      
    };
  }
  componentDidMount() {
    this._getGeoLocation()
  }

  _startGeoLocation = () => {
    this.setState({
                start: true,
                stop: false,
                display:false
                })      
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
      (position) => {
        this.setState({ coords: position.coords });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const {Day, Time} = this.props.navigation.getParam("item", 'Error');
    console.log(this.state.coords, "coords")
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
        {this.state.coords && <MapView
            style={styles.map}
          initialRegion={{
            latitude: this.state.coords.longitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}
        />}
        </View>
      </View>
    );
  }
}

export default DailyPlan;
