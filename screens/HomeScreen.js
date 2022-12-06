import * as React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from "../components/AppHeader"
import db from '../config';

export default class HomeScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      redStatus: true,
      greenStatus: true,
      blueStatus: true,
      yellowStatus: true,
    }
  }

  goToBuzzerScreen =(buzzerColor)=>{
    var teamRef = db.ref("teams/" + buzzerColor);
    teamRef.update({
      enabled: false,
    });
    this.props.navigation.navigate("BuzzerScreen",{
      color:buzzerColor,
    });
  }

  componentDidMount(){
    var teamsRef = db.ref("teams");
    teamsRef.on("value", data=>{
      var teamDetails = data.val();
      this.setState({
        redStatus: teamDetails.red.enabled,
        greenStatus: teamDetails.green.enabled,
        blueStatus:  teamDetails.blue.enabled,
        yellowStatus: teamDetails.yellow.enabled,
      })
    })
  }

  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity 
          disabled = {!this.state.redStatus}
          style={[styles.botoes,{backgroundColor:"red"}]}
          onPress = {()=>this.goToBuzzerScreen("red")}>
          <Text style = {styles.titulo}>red</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          disabled = {!this.state.blueStatus}
          style={[styles.botoes,{backgroundColor:"blue"}]}
          onPress = {()=>this.goToBuzzerScreen("blue")}>
          <Text style = {styles.titulo}>blue</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          disabled = {!this.state.greenStatus}
          style={[styles.botoes,{backgroundColor:"green"}]}
          onPress = {()=>this.goToBuzzerScreen("green")}>
          <Text style = {styles.titulo}>green</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          disabled = {!this.state.yellowStatus}  
          style={[styles.botoes,{backgroundColor:"yellow"}]}
          onPress = {()=>this.goToBuzzerScreen("yellow")}>
          <Text style = {styles.titulo}>yellow</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botoes,{backgroundColor:"purple"}]}
          onPress = {()=>{
            this.props.navigation.navigate("RankingScreen")
          }}>
          <Text style = {styles.titulo}>ranking</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({ 

  titulo:{
    fontSize:16,
    textAlign: "center",
    color:"white",
  },
  botoes:{
    borderRadius:1000,
    height:50,
    width:300,
    alignSelf:'center',
    marginBottom:20,
    justifyContent: 'center',
    marginTop: 20
  },
});
