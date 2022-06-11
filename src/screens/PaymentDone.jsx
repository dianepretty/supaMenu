import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function PaymentDone({  }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../images/donuts.png")} />
      <Text style={styles.text1}>Payment Success, Yayy!</Text>
      <Text style={styles.text2}>
        We will send order details and invoice in your contact no. and
        registered email
      </Text>
      <TouchableOpacity style={styles.details}>
        <Text
          style={{
            fontSize: 18,
            color: "orange",
            fontFamily: "DMSans_500Medium",
          }}
        >
          Check Details
        </Text>
        <AntDesign
          name="arrowright"
          size={20}
          color="orange"
          style={{ marginTop: 3, marginLeft: 8 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ibtn}>
        <Text style={styles.ibtn_text}>Download Invoice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 5 }}
        onPress={() => navigation.navigate("RateUs")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 35,
            fontFamily: "DMSans_500Medium",
          }}
        >
          Supa
        </Text>
        <Text
          style={{
            color: "orange",
            fontSize: 35,
            fontFamily: "DMSans_500Medium",
          }}
        >
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040404",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 40,
  },
  text1: {
    color: "orange",
    fontFamily: "DMSans_700Bold",
    fontSize: 22,
    marginTop: 30,
  },
  text2: {
    color: "white",
    padding: 20,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "DMSans_400Regular",
  },
  details: {
    flexDirection: "row",
    marginVertical: 6,
  },
  ibtn_text: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "DMSans_500Medium",
  },
  ibtn: {
    backgroundColor: "orange",
    paddingVertical: 15,
    marginVertical: 30,
    borderRadius: 10,
    width: "90%",
  },
});
