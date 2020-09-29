import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

export default () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                Rastreamento
            </Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu libero non nibh hendrerit vulputate. Phasellus porttitor mi vitae dictum.
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
        fontWeight: 'bold',
        color:"#ffcbdb"
    },
    text:{
        fontSize:20,
        textAlign: "justify",
        marginVertical:20
    },
})