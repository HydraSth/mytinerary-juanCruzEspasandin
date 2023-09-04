import { createAsyncThunk } from "@reduxjs/toolkit";

const get_cities = createAsyncThunk("get_cities", async() => {

    return {
        payload: city.cities
    }
});

const citiesActions={
    get_cities
}

export default citiesActions;