import * as React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from "../components/AppHeader"
import SoundButton from "../components/SoundButton"

export default class BuzzerScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam("color")} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={() => {
            this.props.navigation.navigate('RankingScreen');
          }}>
          <Text style={styles.buttonText}>Ir para tela do Ranking </Text>
        </TouchableOpacity>
    
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});