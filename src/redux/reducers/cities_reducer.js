import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities_action";

const initialState = {
    cities: [{}]
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return(
        builder.addCase(citiesActions.get_cities.fulfilled, (state, action)=>{
            return{
                ...state, 
                cities: action.payload.payload
            }
        }),
        builder.addCase(citiesActions.add_city, (state, action)=>{
            return{
                ...state, 
                cities: action.payload.cities
            }
        })
    )
})


export {citiesReducer}