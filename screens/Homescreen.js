import React from "react";
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const HomeScreen =() =>{


    return(
        <View style ={{ height:'100%',  backgroundColor: '#fefbd8',justifyContent:'center', alignItems:'center', //View tag with Text tags in it that displays data, Touchable opacity used to create button
        }}>
            <Text style={{fontSize:40, fontWeight:'bold',  letterSpacing:5, position: 'absolute', bottom: 880, color:'#098686',}}>Books app</Text>
            <Text style={{fontSize:30, fontWeight:'bold',  letterSpacing:5,  position:'absolute', bottom: 840, color:'#000000'}}>Home</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 750, color:'#000000'}}>Harry Potter</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 700, color:'#000000'}}>J. K. Rowling</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 650, color:'#000000'}}>Sci-fi</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 600, color:'#000000'}}>870 pages</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 450, color:'#000000'}}>Total number of pages read: 345</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 400, color:'#000000'}}>Average number of pages read: 200</Text> 
            <TouchableOpacity style={styles.addButton}>
             <Text style={styles.buttonText}><Ionic name={"book"}  size={30} color={"black"}/> Add book</Text> 
            </TouchableOpacity>

            
        </View>
    );
};
//Stylesheet created to style components
const styles = StyleSheet.create({
    addButton:{
        backgroundColor: '#66d366',
        paddingHorizontal: 40,
        paddingVertical: 15,
         marginTop: 10,
         borderRadius: 8,
         position:'absolute',
         top: 700,
      },
      
      buttonText:{
      fontWeight: 'bold',
      fontSize: 20,
      },
});


//Export app
export default HomeScreen;
