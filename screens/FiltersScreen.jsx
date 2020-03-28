import React, {useState} from "react";
import {View, Text, Switch, StyleSheet, Platform} from "react-native";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons"

import Colors from "../constants/Colors"

function FilterSwitch(props) {
    return(
        <View style={styles.filterContainer}>
            <Text >{props.label}</Text>
            <Switch 
            value={props.state}
            onValueChange={props.onChange}
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Platform.OS === " android" ? Colors.primaryColor : ""}
            />
        </View>
    )
}

function FilterScreen(props){

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions</Text>
            <FilterSwitch
                label= "Gluten-free"
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label= "Lactose-free"
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label= "Vegan"
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label= "Vegetarian"
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
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
        alignItems: "center"
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 20,
        margin: 20,
        textAlign: "center"
    },
    filterContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        borderWidth:1,
        borderColor: "#ccc",
        padding:15,
        marginVertical: 10
    }
})

export default FilterScreen;