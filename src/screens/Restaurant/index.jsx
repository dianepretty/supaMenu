import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restos from "./Restos";
import SearchBar from "../../components/Header/SearchBar";
import Left from "../../components/Header/Left";
import Resto from "./Resto";

const Stack = createNativeStackNavigator();

export default function Restaurants() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Restos"
          component={Restos}
          options={{
            headerTitle: (props) => <SearchBar {...props} />,
            headerLeft: () => <Left />,
          }}
        />
        <Stack.Screen
          name="Resto"
          component={Resto}
          options={{
            headerTitle: () => null,
            headerLeft: () => <Left />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
