import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

const Poster = ({value1, value2, value3, value4, value5, value6}) => {
    return(
        <TouchableOpacity style = {styles.buttonContainer} onPress = {
            axios.post('https://bcrisktool.cancer.gov/calculate', {
                'cancerAndRadiationHistory': '1', 
                'geneticMakeup': '1',
                'age': value1,
                'race': value2,
                'biopsy': value3,
                'age_period': value4,
                'childbirth_age': value5,
                'relatives': value6
          })
          .then(function (response) {
            console.log(response);
          })}>
                <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    )
}

const Calculadora =({navigation}) => {
    return(
        <View style={styles.container}>
            <Poster value1='35' value2='Black' value3='0' value4='1' value5='2' value6='1'></Poster>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    picker:{
        width: 200,
        height: 500
    },
    text: {
        fontSize:22,
        textAlign: "left"
    },
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
    }
})
export default Calculadora;