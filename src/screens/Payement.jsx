import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { Component, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {} from "react-native-web";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Payement = () => {
  const [credit, setCredit] = useState({
    color: "black",
    bg: "white",
  });

  const [cash, setCash] = useState({
    color: "white",
    bg: "#25D482",
  });

  const payMethod = (method) => {
    if (method == "card") {
    } else {
    }
  };

  const navigation = useNavigation();

  return (

    <ScrollView>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />

      <View style={styles.over}>
        <TouchableOpacity
          style={{
            marginTop: 25,
            backgroundColor: "#F8F8FB",
            width: 40,
            height: 40,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{ marginLeft: "auto", marginRight: "auto" }}
              name="chevron-back"
              size={24}
              color="#25D482"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 23, color: "#3B3B3B" }}
            >
              Checkout
            </Text>
            <FontAwesome5
              style={{ marginTop: 8, marginLeft: 8 }}
              name="credit-card"
              size={18}
              color="#CDC396"
            />
          </View>

          <View>
            <Text
              style={{ color: "#25D482", fontSize: 22, fontWeight: "bold" }}
            >
              Frw 16,000
            </Text>
            <Text style={{ color: "#CECECE" }}>Including VAT of (18%)</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#25D482",
            height: 70,
            borderRadius: 20,
            flexDirection: "row",
            elevation: 30,
            shadowColor: "#25D482",
          }}
        >
          <TouchableOpacity
            onPress={() => payMethod("card")}
            style={{ width: "50%" }}
          >
            <View
              style={{
                backgroundColor: `${credit.bg}`,
                height: 70,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: `${credit.color}`,
                  textAlign: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Credit Card{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => payMethod("cash")}
            style={{ width: "50%" }}
          >
            <View
              style={{
                backgroundColor: `${cash.bg}`,
                height: 70,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: `${cash.color}`,
                }}
              >
                Mobile & Cash
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 55 }}>
        <TouchableOpacity
          style={{ backgroundColor: "white", marginLeft: 40, marginRight: 40 }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 120, height: 80 }}
              source={require("../../images/momo.png")}
            />

            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 20,
              }}
            >
              MTN mobile money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            marginLeft: 40,
            marginRight: 40,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 120, height: 65 }}
              source={require("../../images/tigo.png")}
            />

            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 20,
              }}
            >
              AirtelMoney
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            marginLeft: 40,
            marginRight: 40,
            marginTop: 22,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 120, height: 80 }}
              source={require("../../images/cash.png")}
            />

            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 20,
              }}
            >
              Cash
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          textAlign: "center",
          color: "#C6C6C6",
          fontSize: 18,
          marginTop: 20,
        }}
      >
        We will send you an order details to your email after a successful
        payment
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentDone")}
      >
        <FontAwesome
          style={{ marginRight: 10 }}
          name="lock"
          size={24}
          color="white"
        />
        <Text style={styles.text}>Pay for the order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Payement;

const styles = StyleSheet.create({
  over: {
    backgroundColor: "white",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 180,
    paddingHorizontal: 25,
    width: "95%",
    marginVertical: 10,
    elevation: 80,
    shadowColor: "#25D482",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#25D482",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    flexDirection: "row",
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
