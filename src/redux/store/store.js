import { configureStore } from "@reduxjs/toolkit";
import {citiesReducer} from "../reducers/cities_reducer";
import {filterReducer} from "../reducers/filter_reducer";
import { loginReducer } from "../reducers/login_reducer";
import { userReducer } from "../reducers/user_reducer";
import { registerReducer } from "../reducers/register_reducer";

export const store = configureStore({
    reducer: {
        cities_reducer: citiesReducer,
        filter_reducer: filterReducer,
        login_reducer: loginReducer,
        user_reducer: userReducer,
        register_reducer: registerReducer
    },
})