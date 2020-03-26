import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons"

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

const MealsFavTabNav = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-restaurant" size={25}  color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions:{
            //tabBarLabel: "Favorites",
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealsFavTabNav)