import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {tailwind} from 'tailwind-rn';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Payement from './screens/Payement';
import RateUs from './screens/RateUs';
import SignUp from './screens/SignUp';
import LoginPage from './screens/LoginPage';


export default function App() {
  return (
   
   <LoginPage/>   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
