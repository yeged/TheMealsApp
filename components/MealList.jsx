import React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import MealItem from "./MealItem"

function MealList(props){

    function renderMealItem(itemData){
        return(
           <MealItem 
            onSelectMeal={() => {
                props.navigation.navigate("MealDetail", {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title
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
            data={props.List}
            renderItem={renderMealItem} 
            style={{width: "95%"}} 
        />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealList;
