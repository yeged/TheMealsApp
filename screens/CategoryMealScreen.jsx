import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


function CategoryMealScreen(props){
    return(
        <View style={styles.screen}>
            <Text>This is Meal screen</Text>
            <Button title="Go To Detail" onPress={() => {
                props.navigation.push("MealDetail") // u can use push instead of navigate in same screen different content
            }} />
            <Button title="Go Back" onPress={() => {
                //props.navigation.goBack(); // GO BACK
                props.navigation.pop();  // GO BACK FOR STACK
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

export default CategoryMealScreen