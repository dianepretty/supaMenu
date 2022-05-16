import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {tailwind} from 'tailwind-rn';
import Menu from './screens/Menu';
import Payement from './screens/Payement';
import RateUs from './screens/RateUs';


export default function App() {

  return (
   <View >
<Payement></Payement>

   </View>
      

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
