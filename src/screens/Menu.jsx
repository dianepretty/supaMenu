import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";

export class Menu extends Component {
  render() {
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
          Choose Kigali
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
          menu
        </Text>
        <View style={styles.links}>
          <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Appetizer</Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Starter</Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Main</Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Desert</Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Drink</Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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

export default Menu;
