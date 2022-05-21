import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";
import SearchBar from "../components/Header/SearchBar";
import Left from "../components/Header/Left";
import Menu from "../screens/Menu";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="RestaurantsH">
      <Stack.Screen
        name="RestaurantsH"
        component={Restaurants}
        options={{
          headerTitle: (props) => <SearchBar {...props} />,
          headerLeft: () => <Left />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
