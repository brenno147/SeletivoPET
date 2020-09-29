import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                O que é câncer de mama?
            </Text>
            <Text style={styles.text}>
                O câncer de mama é uma doença causada pela multiplicação desordenada de células da mama. Esse processo gera células anormais que se multiplicam, formando um tumor.
            </Text>
            <Text style={styles.headerText}>
                Como ele se manifesta?
            </Text>
            <Text style={styles.text}>
                Na maioria se manifesta com um caroço na mama, mas também pode se apresentar de outras formas:
            </Text>
            <Image style={styles.imageStyle} source={require('../../assets/pepedance.png')}/>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:5,
        marginVertical:25
    },
    headerText:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    text:{
        fontSize:20,
        textAlign: "justify",
        marginVertical:20
    },
    imageStyle:{
        height:120,
        width:250
    }
})