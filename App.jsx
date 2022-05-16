import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {tailwind} from 'tailwind-rn';
import Landing from './screens/Landing';
import Menu from './screens/Menu';
import RateUs from './screens/RateUs';
import SignUp from './screens/SignUp';


export default function App() {

  return (
   
    <Landing></Landing>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
