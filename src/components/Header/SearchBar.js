import React, { useState } from "react";
import { View, TextInput } from "react-native";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <TextInput placeholder="Search..." onChangeText={setTerm} value={term} />
    </View>
  );
};

export default SearchBar;
