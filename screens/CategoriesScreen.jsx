import React, { useState } from "react";
import {StyleSheet,FlatList} from "react-native";

import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons"




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