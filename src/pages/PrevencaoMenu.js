import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const PrevencaoMenu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SimpleButton textoPrincipal="Primária" navigation = {() => navigation.navigate("PrevPrimaria")}/>
            <SimpleButton textoPrincipal="Secundária" navigation = {() => navigation.navigate("PrevSecundaria")}/>
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
})

export default PrevencaoMenu;