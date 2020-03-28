import React from "react";
import {View, Text, StyleSheet} from "react-native";
import MealList from "../components/MealList"
import {MEALS} from "../data/dummy-data"
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

function FavoritesScreen(props){

    

    const favMeal = useSelector(state => state.meals.favorites)

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