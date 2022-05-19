import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Landing extends Component {
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
        backgroundColor:"orange",
        height: "100%",
    },
    title:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop: "80%"
        
      },
      supa:{
          fontSize:37,
          fontWeight:"700",
  
      },
      menu:{
          fontSize:37,
          fontWeight:"700",
          color:"#fff",
      },
})