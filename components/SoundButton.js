import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
import db from '../config';
import firebase from "firebase";

class SoundButton extends React.Component {
  playSound=async()=>{
    await Audio.Sound.createAsync(
      {
        uri:"https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"
      },
      {
        shouldPlay:true
      }
    )
  }

  isButtonPressed (buttonColor) {
    //var time = new Date().getTime();
    var query = db.ref("teams/"+buttonColor+"/").update({
      isButtonPressed: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
  }

  render(){
    return (
      <TouchableOpacity
        style={[styles.botoes,{backgroundColor:this.props.color}]}
        onPress={()=>{
          var buttonColor= this.props.color;
          this.isButtonPressed (buttonColor);
          this.playSound ();
        }} >
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  botoes:{
    borderRadius:1000,
    height:50,
    width:50,
    backgroundColor:"green",
    alignSelf:'center',
    marginBottom:20
  },

});
export default SoundButton;