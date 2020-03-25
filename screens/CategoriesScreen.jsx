import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

import {CATEGORIES} from "../data/dummy-data";


function renderListItem(itemData){
    return(
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

function CategoriesScreen(props){
    return(
        <FlatList 
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}
        />

        /* <View style={styles.screen}>
            <Text>LOL</Text>
            <Button title="Go To Meals" onPress={() => {
                props.navigation.navigate({routeName: "CategoryMeal"})
                //props.navigation.replace("CategoryMeal") // Cant go back with replace
            }} />
        </View> */
    )
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