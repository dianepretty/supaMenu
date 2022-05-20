import React from "react";
import { Text, View, StyleSheet } from "react-native";
import QrCode from "../../assets/icons/qr-code-svgrepo-com.svg";
// import SvgUri from "react-native-svg";
import SearchBarComponent from "../components/SearchBarComponent";

const ScanScreen = () => {
  return (
    <View style={Styles.body}>
      <SearchBarComponent />
      <Text style={Styles.scanText}>or</Text>
      <QrCode width={80} height={80} fill="#000" style={Styles.scanPic} />
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
    top: 30,
  },
  scanText: {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginTop: 50,
    fontSize: 20,
  },
  scanPic: {
    marginTop: 100,
  },
});

export default ScanScreen;
