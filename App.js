import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SoundButton from "./components/SoundButton"
import {Audio} from 'expo-av'
import AppHeader from "./components/AppHeader"
import HomeScreen from "./screens/HomeScreen"
import BuzzerScreen from "./screens/BuzzerScreen"
import RankingScreen  from"./screens/RankingScreen"
import {createAppContainer, createSwitchNavigator} from "react-navigation";

export default class App extends Component{
  render(){
    return(
      <View style = {styles.viu}>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator ({
  HomeScreen:HomeScreen,
  BuzzerScreen:BuzzerScreen,
  RankingScreen:RankingScreen,
})

const AppContainer = createAppContainer (AppNavigator)

const styles = StyleSheet.create({
  viu:{
    flex:1,
    backgroundColor:"grey",
  },
});
