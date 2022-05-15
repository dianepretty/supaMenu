import { Text, StyleSheet, View, TextComponent } from 'react-native'
import React, { Component } from 'react'
import { Button, TextInput } from 'react-native-web'

export default class SignUp extends Component {
  render() {
    return (
        <View style={styles.container}>
      <View style={styles.minicontainer}>
          <View style={styles.title}>
        <Text style={styles.supa}>Supa</Text>
        <Text style={styles.menu}>Menu</Text>
        </View>
        <Text style={styles.welc}>Welcome...</Text>
        <Text style={styles.filltext}>Please fill in the information</Text>
      </View>
      <View>
         <TextInput
         
         /> 
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange",
        height:"100%"
    },
    minicontainer:{
      backgroundColor:"white",
      marginTop:"4em",
      borderTopRightRadius:"2em",
      borderTopLeftRadius:"2em",
      height:"40em"
      
    },
    title:{
      flexDirection:"row",
      alignSelf:"center",
      
    },
    supa:{
        fontSize:"37px",
        marginTop:"10px",
        fontWeight:"700",

    },
    menu:{
        fontSize:"37px",
        marginTop:"10px",
        fontWeight:"700",
        color:"orange",
    },
    welc:{
       fontWeight:"600",
       color:"grey",
       alignSelf:"center",
       marginTop:"10%",
    },
    filltext:{
    color:"grey",
    alignSelf:"center",
    marginTop:"10px",
    }
})