import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Restaurants">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
