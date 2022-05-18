import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Left from "./src/components/Header/Left";
import HeaderSearch from "./src/components/Header/SearchBar";
import Resto from "./src/screens/Resto";
import Restos from "./src/screens/Restos";

// import {
//   useFonts,
//   Arvo_400Regular,
//   Arvo_700Bold,
//   Rubik_400Regular,
// } from "@expo-google-fonts/dev";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Restos">
        <Stack.Screen
          name="Restos"
          component={Restos}
          options={
            {
              title: "Restaurants",
              headerLeft: ({ navigation }) => {
                return <Left onPress={() => navigation.goBack()} />;
              },
              headerTitle: (props) => <HeaderSearch {...props} />,
            }
            // ...coptions,
          }
        />
        <Stack.Screen
          name="Resto"
          component={Resto}
          options={{
            title: "Restaurant",
            headerLeft: ({ navigation }) => {
              return (
                <Left onPress={() => navigation.navigation("Restaurants")} />
              );
            },
            headerTitle: (props) => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
