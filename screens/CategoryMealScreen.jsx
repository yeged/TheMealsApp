import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";



import {CATEGORIES, MEALS} from "../data/dummy-data"

function CategoryMealScreen(props){

    const catId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

    function renderMealItem(itemData){
        return(
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return(
        <View style={styles.screen}>
        <FlatList 
            data={displayedMeals}
            renderItem={renderMealItem}  
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