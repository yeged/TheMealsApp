import React from "react";
import {View, Text, StyleSheet} from "react-native";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons"


function FilterScreen(props){
    return(
        <View><Text>LOL</Text></View>
    )
}

FilterScreen.navigationOptions = (navData) => {
    return { headerTitle: "Filter Meals",
     headerLeft : () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title="menu" iconName="ios-menu" onPress={ () => {
             navData.navigation.toggleDrawer()
         }} />
     </HeaderButtons>}
 }

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FilterScreen;