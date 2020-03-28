import { MEALS } from "../../data/dummy-data"

const initialState = {
    meals: MEALS,
    filters: MEALS,
    favorites: []
}

const mealReducer = (state = initialState, action) => {
    return state;
}   

export default mealReducer;