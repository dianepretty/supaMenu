import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Left from "../components/Header/Left";
import Cart from "../screens/Cart";
import Payement from "../screens/Payement";
import PaymentDone from "../screens/PaymentDone";
import RateUs from "../screens/RateUs";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator initialRouteName="CartH">
      <Stack.Screen
        name="CartH"
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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentDone"
        component={PaymentDone}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RateUs"
        component={RateUs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
