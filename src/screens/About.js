import React, { useState } from 'react';
import { StyleSheet,Text, View, Button} from 'react-native';


function About(props){
    const  {name} = props.route.params;
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize : 32}}>This is about page</Text>
            <Button title = "Go to Contact" onPress = {()=> {props.navigation.navigate('Contact')}} />
            <Text>The name of user is {name}</Text>
            {/* <Button title = "Go to Home" onPress = {()=> {props.navigation.navigate('Home')}} /> */}

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

export default About;