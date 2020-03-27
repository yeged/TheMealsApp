import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data";
import { enableScreens } from "react-native-screens"
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

enableScreens(); // for better performance


function CategoriesScreen(props) {

    function renderListItem(itemData) {
        return (
            <CategoryGridTile
                onSelect={() =>
                    props.navigation.navigate({
                        routeName: "CategoryMeal", params: {
                            categoryId: itemData.item.id
                        }
                    }
                    )}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}
        />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})

export default CategoriesScreen;