import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../screens/NotificationScreen";
import HistoryScreen from "../screens/HistoryScreen";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Restaurants from "../screens/Restaurants";
import Cart from "../screens/Cart";
import ScanScreen from "../screens/ScanScreen";
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";
import HomeScreen from "../screens/HomeScreen";
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "ios-notifications"
              : "ios-notifications-outline";
          } else if (route.name === "Scan") {
            iconName = focused ? "ios-scan" : "ios-scan-outline";
          } else if (route.name === "History") {
            iconName = focused ? "ios-time" : "ios-time-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f7941d",
        tabBarInactiveTintColor: "#494949",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          right: 3,
          left: 3,
          height: 80,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={ScanScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Restaurants"
        component={HomeStack}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
