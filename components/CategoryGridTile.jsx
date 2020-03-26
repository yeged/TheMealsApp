import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback, Platform} from "react-native"


function CategoryGridTile(props) {
    let TouchCmp = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchCmp = TouchableNativeFeedback
    }

    return(
        <View style={styles.gridItem}>
        <TouchCmp style={{flex:1}} onPress={props.onSelect} >
        <View style={{...styles.container ,...{backgroundColor: props.color}}}>
            <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
        </View>
        </TouchCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:15,
        overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible",
        elevation:5,
    },
    container:{
        flex:1,
        borderRadius: 15,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height:2},
        shadowRadius:10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10
    },
    text:{
        fontFamily: "open-sans-bold",
        fontSize: 20,
        textAlign: "right"
    }
})

export default CategoryGridTile;