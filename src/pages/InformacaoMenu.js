import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const InformacaoMenu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SimpleButton textoPrincipal="Doença" navigation = {() => navigation.navigate("Doenca")}/>
            <SimpleButton textoPrincipal="Fatores de risco" navigation = {() => navigation.navigate("FatorRisco")}/>
            <SimpleButton textoPrincipal="Prevenção" navigation = {() => navigation.navigate("PrevencaoMenu")}/>
            <SimpleButton textoPrincipal="BI-RADS" navigation = {() => navigation.navigate("Birad")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "#ffffff",
    },
    text: {
        fontSize:22,
        textAlign: "left"
    }
})

export default InformacaoMenu;