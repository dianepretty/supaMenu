import {  Text, StyleSheet, View ,TextInput , TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class SignUpPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.minicontainer}>
          <View style={styles.title}>
          <Text style={styles.supa}>Supa</Text>
          <Text style={styles.menu}>Menu</Text>
          </View>
          <Text style={styles.welc}>Welcome...</Text>
          <Text style={styles.filltext}>Sign in to continue</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <TextInput placeholder="Your Email" style={styles.input}/>
            </View>
            <View style={styles.inputGroup}>
            <TextInput placeholder = "Password" style={styles.input} />
          </View>
          
          <TouchableOpacity
                  title="Submit"
                  style={styles.button}
                  >
                      <Text style={styles.buttonTitle}>
                         Sign in
                      </Text>
              </TouchableOpacity>
              <Text style={styles.line}>
                  OR
              </Text>
              <TouchableOpacity
             style={styles.Gbutton}
             >
             <Text style = {styles.GbuttonTitle}>
                Login with google
             </Text>
             </TouchableOpacity>
  
             <TouchableOpacity
             style={styles.Gbutton}
             >
             <Text style = {styles.GbuttonTitle}>
                 Login with facebook
             </Text>
             </TouchableOpacity>
             <Text style={styles.forgotBut}>Forgot password?</Text>
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
        backgroundColor: "#f7941d",
        height: 780
    },
     minicontainer:{
     backgroundColor:"white",
      marginTop: 90,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      height:780
     },
     title:{
      flexDirection:"row",
      alignSelf:"center",
      marginTop: 10
    },
    supa:{
      fontSize:37,
      fontWeight:"700",

  },
  menu:{
    fontSize:37,
    fontWeight:"700",
    color:"orange",
},
welc:{
  fontWeight:"800",  
  color:"gray",
  alignSelf:"center",
  marginTop:15,
},
filltext:{
color:"gray",
alignSelf:"center",
marginTop:10,
},
form:{
  marginTop: 20,
  marginBottom:20,
  },

  inputGroup: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth : 1,
  borderColor: "#f2f0f0",
  height: 50,
  borderRadius: 5,
  padding: 10,
  marginTop:15,
  marginLeft:15,
  marginRight:15,

},
  
  input: {
  height: "100%",
  width: "100%",
  paddingLeft: 10,
  color: 'gray',
  fontSize: 12,
},
button: {
  backgroundColor: "#f7941d",
  padding: 12,
  borderRadius: 5,
  padding: 18,
  margin: 15,
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
Gbutton: {
padding: 12,
  borderRadius: 5,
  margin: 10,

  backgroundColor:"fff",
  borderWidth: 1,
  borderColor:"#f2f0f0",

},

  GbuttonTitle: {
  color: "gray",
  margin:10,
  fontWeight: "bold",
  textAlign: "center"
},
registerButt:{
  color:"gray",
},
  registerBut:{
      color: "#f9af55",
      fontWeight:"bold"
  },
   forgotBut: {
      color: "#f9af55",
      alignSelf: "center",
      fontWeight:"bold",
      marginTop: 20,
  }
})