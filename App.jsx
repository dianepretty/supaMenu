import {NavigationContainer} from '@react-navigation/native'
import LoginPage from "./src/screens/LoginPage";
import Landing from "./src/screens/Landing";
import SignUpPage from "./src/screens/SignUpPage";
import LandingPage from "./src/screens/LandingPage";
import Tabs from './src/navigation/Tabs'

export default function App() {
  return (
  <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
