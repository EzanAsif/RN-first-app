import React, { useState } from 'react';
import { StyleSheet,Text, View, Button} from 'react-native';

function Home(props){
    const name = 'Ezan';
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize : 32}}>This is Home page</Text>
            <Button title = "Go to About" onPress = {()=> {props.navigation.navigate('About', {name : `${name}`,})}} />
            <Button title = "Go to Contact" onPress = {()=> {props.navigation.navigate('Contact')}} />
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

export default Home;