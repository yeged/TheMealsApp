import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs";

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
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: "white"
    }
})

const MealsFavTabNav = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
})

export default createAppContainer(MealsFavTabNav)