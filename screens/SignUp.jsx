import { Text, StyleSheet, View, TextComponent, Pressable } from 'react-native'
import React, { Component } from 'react'
import {useState} from "react"
import { TextInput } from 'react-native-web'

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
        <View style={styles.form}>
            <View style={styles.inputGroup}>
        <TextInput placeholder = "Full Name" style={styles.input}/>
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholder = "Phone Number" style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
         <TextInput placeholder = "Your Email" style={styles.input} />
        </View>
        {/* <Pressable
              onPress={handleSubmit}
              title="Submit"
              style={styles.button}
            >
              <Text style={styles.buttonTitle}>
                  {loading ? 'Signg in ...' : 'Sign in'}
              </Text>
            </Pressable> */}

            <Pressable
                title="Submit"
                style={styles.button}>
                    <Text style={styles.buttonTitle}>
                       Proceed
                    </Text>
            </Pressable>

            <Text style={styles.line}>
                OR
            </Text>
            <Text style={styles.line}>
                If you have a PMG account
            </Text>
           
           <Pressable
           style={styles.button}
           >
           <Text style = {styles.buttonTitle}>
               Sign In
           </Text>
           </Pressable>

            <View style={styles.title}>
           <Text style={styles.registerButt}>Don't have an account ?</Text>
           <Text style={styles.registerBut}>Register</Text>
           </View>
        </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange",
        height:"40em"
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
      marginTop: "30px"
      
    },
    supa:{
        fontSize:"37px",
        fontWeight:"700",

    },
    menu:{
        fontSize:"37px",
        fontWeight:"700",
        color:"orange",
    },
    welc:{
       fontWeight:"600",  
       color:"gray",
       alignSelf:"center",
       marginTop:"10%",
    },
    filltext:{
    color:"gray",
    alignSelf:"center",
    marginTop:"10px",
    },
    form:{
    marginTop: "20px",
    marginBottom: "20px",
    },
  
    inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth : 1,
    borderColor: "#f2f0f0",
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom:20
  },
    
    input: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    color: 'gray',
    fontSize: 12,
  },
    button: {
    backgroundColor: "#ee921c",
    padding: "12px",
    borderRadius: 5,
    marginTop: "20px",
  },
  
    buttonTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  line:{
       color:"gray",
    marginTop:20,
    textAlign:'center',
  },
  registerButt:{
  color:"gray",
  },
  registerBut:{
      color: "orange",
  }
})