import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'




export class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.choose}>Choose Kigali</Text>

        <View style={styles.flex}>
            <View >
                <Text style={styles.white}>Ordered</Text>
            </View>
            <View style={styles.line} ></View>
            <View>
            <Text style={styles.white}>Call Waiter</Text>
            </View>
        </View>

        <View >
            <Text style={styles.choose}>
            menu
            </Text>
           
        </View>

        <View style={styles.links} >
            <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Appetizer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Starter</Text>
            </TouchableOpacity>
            
        <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Dessert</Text>
            </TouchableOpacity>
       
            <TouchableOpacity style={styles.height}>
            <Text style={styles.white1}>Drink
              </Text>
              </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    links:{
marginTop:"6px",
marginBottom:"6px"
    },
    height:{
        height:"3em"
    },
    container:{
        backgroundColor:"black",
        height:"100%"
    },
    choose:{
        color:"orange",
        fontWeight:'bold',
        fontFamily:"sans-serif",
        paddingTop:"2em",
        textAlign:"center",
        fontSize:"15px" 
    },
    white:{
        color:"white"
    },
    white1:{
        color:"white",
        marginLeft:"12px",
        
    },
    line:{
        borderLeftColor:"orange",
        borderLeftWidth:"3px",
        borderStyle:"solid",
        height:"3em",
        marginLeft:"5px",
        marginRight:"4px"
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"10px"
    }
})

export default Menu