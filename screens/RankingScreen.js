import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AppHeader from "../components/AppHeader"
import db from '../config';

class RankingScreen extends React.Component {
  
  constructor(){
    super();
      this.state = {
        teamsRank: [],
    };
  }
  
  showTeamRank = () => {
    var teams = [];
    var teamRef = db.ref("teams/");
    teamRef.on("value",data=>{
      var teamList = data.val();
      for(var team in teamList){
        if(teamList[team]['isButtonPressed']===true){
          teamList[team]['teamName'] = team;
          teams.push(teamList[team]);
        }
      }
      teams.sort(function(team1,team2){
        return team1.timestamp - team2.timestamp;
      })
      this.setState({teamsRank: teams});
    })
  }
  
  reset = () => {
    console.log("reset");
    var resetData = db.ref("teams/").set({
      red:{
        enabled: true,
        isButtonPressed:false,
        timestamp:0
      },
      blue:{
        enabled: true,
        isButtonPressed:false,
        timestamp:0
      },
      green:{
        enabled: true,
        isButtonPressed:false,
        timestamp:0
      },
      yellow:{
         enabled: true,
        isButtonPressed:false,
        timestamp:0
      },
    })
    this.setState({teamsRank:[]});
  }

  componentDidMount(){
    this.showTeamRank();
  }

  render(){
    return(
      <View>
        <AppHeader/>
        <Text>tela do ranking</Text>
        <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
          {
            this.state.teamsRank.map((team)=>(
              <View
                style={{
                  width: 140,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: team.teamName,
                  marginTop: 20
                }}>
                <Text>{team.teamName.toUpperCase()}</Text>
              </View>
            ))
          }

        </View>
        <Button title = "reset"
          onPress = {this.reset}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.buttonText}>Voltar para tela inicial </Text>
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
    marginTop: 30,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default RankingScreen;