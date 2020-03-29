import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons"
import { Platform, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { createDrawerNavigator } from "react-navigation-drawer"

import Colors from "../constants/Colors"


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen"
import FilterScreen from "../screens/FiltersScreen"

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTitleStyle:{
            fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle:{
            fontFamily: "open-sans"
        },
        headerTintColor: "white"
    }
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, //Shorter
    CategoryMeal: {
        screen: CategoryMealScreen //Longer
    },
    MealDetail: MealDetailScreen
}, defaultStackNavOptions)

const FavsNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen

}, defaultStackNavOptions)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: "open-sans-bold"}}>Meals</Text> : "Meals"
        }
    },
    Favorites: {
        screen: FavsNavigator,
        navigationOptions: {
            //tabBarLabel: "Favorites",
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: "open-sans-bold"}}>Favorites</Text> : "Favorites"
        }
    }
}



const MealsFavTabNav = Platform.OS === "android" ?

    createMaterialBottomTabNavigator(tabScreenConfig, {
        tintColor: "white",
        shifting: true,
        // barStyle:{
        //     backgroundColor: Colors.primaryColor
        // }
    }) : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle:{
                fontFamily: "open-sans-bold"
            }
        }
    })

    
const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, defaultStackNavOptions)

const MainNavigator = createDrawerNavigator({
    MealsFav: { 
        screen: MealsFavTabNav,
        navigationOptions:{
            drawerLabel: "Meals"
        } 
    },
    Filters: FiltersNavigator
},{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle:{
            fontFamily:"open-sans-bold"
        }
    }
})

export default createAppContainer(MainNavigator)