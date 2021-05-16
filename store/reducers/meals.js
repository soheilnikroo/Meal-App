import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAVORITES } from '../actions/meals';

const initialState ={
    meals: MEALS,
    filterMeals:MEALS ,
    favoriteMeals:[] , 
}

const mealsReducer = (state = initialState, action) =>{
    switch(action.type){
        case TOGGLE_FAVORITES :{
            const existingIndex = state.favoriteMeals.findIndex(meals => meals.id === action.mealId);
            
            if(existingIndex){
                const updatedeFavoriteMeals = [...state.favoriteMeals];
                updatedeFavoriteMeals.splice(existingIndex,1);
                return {...state,favoriteMeals: updatedeFavoriteMeals}
            }
            else{
                const meal=state.meals.find(meal=>meal.id === action.mealId);
                return {...state,favoriteMeals:state.favoriteMeals.concat(meal)};
            }
        }
        default: 
            return state;
    }

};

export default mealsReducer;