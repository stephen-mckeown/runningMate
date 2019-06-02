
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class DailyPlan extends Component {

  render() {
    const {Day, Time} = this.props.navigation.getParam("item", 'Error');
   

    console.log(this.props, 'props')
    return (
      <View style={styles.container}>
       
        <Text>{Day}'s Plan</Text>
        {Time != 0 ? <Text>Run {Time} minutes</Text> : <Text>Run {Time} minutes</Text>}
      </View>
    );
  }
}

export default DailyPlan;
