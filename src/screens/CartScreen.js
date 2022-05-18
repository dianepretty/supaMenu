import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>cart screen</Text>
            <Button
            title='click here'
            onPress={()=>alert("Button clicked!")}/>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc',
    },
})