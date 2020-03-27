import React from "react";
import {View, Text, StyleSheet} from "react-native";
import MealList from "../components/MealList"
import {MEALS} from "../data/dummy-data"
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

function FavoritesScreen(props){

    const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")

    return(
        <MealList navigation={props.navigation} List={favMeal} />
    )
}
FavoritesScreen.navigationOptions = (navData) => {
    return { headerTitle: "Your Favorites",
     headerLeft : () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title="menu" iconName="ios-menu" onPress={ () => {
             navData.navigation.toggleDrawer()
         }} />
     </HeaderButtons>}
 }



export default FavoritesScreen