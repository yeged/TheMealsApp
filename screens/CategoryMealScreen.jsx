import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


function CategoryMealScreen(props){
    return(
        <View>
            <Text>This is Meal screen</Text>
            <Button title="Go To Detail" onPress={() => {
                props.navigation.navigate({routeName: "MealDetail"})
            }} />
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

export default CategoryMealScreen