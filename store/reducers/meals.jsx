import { MEALS } from "../../data/dummy-data"
import {TOGGLE_FAV, toggleFav} from "../actions/meals"


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
        default:
            return state;
    }
}

export default mealReducer;