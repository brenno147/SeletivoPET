import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Olá, profissional da saúde!{"\n"} Selecione um dos menus para começarmos</Text>
            <View style={styles.buttonContainer}>
                <SimpleButton textoPrincipal="Calculadora de risco (Gail)" navigation = {() => navigation.navigate("Elegibilidade1")}/>
            </View>
            <SimpleButton textoPrincipal="Acesso a informação" navigation = {() => navigation.navigate("InformacaoMenu")}/>
            <SimpleButton textoPrincipal="Sobre o aplicativo" navigation = {() => navigation.navigate("Sobre")}/>
            
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
    buttonContainer: {
        flexDirection: "row",
    },
    imageStyle: {
        height:120,
        width:120
    },
    text: {
        fontSize:22,
        textAlign: "left"
    }

})

export default Homepage;