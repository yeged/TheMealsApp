import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import MealItem from "../components/MealItem"



import {CATEGORIES, MEALS} from "../data/dummy-data"

function CategoryMealScreen(props){

    const catId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

    function renderMealItem(itemData){
        return(
           <MealItem 
            onSelectMeal={() => {
                props.navigation.navigate("MealDetail", {
                    mealId: itemData.item.id
                })
            }}
            title={itemData.item.title}
            affordability={itemData.item.affordability}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            image={itemData.item.imageURL}
           />
        )
    }

    return(
        <View style={styles.screen}>
        <FlatList 
            data={displayedMeals}
            renderItem={renderMealItem} 
            style={{width: "95%"}} 
        />
        </View>
    )
}   

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectedMeal = CATEGORIES.find((value) => value.id === catId)

    return({
        headerTitle: selectedMeal.title
    })
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealScreen