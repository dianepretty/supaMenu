import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const RateUs = () => {
  return (
    <View style={styles.containter}>

    <View style={styles.col}>
    <View>
        <Text style={styles.orange}>Yayy!!</Text>
        <Text style={styles.orange}>We value all feedback,plase rate your experience below:</Text>
        </View>

        <View>
      
        <Text style={styles.orange}>Thank you for helping us improve our service!</Text>
        </View>
    </View>
     


        <View>
            <View style={styles.supa}>
                <Text style={styles.sp1}>Supa</Text>
                <Text style={styles.sp2}>Menu</Text>
            </View>
            
        </View>
     

    </View>
  )
}

export default RateUs

const styles = StyleSheet.create({
    col:{
        textAlign:"center",
        marginTop:"5em"

    },
    sp1:{
        color:"white"
        , fontWeight:"bold",
        fontSize:"1.5em"
    },
    sp2:{
 color:"orange"

 , fontWeight:"bold",
        fontSize:"1.5em"
    },
    supa:{
        flexDirection: 'row',
        justifyContent: "center",
      
    },
    containter:{
backgroundColor:"black",
height:"100%"
    },
    orange:{
        color:"orange"
    }
})