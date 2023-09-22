import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const modify_login_mail = createAction("modify_login_mail", (payload) => {
    return {
        payload: payload,
    }
});
const modify_login_password = createAction("modify_login_password", (payload) => {
    return {
        payload: payload,
    }
});
const modify_logged = createAction("modify_logged", (payload) => {
    return {
        payload: payload,
    }
});
const modify_login_error_message = createAction("modify_login_error_message", (payload) => {
    return {
        payload: payload,
    }
});

const authenticate= createAsyncThunk("authenticate", async() => {
    try{
        let token=  localStorage.getItem('token')
        let user=axios.post('https://mytinerary.up.railway.app /api/auth/authenticate', null, {
            headers:{
                'Authorization': 'Bearer '+ token
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token)
        })
    }catch(err){
        console.log(err.message)
    }
    return{
        user:user
    }
})

const userActions={modify_login_mail,modify_login_password,modify_logged,modify_login_error_message,authenticate}

export default userActions;