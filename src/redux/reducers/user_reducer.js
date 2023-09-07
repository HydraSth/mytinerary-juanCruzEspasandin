import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user_actions";

const loginState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {
    logged:false,
    login_mail:"",
    login_error_message:"",
    login_password:"",
    }

const userReducer = createReducer(loginState, (builder)=>{
    return(
    builder.addCase(userActions.modify_login_error_message , (state, action)=>{
        return{
            ...state, 
            login_error_message: action.payload
        }
    }),
    builder.addCase(userActions.modify_logged , (state, action)=>{
        const newState={
            ...state, 
            logged: action.payload,
        }
        localStorage.setItem('reduxState', JSON.stringify(newState));
        return newState;
    }),
    builder.addCase(userActions.modify_login_mail , (state, action)=>{
        return{
            ...state, 
            login_mail: action.payload
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

const registerState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {
    logged:false,
    login_mail:"",
    login_error_message:"",
    login_password:"",
}

const userRegisterReducer = createReducer(loginState, (builder)=>{
    return(
    builder.addCase(userActions.modify_login_error_message , (state, action)=>{
        return{
            ...state, 
            login_error_message: action.payload
        }
    }),
    builder.addCase(userActions.modify_logged , (state, action)=>{
        const newState={
            ...state, 
            logged: action.payload,
        }
        localStorage.setItem('reduxState', JSON.stringify(newState));
        return newState;
    }),
    builder.addCase(userActions.modify_login_mail , (state, action)=>{
        return{
            ...state, 
            login_mail: action.payload
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

export {userReducer}