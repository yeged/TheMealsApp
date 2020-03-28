import React from "react";
import MealList from "../components/MealList"



import {CATEGORIES} from "../data/dummy-data"
import { useSelector } from "react-redux";

function CategoryMealScreen(props){

    const catId = props.navigation.getParam("categoryId");

    const availableMeals = useSelector(state => state.meals.filters)

    const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

    

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