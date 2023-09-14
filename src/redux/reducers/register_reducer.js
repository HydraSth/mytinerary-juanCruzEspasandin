import { createReducer } from "@reduxjs/toolkit";
import registerActions from "../actions/register_action";

const initialState = {
    email:"",
    password:"",
    error:""
}

const registerReducer = createReducer(initialState, (builder)=>{
    return(
        builder.addCase(registerActions.change_email, (state, action)=>{
            return{
                ...state, 
                email: action.payload
            }
        }),
        builder.addCase(registerActions.change_password , (state, action)=>{
            return{
                ...state, 
                password: action.payload
            }
        }),
        builder.addCase(registerActions.change_error , (state, action)=>{
            return{
                ...state,
                error:action.payload
            }
        })
    )
})


export {registerReducer}