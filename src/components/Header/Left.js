import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Left({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="chevron-left" size={24} color="#f9b461" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FA",
    padding: 8,
    borderRadius: 5,
    marginRight: 18,
  },
});
