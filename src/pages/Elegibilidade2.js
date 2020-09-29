import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const Elegibilidade2 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Questão 2
            </Text>
            <View style={styles.buttonContainer}>
                <SimpleButton textoPrincipal="Sim" navigation = {() => navigation.navigate("NaoElegivel")}/>
                <SimpleButton textoPrincipal="Não" navigation = {() => navigation.navigate("Calculadora")}/>
            </View>
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
    text: {
        fontSize:22,
        textAlign: "left"
    }

})

export default Elegibilidade2;