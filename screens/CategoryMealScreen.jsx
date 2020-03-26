import React from "react";
import MealList from "../components/MealList"



import {CATEGORIES, MEALS} from "../data/dummy-data"

function CategoryMealScreen(props){

    const catId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

    

    return(
        <MealList List={displayedMeals} navigation={props.navigation}/>
    )
}   

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectedMeal = CATEGORIES.find((value) => value.id === catId)

    return({
        headerTitle: selectedMeal.title
    })
}



export default CategoryMealScreen