import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities_action";

const initialState = {
    cities: [{}]
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return builder.addCase(citiesActions.get_cities, (state, action)=>{
        return{
            ...state, 
            cities: action.payload
        }
    })
})


export {citiesReducer}