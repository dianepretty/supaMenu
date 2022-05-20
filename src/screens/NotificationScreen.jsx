import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>notificatio  screen</Text>
            <Button
            title='click here'
            onPress={()=>alert("Button clicked!")}/>
        </View>
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc',
    },
})