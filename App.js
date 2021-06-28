import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList,ActivityIndicator } from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';

import Navigation from './src/config/Navigation'

export default function App() {

    const [name, setName] = useState();

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
    ];

    return ( 
        <Navigation />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop : 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        padding : 20
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        margin : 10,
        elevation: 24,
        backgroundColor : '#fcfcfc',
        width : '80%',
        height : 150,
        justifyContent : 'center',
        alignItems : 'center',
    }
    // main1: {
    //     backgroundColor: 'blue',
    //     width: '100%',
    //     flex: 1,
    // },
    // main2: {
    //     backgroundColor: 'green',
    //     width: '100%',
    //     flex: 8,
    // },
    // main3: {
    //     backgroundColor: 'orange',
    //     width: '100%',
    //     flex: 1,
    // },
    // text: {
    //     color: 'white',
    //     fontSize: 30,
    // },
    // boxes : {
    //     flex : 1,
    //     alignContent : 'center',
    //     margin : 10,
    //     flexDirection : 'row',
    //     justifyContent : 'space-around',
    //     flexWrap : 'wrap',
    // },
    // item : {
    //     backgroundColor : 'white', 
    //     width : 100,
    //     height : 100,
    //     margin : 10
    // },

















    // btn : {
    //   backgroundColor : "#323232",
    //   width : '80%',
    //    height : 40,
    //    justifyContent : "center", 
    //    alignItems : "center"
    // },
    // btnText : {
    //   color : "white",
    //   fontSize : 20
    // }
});
























        // <View style = {styles.container}>
        //     <ImageBackground style = {{width : '100%', height : '100%',}} source = {{uri : 'https://images.unsplash.com/photo-1623959809954-8d65ccf11479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'}}> 
        //         <Text style = {{color : 'white', fontSize : 30, margin : 100}}>Hello world</Text>
        //         <ActivityIndicator size = "large" color = 'white' />
        //     </ImageBackground>
            {/* <View style = {styles.main1}><Text style = {styles.text}>Header</Text></View>
            <View style = {styles.main2}>
                <View style = {styles.boxes}>
                    <View style = {styles.item}>
                        <Text>Item 1</Text>
                    </View>
                    <View style = {styles.item}>
                        <Text>Item 2</Text>
                    </View>
                    <View style = {styles.item}>
                        <Text>Item 3</Text>
                    </View>
                    <View style = {styles.item}>
                        <Text>Item 4</Text>
                    </View>
                    <View style = {styles.item}>
                        <Text>Item 5</Text>
                    </View>
                    <View style = {styles.item}>
                        <Text>Item 6</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.main3}><Text style = {styles.text}>Footer</Text></View> */}
                {/* {
                    [1,2,3,4,5,6,7,8,9,10].map((obj, index) => {
                        return(
                            <View style = {styles.card}>
                                <Text style = {{fontSize : 32}}>Hello</Text>
                            </View>
                        )
                    })
                } */}
        {/* <FlatList 
            data = {DATA}
            renderItem = {(data) =>{
                return(
                <View style = {styles.card}>
                    <Text style = {{fontSize : 32}}>{data.item.title}</Text>
                </View>
                )
            }}

        /> */}
    // </View>