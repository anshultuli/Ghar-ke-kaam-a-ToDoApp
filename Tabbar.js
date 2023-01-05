import React from "react";
import { View,StyleSheet } from "react-native";
import TabBarItem from './Tabbaritem'

const TabBar=({setType,type}) => (
    <View style={styles.container}>
        <TabBarItem type={type} title='Siyappe'
        setType={() => setType('All')} />
        <TabBarItem type={type} border title='Kaamchori'
        setType={() => setType('Active')} />
        <TabBarItem type={type} border title='SeenaZori'
        setType={() => setType('Complete')} />
    </View>
)

const styles=StyleSheet.create({
    container:{
        height:70,
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#dddddd'
    }
})

export default TabBar