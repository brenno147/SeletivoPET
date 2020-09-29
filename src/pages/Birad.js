import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

export default () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a efficitur leo. In hac habitasse platea dictumst. Maecenas vitae auctor.
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
    text:{
        fontSize:20,
        textAlign: "justify",
        marginVertical:20
    }
})