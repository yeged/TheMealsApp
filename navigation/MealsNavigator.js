import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

import Colors from "../constants/Colors"


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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

export default createAppContainer(MealsNavigator)