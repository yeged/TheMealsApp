import React from "react";
import {View, Text, StyleSheet} from "react-native";


function MealDetailScreen(){
    return(
        <View>
            <Text>This is Meal screen</Text>
        </View>
    )
   
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealDetailScreen