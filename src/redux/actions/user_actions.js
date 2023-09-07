import { createAction } from "@reduxjs/toolkit";

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

const userActions={modify_login_mail,modify_login_password,modify_logged,modify_login_error_message}

export default userActions;