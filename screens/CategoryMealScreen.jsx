import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";



import {CATEGORIES} from "../data/dummy-data"

function CategoryMealScreen(props){

    const catId = props.navigation.getParam("categoryId");

    const selectedMeal = CATEGORIES.find((value) => value.id === catId)

    return(
        <View style={styles.screen}>
            <Text>This is Meal screen</Text>
            <Text> {selectedMeal.title} </Text>
            <Button title="Go To Detail" onPress={() => {
                props.navigation.push("MealDetail") // u can use push instead of navigate in same screen different content
            }} />
            <Button title="Go Back" onPress={() => {
                //props.navigation.goBack(); // GO BACK
                props.navigation.pop();  // GO BACK FOR STACK
            }} />
        </View>
    )
}   

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectedMeal = CATEGORIES.find((value) => value.id === catId)

    return({
        headerTitle: selectedMeal.title
    })
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealScreen