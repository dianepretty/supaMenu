import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert 
} from "react-native";
import React, { Component, useState,useContext } from "react";
import { MaterialCommunityIcons, AntDesign, Zocial } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Link } from "@react-navigation/native";
import SignUpPage from "./SignUpPage";


const LoginPage=()=> {
  const navigation = useNavigation()
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
 
  const base="http://196.223.240.154:8099/supapp";



  const log=async()=>{

 
    await axios.post(`${base}/api/auth/signin`, {
      login: email,
      password: pass
    })
    .then(function (response) {
      Alert.alert("loged in successfuly");
      console.log(response.data);
    })
    .catch(function (error) {
    Alert.alert("Check your credecials");
    });
  }

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
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#9098b1"
              />
              <TextInput  defaultValue={email} onChangeText={newEmail=>setEmail(newEmail)}  style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <AntDesign name="lock1" size={25} color="gray" />
              <TextInput defaultValue={pass} secureTextEntry={true} onChangeText={newPass=>setPass(newPass)} style={styles.input} />
            </View>

            <TouchableOpacity onPress={()=>log()} title="Submit" style={styles.button}>
              <Text style={styles.buttonTitle}>Sign in</Text>
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

            <View style={styles.Gbutton}>
              <AntDesign name="google" size={24} color="gray" />
              <TouchableOpacity>
                <Text style={styles.GbuttonTitle}>Login with Google</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Gbutton}>
              <Zocial name="facebook" size={24} color="gray" />
              <TouchableOpacity>
                <Text style={styles.GbuttonTitle}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>
             <TouchableOpacity>
            <Text style={styles.forgotBut}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.registerButt}>Don't have an account ?</Text>
             <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
             <Text style={styles.registerBut}>Register</Text>
             </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7941d",
    height: 780,
  },
  minicontainer: {
    backgroundColor: "white",
    marginTop: 65,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: 780,
  },
  title: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
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
    padding: 10,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  input: {
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    color: "#9098b1",
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
    color: "#9098b1",
    marginLeft: 68,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  registerButt: {
    color: "#9098b1",
  },
  registerBut: {
    color: "#f9af55",
    fontWeight: "bold",
  },
  forgotBut: {
    color: "#f9af55",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 4,
  },
});
