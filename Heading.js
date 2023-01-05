import React from "react";
import { View,Text,StyleSheet } from "react-native";

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Ghar K kaam
        </Text>
    </View>
)

const styles=StyleSheet.create({
    header:{
        marginTop:80
    },
    headerText: {
        textAlign:'center',
        fontSize:60,
        color: 'rgba(175,47,47,0.5)',
        fontWeight: '95'
    }
})

export default Heading