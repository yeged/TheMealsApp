import React, {useEffect, useCallback} from "react";
import {ScrollView, Image, View, Text, StyleSheet} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText"
import { useSelector, useDispatch } from "react-redux";
import {toggleFav} from "../store/actions/meals"

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

function MealDetailScreen(props){

    const mealId = props.navigation.getParam("mealId");

    const availableMeals = useSelector(state => state.meals.meals)

    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch();
    

    const favMealsHandler = useCallback(() => {
        dispatch(toggleFav(mealId))
    }, [dispatch, mealId])

    useEffect( () => {
        props.navigation.setParams({
            favMeal: favMealsHandler
        }) 
    },[favMealsHandler] )

    const mealIsFavorite = useSelector((state) => state.meals.favorites.some(meal => meal.id === mealId))

    useEffect(() => {
        props.navigation.setParams({
            isFav: mealIsFavorite
        })
    }, [mealIsFavorite])
    // React.useEffect( () => {
    //     props.navigation.setParams({
    //         mealTitle: selectedMeal.title
    //     })
    // }, [selectedMeal])

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageURL}} style={styles.image} />
            <View style={styles.detail}> 
            <DefaultText>{selectedMeal.duration}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>
            <View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem> )}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
            </View>
        </ScrollView>
    )
   
}

MealDetailScreen.navigationOptions = (navigationData) => {
    //const mealId = navigationData.navigation.getParam("mealId");
    const mealTitle = navigationData.navigation.getParam("mealTitle")
    //const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const toggleFav = navigationData.navigation.getParam("favMeal")
    const isFav = navigationData.navigation.getParam("isFav");
    
    return {
        headerTitle: mealTitle.substring(0,20) + "...",
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}> 
            <Item 
                iconName={isFav ? "ios-star" : "ios-star-outline"}
                title="Favorite Star"
                onPress={toggleFav}
            />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 200
        
    },
    detail:{
        flexDirection:"row",
        justifyContent: "space-around",
        padding: 12
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 20,
        textAlign: "center"
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc"

    }
})

export default MealDetailScreen