import {createStackNavigator, createAppContainer} from "react-navigation-stack"

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, //Shorter
    CategoryMeal: {
        screen: CategoryMealScreen //Longer
    },
    MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator);