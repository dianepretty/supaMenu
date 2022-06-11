import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";
import LandingPage from "./src/screens/LandingPage";
import AuthStack from "./src/navigation/AuthStack";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dev";

export default function App() {
  const [auth, setAuth] = useState(true);
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  return fontsLoaded ? (
    <NavigationContainer>{auth ? <Tabs /> : <AuthStack />}</NavigationContainer>
  ) : (
    <LandingPage />
  );
}
