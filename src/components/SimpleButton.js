import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SimpleButton = ({ textoPrincipal, navigation}) => {
    return(
        <TouchableOpacity style = {styles.buttonContainer} onPress = {navigation}>
                <Text style = {styles.buttonText}>{textoPrincipal}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 120,
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 3,
        borderColor: "#ffcbdb",
        backgroundColor: "#ffffff", 
    },
    buttonText:{
        fontSize: 30,
        color: "#000000",
    },
});

export default SimpleButton;