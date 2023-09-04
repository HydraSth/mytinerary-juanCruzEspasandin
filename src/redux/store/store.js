import { configureStore } from "@reduxjs/toolkit";
import {citiesReducer} from "../reducers/cities_reducer";
import {filterReducer} from "../reducers/filter_reducer";


export const store = configureStore({
    reducer: {
        cities_reducer: citiesReducer,
        filter_reducer: filterReducer
    },
})