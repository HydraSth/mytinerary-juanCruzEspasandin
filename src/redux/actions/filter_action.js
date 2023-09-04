import { createAction } from "@reduxjs/toolkit";

const modify_filter = createAction("modify_filter", (filter) => {
    return {
        payload: filter
    }
});

const filterActions={modify_filter}

export default filterActions;