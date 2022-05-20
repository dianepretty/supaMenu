import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Left from "../components/Header/Left";
import Cart from "../screens/Cart";
import Payement from "../screens/Payement";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: () => null,
          headerLeft: () => <Left color="#f9b461" />,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payement}
        options={{
          headerTitle: () => null,
          headerLeft: () => <Left color="green" />,
        }}
      />
    </Stack.Navigator>
  );
}
