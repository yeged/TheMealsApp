import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons"
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import Colors from "../constants/Colors"


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen"

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, //Shorter
    CategoryMeal: {
        screen: CategoryMealScreen //Longer
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: "white"
    }
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            //tabBarLabel: "Favorites",
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsFavTabNav = Platform.OS === "android" ? 

    createMaterialBottomTabNavigator(tabScreenConfig, {
        tintColor: "white",
        shifting:true,
        // barStyle:{
        //     backgroundColor: Colors.primaryColor
        // }
}) : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealsFavTabNav)