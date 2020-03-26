import React from "react"; 
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

function MealItem(props){
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.image}>
            <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
            </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    mealItem:{
        height:240,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 5,
    },
    mealDetail:{
        justifyContent: "space-between",
        paddingHorizontal: 15,
        height:"10%",
        alignItems: "center",
        
    },
    mealRow:{
        flexDirection: "row"
    },
    mealHeader:{
        height: "90%",
    },
    image:{
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    titleContainer:{
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 12,
        paddingHorizontal: 5
    },
    title:{
        color:"white",
        fontFamily: "open-sans-bold",
        fontSize:20,
        textAlign: "center"
    }

})

export default MealItem