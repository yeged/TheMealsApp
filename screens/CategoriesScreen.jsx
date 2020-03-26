import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import { useScreens } from "react-native-screens"

useScreens(); // for better performance


function CategoriesScreen(props){

    function renderListItem(itemData){
        return(
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({routeName: "CategoryMeal", params: {
                    categoryId : itemData.item.id
                } })
                }} >
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
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
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;