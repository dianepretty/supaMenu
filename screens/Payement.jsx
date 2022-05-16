import { Text, StyleSheet, View ,StatusBar , TouchableOpacity,Image} from 'react-native'
import React, { Component,useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { } from 'react-native-web';

const Payement= ()=> {
  
    const [credit,setCredit]=useState({
        color:"black",
        bg:"white"
    })

    const [cash,setCash]=useState({
        color:"white",
        bg:"#25D482"
    })

    const payMethod=(method)=>{

      if(method=="card"){


      }
      else{
      
      }

    }

    return (
      <View>
           <StatusBar  
                    backgroundColor = "white"  
                    barStyle ="dark-content"
                    hidden = {false}    
                    translucent = {true}  
                />  

<View style={styles.over}>
    <View style={{marginTop:50,flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{fontWeight:"bold",fontSize:23,color:"#3B3B3B"}}>Checkout</Text>
    <FontAwesome5 style={{marginTop:8,marginLeft:8}} name="credit-card" size={18} color="#CDC396" />
        </View>
   

<View>
<Text style={{color:"#25D482",fontSize:22,fontWeight:"bold"}}>Frw 16,000</Text>
<Text style={{color:"#CECECE"}}>Including VAT of (18%)</Text>
</View>
    </View>
    <View style={{marginTop:50,backgroundColor:"#25D482",height:70,borderRadius:20 ,flexDirection:"row", elevation: 30,
    shadowColor: '#25D482'}} >

<TouchableOpacity onPress={()=>payMethod("card")} style={{width:"50%"}}>
<View style={{backgroundColor:`${credit.bg}`,height:70,borderRadius:20}}>
      <Text style={{color:`${credit.color}`,textAlign:"center",marginTop:"auto",marginBottom:"auto",fontSize:18,fontWeight:"bold"}}>Credit Card </Text>
    </View>
</TouchableOpacity>
   
   <TouchableOpacity onPress={()=>payMethod("cash")} style={{width:"50%"}}>
    
    <View style={{backgroundColor:`${cash.bg}`,height:70,borderRadius:20}}>
      <Text style={{textAlign:"center",marginTop:"auto",marginBottom:"auto",fontSize:18,fontWeight:"bold",color:`${cash.color}`}}>Mobile & Cash</Text>
    </View>
    </TouchableOpacity>
</View>

</View>



<View style={{marginTop:70}}>
    <View>
        <Text>Hello</Text>
    <Image
     
        source={require('../images/momo.png')}
      />
      
    </View>
</View>
      
      </View>
    )
  }

export default Payement;

const styles = StyleSheet.create({
over:{
    backgroundColor: 'white',
  borderBottomRightRadius:30,
  borderBottomLeftRadius:30,
    height:180,
    paddingHorizontal: 25,
    width: '95%',
    marginVertical: 10,
    elevation: 80,
    shadowColor: '#25D482',
}
})