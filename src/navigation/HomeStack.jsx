import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";
import SearchBar from "../components/Header/SearchBar";
import Left from "../components/Header/Left";
import Menu from "../screens/Menu";

const Stack = createNativeStackNavigator();

export default function HomeStack(parentProps) {
  return (
    <Stack.Navigator initialRouteName="RestaurantsH">
      <Stack.Screen
        name="RestaurantsH"
        options={{
          headerTitle: (props) => (
            <SearchBar
              {...props}
              keyword={
                parentProps.route.params ? parentProps.route.params.term : ""
              }
            />
          ),
          headerLeft: () => <Left />,
        }}
      >
        {(props) => (
          <Restaurants
            {...props}
            data={
              parentProps.route.params ? parentProps.route.params.data : null
            }
            term={
              parentProps.route.params ? parentProps.route.params.term : null
            }
          />
        )}
      </Stack.Screen>
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
