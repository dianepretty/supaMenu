import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { getMenuItems } from "../services/RestaurantService";
import { useNavigation } from "@react-navigation/native";

export default function Menu({ route }) {
  const [provider, setProvider] = useState({ name: "none" });
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      if (route.params.provider) {
        setProvider(route.params.provider);
      }
    }
    getMenuItems()
      .then((res) => setItems(res.content))
      .catch((err) => console.log(err));
  }, [route.params]);

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        hidden={false}
        // translucent = {true}
      />

      <View style={{ marginTop: 50 }}></View>
      <Text
        style={{
          fontSize: 20,
          color: "orange",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {provider.name}
      </Text>

      <View style={styles.flex}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name="funnel"
              size={24}
              color="orange"
              style={{ textAlign: "center", marginBottom: 10 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 10,
                fontWeight: "200",
              }}
            >
              N8
            </Text>
          </View>

          <Text style={{ color: "white", fontSize: 19 }}>Ordered</Text>
        </View>
        <View style={styles.line}></View>
        <View>
          <TouchableOpacity>
            <Entypo
              name="hand"
              size={24}
              color="orange"
              style={{ textAlign: "center", marginBottom: 10 }}
            />
          </TouchableOpacity>

          <Text style={{ color: "white", fontSize: 19 }}>Call Waiter</Text>
        </View>
      </View>

      <Text
        style={{
          color: "orange",
          fontSize: 22,
          fontWeight: "500",
          textAlign: "center",
          marginTop: 60,
        }}
      >
        Menu
      </Text>
      <View style={styles.links}>
        {items.length > 0 ? (
          items.map((item) => (
            <TouchableOpacity
              style={styles.height}
              key={item.id}
              onPress={() =>
                navigation.navigate("Cart", { item, goto: "menu" })
              }
            >
              <Text style={styles.white1}>{item.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="white" />
            </TouchableOpacity>
          ))
        ) : (
          <Text>Loading Menu</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  line: {
    borderLeftColor: "orange",
    borderLeftWidth: 1,
    borderStyle: "solid",
    height: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  links: {
    marginTop: 30,
    marginBottom: 10,
    paddingRight: 80,
    paddingLeft: 70,
  },
  height: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  white1: {
    color: "white",
    marginLeft: 20,
    marginTop: 1,
    fontSize: 19,
  },
});
