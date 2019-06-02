import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import './app/Globals.js'

import LoginScreen from './app/screens/Login';
import PlanScreen from './app/screens/Plan';
import DailyPlanScreen from './app/screens/DailyPlan';


const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Plan: { screen: PlanScreen },
  DailyPlan: { screen: DailyPlanScreen },

});



export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}


