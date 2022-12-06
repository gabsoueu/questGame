import React, {Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';

class AppHeader extends React.Component {
  render(){
    return(
      <View style={styles.box}>
        <Text style={styles.boxText}>quest game</Text>
      </View>
    )
  }
}
  const styles = StyleSheet.create ({
    box:{
      backgroundColor:"yellow",
      height:40,
      justifyContent:'center',
    },
    boxText:{
      fontSize:20,
      textAlign:'center',
      fontWeight:"bold",
    }
  })

export default AppHeader;