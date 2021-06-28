import React, { useState } from 'react';
import { StyleSheet,Text, View, Button} from 'react-native';

function Contact(props){
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize : 32}}>This is Contact page</Text>
            {/* <Button title = "Go to About" onPress = {()=> {props.navigation.navigate('About')}} /> */}
            <Button title = "Go to Home" onPress = {()=> {props.navigation.navigate('Home')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default Contact;