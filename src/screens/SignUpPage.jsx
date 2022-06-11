import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { Component, useState } from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SignUpPage(){

  const [name,setName]=useState("");
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const base="http://196.223.240.154:8099/supapp";
  const sign=async()=>{
    await axios.post(`${base}/api/auth/client/signup`, {
      email: email,
      firstName: name,
      lastName: "user",
      mobile: phone,
      password: pass
    })
    .then(function (response) {
      navigation.navigate("Login")
      
    })
    .catch(function (error) {
    Alert.alert("Check your provided details");
    console.log(error);
    });
  }
 const navigation = useNavigation()
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
              <Ionicons name="person-outline" size={25} color="#9098b1" />
              <TextInput  defaultValue={name} onChangeText={newName=>setName(newName)} placeholder="Full Name" style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <MaterialIcons name="smartphone" size={24} color="#9098b1" />
              <TextInput defaultValue={phone} onChangeText={newPhone=>setPhone(newPhone)} placeholder="Phone Number" style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#9098b1"
              />
              <TextInput defaultValue={email} onChangeText={newEmail=>setEmail(newEmail)} placeholder="Your Email" style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#9098b1"
              />
              <TextInput onChangeText={newPass=>setPass(newPass)} secureTextEntry={true} defaultValue={pass} placeholder="Password" style={styles.input} />
            </View>

            <TouchableOpacity onPress={()=>sign()} title="Submit" style={styles.button}>
              <Text style={styles.buttonTitle}>Proceed</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 4,
                paddingHorizontal: 16,
                width: "100%",
              }}
            >
              <View style={styles.divider} />
              <View>
                <Text
                  style={{
                    width: 70,
                    fontWeight: "bold",
                    color: "#9098b1",
                    textAlign: "center",
                  }}
                >
                  OR
                </Text>
              </View>
              <View style={styles.divider} />
            </View>

            <Text style={styles.line}>If you have a PMG account</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
              <Text style={styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.registerButt}>Already have an account ?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.registerBut}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7941d",
    height: 780,
  },
  minicontainer: {
    backgroundColor: "#ffffff",
    marginTop: 65,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    height: 780,
  },
  title: {
    flexDirection: "row",
    alignSelf: "center",
  },
  supa: {
    fontSize: 38,
    fontWeight: "700",
  },
  menu: {
    fontSize: 38,
    fontWeight: "700",
    color: "orange",
  },
  welc: {
    fontWeight: "500",
    fontSize: 15,
    color: "gray",
    alignSelf: "center",
    marginTop: 12,
  },
  filltext: {
    color: "gray",
    alignSelf: "center",
    fontSize: 14,
    marginTop: 5,
  },
  form: {
    marginBottom: 20,
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f2f0f0",
    height: 58,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  input: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    color: "gray",
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    color: "gray",
    textAlign: "center",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#f2f0f0",
  },
  Gbutton: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "fff",
    borderWidth: 1,
    borderColor: "#f2f0f0",
  },

  GbuttonTitle: {
    color: "gray",
    marginLeft: 90,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerButt: {
    color: "gray",
  },
  registerBut: {
    color: "#f9af55",
    fontWeight: "bold",
  },

  input: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    color: "gray",
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
    textAlign: "center",
  },
  line: {
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
  Gbutton: {
    padding: 12,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "fff",
    borderWidth: 1,
    borderColor: "#f2f0f0",
  },

  GbuttonTitle: {
    color: "gray",
    margin: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerButt: {
    color: "gray",
  },
  registerBut: {
    color: "#f9af55",
    fontWeight: "bold",
  },
});
