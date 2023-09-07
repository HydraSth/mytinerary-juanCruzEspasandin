import { createAction } from "@reduxjs/toolkit";

const modify_create_step = createAction("modify_step", (payload) => {
    return {
        payload: payload,
    }
});

const modify_sign_step = createAction("modify_sign_step", (payload) => {
    return {
        payload: payload,
    }
});

const modify_sign = createAction("modify_sign", (payload) => {
    return {
        payload: payload,
    }
});

const loginActions={modify_create_step,modify_sign,modify_sign_step}

export default loginActions;