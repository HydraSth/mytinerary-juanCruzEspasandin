import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities_action";

const initialState = {
    city: {}
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return builder.addCase(citiesActions.add_city, (state, action)=>{
        return{
            ...state, 
            cities: action.payload
        }
    })
})


export {citiesReducer}