import { createAction } from "@reduxjs/toolkit";

const change_email = createAction("change_email", (payload) => {
    return {
        payload: payload,
    }
});
const change_password = createAction("change_password", (payload) => {
    return {
        payload: payload,
    }
});

const change_error = createAction("change_error", (payload) => {
    return {
        payload: payload,
    }
});

const registerActions={change_email,change_password,change_error}

export default registerActions;