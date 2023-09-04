import { createReducer } from "@reduxjs/toolkit";
import filterActions from "../actions/filter_action";

const initialState = {
    filter: ""
}

const filterReducer = createReducer(initialState, (builder)=>{
    return builder.addCase(filterActions.modify_filter , (state, action)=>{
        return{
            ...state, 
            filter: action.payload
        }
    })
})

export {filterReducer}