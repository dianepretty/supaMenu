import {  Text, StyleSheet, View ,TextInput , TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Ionicons,MaterialIcons,MaterialCommunityIcons  } from '@expo/vector-icons';

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
          <Text style={styles.filltext}>Please fill in the information</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Ionicons name="person-outline" size={25} color="gray" />
            <TextInput placeholder = "Full Name" style={styles.input}/>
        </View>
        <View style={styles.inputGroup}>
          <MaterialIcons name="smartphone" size={24} color="gray" />
          <TextInput placeholder = "Phone Number" style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="email-outline" size={24} color="gray" />
         <TextInput placeholder = "Your Email" style={styles.input} />
          </View>
          
          <TouchableOpacity
                  title="Submit"
                  style={styles.button}
                  >
                      <Text style={styles.buttonTitle}>
                         Proceed
                      </Text>
              </TouchableOpacity>
              <View  style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 4,
            paddingHorizontal:16,
            width: "100%",
          }}>
              <View style={styles.divider} />
              <View>
              <Text style={{
                width:70,
                fontWeight:"bold",
                color:"gray",
                textAlign:"center"
              }}>
                  OR
              </Text>
              </View>
              <View style={styles.divider} />
              </View>

              <Text style={styles.line}>
                If you have a PMG account
            </Text>

             <TouchableOpacity
             style={styles.button}
             >
             <Text style = {styles.buttonTitle}>
                 Sign in 
             </Text>
             </TouchableOpacity>
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
     backgroundColor:"#ffffff",
      marginTop: 80,
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
      fontSize:40,
      fontWeight:"700",

  },
  menu:{
    fontSize:40,
    fontWeight:"700",
    color:"orange",
},
welc:{
  fontWeight:"500", 
  fontSize:17, 
  color:"gray",
  alignSelf:"center",
  marginTop:30,
},
filltext:{
  color:"gray",
  alignSelf:"center",
  fontSize: 15,
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
  height: 60,
  borderRadius: 5,
  paddingLeft: 10,
  marginTop:15,
  marginLeft:15,
  marginRight:15,

},
  
  input: {
  height: "100%",
  width: "100%",
  paddingLeft: 10,
  color: 'gray',
  fontSize: 13,
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
divider:{
  flex: 1,
  height: 1,
  backgroundColor: "#f2f0f0",
},
Gbutton: {
  padding:10,
    borderRadius: 5,
    flexDirection:"row",
    alignItems:"center",
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

})