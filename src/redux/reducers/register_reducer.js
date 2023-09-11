import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user_actions";

const registerState = {
    register_mail:"",
    register_error_message:"",
    register_password:"",
}

const userRegisterReducer = createReducer(registerState, (builder)=>{
    return(
    builder.addCase(userActions.modify_login_error_message , (state, action)=>{
        return{
            ...state, 
            login_error_message: action.payload
        }
    }),
    builder.addCase(userActions.modify_login_password , (state, action)=>{
        return{
            ...state, 
            login_password: action.payload
        }
    })
    )
})

export {userRegisterReducer}