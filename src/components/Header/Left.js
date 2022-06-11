import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Left({ color, goto }) {
  const navigation = useNavigation();
  const goBack = () => {
    // if (goto == "menu") navigation.navigate("Menu");
    if (goto === "menu") navigation.navigate("Menu");
    else navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Entypo
          name="chevron-left"
          size={24}
          color={color ? color : "#f9b461"}
        />
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
