
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class DailyPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,
      stop: true
    };
  }

  _startGeoLocation = () => {
    this.setState({start: true,
                    stop: false})
  }

  _stopGeoLocation = () => {
    this.setState({
      start: false,
      stop: true
    })
  }



  render() {
    const {Day, Time} = this.props.navigation.getParam("item", 'Error');
    return (
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
      </View>
    );
  }
}

export default DailyPlan;
