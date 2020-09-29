import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

export default () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                Não Elegivel
            </Text>
            <Text style={styles.text}>
                Não trabalhamos com você.
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