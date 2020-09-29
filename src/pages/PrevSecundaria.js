import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const PrevencaoMenu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Secundária
            </Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu libero non nibh hendrerit vulputate. Phasellus porttitor mi vitae dictum.
            </Text>
            <SimpleButton textoPrincipal="Rastreamento" navigation = {() => navigation.navigate("Rastreamento")}/>
            <SimpleButton textoPrincipal="Diagnóstico Precoce" navigation = {() => navigation.navigate("DiagPrecoce")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#ffffff",
    },
    text:{
        fontSize:20,
        textAlign: "justify",
        marginVertical:20
    },
    headerText:{
        fontSize: 22,
        fontWeight: 'bold',
        color:"#ffcbdb"
    },
})

export default PrevencaoMenu;