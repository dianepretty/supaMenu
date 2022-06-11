import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableWithoutFeedback, Text } from "react-native";

const SearchBar = ({ keyword }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
      <Text style={{ color: keyword ? "black" : "gray" }}>
        {keyword ? keyword : "Search..."}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
