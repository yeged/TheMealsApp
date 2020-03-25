import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


function MealDetailScreen(props){
    return(
        <View style={styles.screen}>
            <Text>This is Meal screen</Text>
            <Button title="Go Back to TOP" onPress={() => {
                props.navigation.popToTop(); 
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

export default MealDetailScreen