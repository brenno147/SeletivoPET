import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

export default () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                Ambientais e Comportamentais
            </Text>
            <Text style={styles.text}>
                Excesso de peso;{"\n"}
                Inatividade física;{"\n"}
                Má alimentação;{"\n"}
                Ingestão de álcool;{"\n"}
                Uso de tabaco;
            </Text>   
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
})