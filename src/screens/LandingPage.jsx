import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.supa}>Supa</Text>
          <Text style={styles.menu}>Menu</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ee921c",
        height: "100%",
    },
    title:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop: "80%"  
      },
      supa:{
        fontSize:50,
        fontWeight:"700",
    },
    menu:{
        fontSize:50,
        fontWeight:"700",
        color:"#fff",
    },
})