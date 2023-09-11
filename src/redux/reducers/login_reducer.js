import { createReducer } from "@reduxjs/toolkit";
import loginActions from "../actions/login_action";

const initialState = {
    create_step:1,
    sign: true,
    sign_step:1
}

const loginReducer = createReducer(initialState, (builder)=>{
    return(
    builder.addCase(loginActions.modify_create_step , (state, action)=>{
        return{
            ...state, 
            create_step: action.payload
        }
    }),
    builder.addCase(loginActions.modify_sign_step , (state, action)=>{
        return{
            ...state, 
            sign_step: action.payload
        }
    }),
    builder.addCase(loginActions.modify_sign , (state, action)=>{
        return{
            ...state, 
            sign: action.payload
        }
    })
    )
})


export {loginReducer}