import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 30 }}>
        <Text style={styles.r_name}>Choose Kigali</Text>
        <Text style={styles.title}>Drinks</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View onPress={() => {}} style={styles.resto}>
          <Image
            style={styles.image}
            source={{
              uri: "https://ditech.media/wp-content/uploads/2020/05/pancakes.jpg",
            }}
          />
          <View style={styles.r_content}>
            <Text style={styles.r_menu}>World,African,Pizzeria,Coffee</Text>
            <Text style={{ fontSize: 17, fontFamily: "DMSans_700Bold" }}>
              Tom Yummy - 12.5
            </Text>
            <Text style={styles.price}>Frw 5,000</Text>
            <View style={styles.counter}>
              <TouchableOpacity
                style={{ paddingHorizontal: 2 }}
                onPress={() => {}}
              >
                <AntDesign name="minus" size={16} color="#f9b461" />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, paddingHorizontal: 6 }}>2</Text>
              <TouchableOpacity
                style={{ paddingHorizontal: 2 }}
                onPress={() => {}}
              >
                <AntDesign name="plus" size={16} color="#f9b461" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.details}>
        <Text style={[styles.text, { fontSize: 16 }]}>more drinks</Text>
        <AntDesign
          name="arrowright"
          size={18}
          color="orange"
          style={{ marginTop: 2, marginLeft: 8 }}
        />
      </TouchableOpacity>
      <View style={styles.total}>
        <Text style={[{ fontSize: 20 }, styles.text]}>Total</Text>
        <Text style={[{ fontSize: 20 }, styles.text]}>Frw 16,000</Text>
      </View>
      <TouchableOpacity
        style={styles.ibtn}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.ibtn_text}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffefe",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: "#f9b461",
    fontWeight: "400",
    fontSize: 18,
    marginTop: 8,
    textAlign: "right",
    fontFamily: "DMSans_400Regular",
  },
  image: {
    width: "25%",
    height: 80,
    borderRadius: 12,
  },
  resto: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
  },
  r_content: {
    width: "70%",
    marginLeft: "5%",
    position: "relative",
  },
  // r_name: { fontWeight: "bold", fontSize: 18, marginTop: 5 },
  r_name: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: "DMSans_700Bold",
  },
  r_menu: {
    fontSize: 16,
    marginTop: 2,
    fontFamily: "DMSans_400Regular",
  },
  counter: {
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    padding: 2,
    borderRadius: 5,
  },
  price: {
    color: "#f9b461",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 6,
  },
  details: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "orange",
    fontFamily: "DMSans_700Bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  ibtn_text: {
    color: "white",
    fontFamily: "DMSans_500Medium",
    fontSize: 18,
    textAlign: "center",
  },
  ibtn: {
    backgroundColor: "orange",
    paddingVertical: 15,
    marginVertical: 30,
    borderRadius: 10,
    width: "100%",
  },
});
