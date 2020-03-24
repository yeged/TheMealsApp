import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";



function CategoriesScreen(props){
    return(
        <View style={styles.screen}>
            <Text>LOL</Text>
            <Button title="Go To Meals" onPress={() => {
                props.navigation.navigate({routeName: "CategoryMeal"})
            }} />
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

export default CategoriesScreen;