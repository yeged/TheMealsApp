import { MEALS } from "../../data/dummy-data"
import {TOGGLE_FAV, SET_FILTERS} from "../actions/meals"


const initialState = {
    meals: MEALS,
    filters: MEALS,
    favorites: []
}

const mealReducer = (state = initialState, actions) => {
    switch(actions.type){
        case TOGGLE_FAV:
            const existingItem = state.favorites.findIndex(meal => meal.id === actions.mealId)
            if(existingItem >= 0){
                const updateItem = [...state.favorites]
                updateItem.splice(existingItem, 1)
                return {...state, favorites: updateItem }
            }else{
                const meal = state.meals.find(meal => meal.id === actions.mealId)
                return {...state, favorites: state.favorites.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = actions.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false;
                }
                return true;
            })
            return{...state, filters: updatedFilteredMeals}
        default:
            return state;
    }
}

export default mealReducer;