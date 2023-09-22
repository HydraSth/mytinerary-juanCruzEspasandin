import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk("get_cities", async() => {
    const res_cities= await axios.get("https://mytinerary.up.railway.app/api/dbCities")
    .then((res) => {
        return res.data.cities;
    })
    return {
        payload: res_cities
    }
});

const add_city = createAction("add_city", (cities) => {
    return {
        payload: cities
    }
})

const citiesActions={
    get_cities,
    add_city
}

export default citiesActions;