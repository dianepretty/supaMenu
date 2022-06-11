import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SearchBarComponent from "../components/SearchBarComponent";
import { searchProvider } from "../services/RestaurantService";

const ScanScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");

  const search = () => {
    if (term == "") {
      navigation.navigate("Restaurants");
      return;
    }
    searchProvider(term)
      .then((res) => {
        let data = {
          content: [...res.content],
          last: res.last,
        };
        navigation.navigate("Restaurants", { data, term });
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={Styles.body}>
      <SearchBarComponent setTerm={(value) => setTerm(value)} search={search} />
      <Text style={Styles.scanText}>or</Text>
      <Image
        source={require("../../assets/icons/qr-code-svgrepo-com.png")}
        style={Styles.scanPic}
      />
      <Text style={Styles.scanText}>Scan, Pay & Enjoy!</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  body: {
    backgroundColor: "#f7941d",
    height: "100%",
    alignItems: "center",
    padding: 40,
  },
  scanText: {
    fontWeight: "bold",
    fontFamily: "DMSans_400Regular",
    marginTop: 50,
    fontSize: 20,
  },
  scanPic: {
    marginTop: 100,
    width: 80,
    height: 80,
  },
});

export default ScanScreen;
