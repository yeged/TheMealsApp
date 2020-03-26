import React from "react";
import {View, Text, StyleSheet} from "react-native";
import MealList from "../components/MealList"
import {MEALS} from "../data/dummy-data"

function FavoritesScreen(props){

    const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")

    return(
        <MealList navigation={props.navigation} List={favMeal} />
    )
}

FavoritesScreen.navigationOptions= {
    headerTitle: "Your Favorites"
}



export default FavoritesScreen