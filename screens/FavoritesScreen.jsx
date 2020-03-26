import React from "react";
import {View, Text, StyleSheet} from "react-native";


function FavoritesScreen(){
    return(
        <View style={styles.screen}><Text>Hellow</Text></View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FavoritesScreen