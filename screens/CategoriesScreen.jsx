import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from "react-native";

import CategoryGridTile from "../components/CategoryGridTile"
import {CATEGORIES} from "../data/dummy-data";
import { enableScreens } from "react-native-screens"

enableScreens(); // for better performance


function CategoriesScreen(props){

    function renderListItem(itemData){
        return(
            <CategoryGridTile 
            onSelect={() => 
            props.navigation.navigate({routeName: "CategoryMeal", params: {
                categoryId : itemData.item.id
            }}
            )}
            title={itemData.item.title}
            color={itemData.item.color}
            />
        )
    }
    
    return(
        <FlatList 
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories"
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    
})

export default CategoriesScreen;