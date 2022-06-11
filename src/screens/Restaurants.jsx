import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { getProviders } from "../services/RestaurantService";

export default function Restaurants({ navigation, data, term }) {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    if (data && term) {
      setProviders([...data.content]);
    } else {
      getProviders(0)
        .then((res) => setProviders([...res.content]))
        .catch((err) => console.log(err));
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Restaurant</Text>
      <View style={{ marginTop: 35 }}>
        {providers.length > 0 ? (
          providers.map((provider) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Menu", {
                  provider: { name: provider.name, id: provider.id },
                })
              }
              style={styles.resto}
              key={provider.id}
            >
              <Image
                style={styles.image}
                source={{
                  uri: "https://ditech.media/wp-content/uploads/2020/05/pancakes.jpg",
                }}
              />
              <View style={styles.r_content}>
                <Text style={styles.r_name}>{provider.name}</Text>
                <Text style={styles.r_menu}>
                  {provider.serviceCategory.name}, {provider.address}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No match found</Text>
        )}
      </View>
      <StatusBar style="auto" />
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
    fontSize: 18,
    marginTop: 20,
    fontFamily: "DMSans_700Bold",
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
  },
  r_name: { fontSize: 18, marginTop: 5, fontFamily: "DMSans_700Bold" },
  r_menu: { fontSize: 16, marginTop: 8, fontFamily: "DMSans_400Regular" },
});
