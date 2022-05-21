import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";
import LandingPage from "./src/screens/LandingPage";
import AuthStack from "./src/navigation/AuthStack";
import Cart from "./src/screens/Cart";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppIsReady(true);
    }, 3000);
  }, []);

  return appIsReady ? (
    <NavigationContainer>{auth ? <Tabs /> : <AuthStack/>}</NavigationContainer>
  ) : (
    <LandingPage />
  );
}
